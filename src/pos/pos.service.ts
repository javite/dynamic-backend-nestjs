import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { User } from 'src/database/entities/user.entity';
import { PO } from './../database/entities/po.entity';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';
import { CreateBatchDto } from './../batches/dto/create-batch.dto';
import { BatchesService } from 'src/batches/batches.service';
import { ProductsService } from 'src/products/products.service';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { EventType } from 'src/enums/event_type.enum';
import { ObjectType } from 'src/enums/object_type.enum';
@Injectable()
export class PosService {

  constructor(
    @InjectRepository(PO)
    private readonly poRepository: Repository<PO>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private batchesService: BatchesService,
    private productsService: ProductsService,
    private auditTrailService: AuditTrailService
  ) {}

  async create(createPoDto: CreatePoDto): Promise<PO>{
    const name = createPoDto.name;
    let createBatchDTO = new CreateBatchDto();
    createBatchDTO.name = createPoDto.batch.name;
    createBatchDTO.productId = createPoDto.productId;
    createBatchDTO.state = 0;
    createBatchDTO.expectedSize = createPoDto.batch.expectedSize;
    createBatchDTO.expirationDate = createPoDto.batch.expirationDate;
    createBatchDTO.productionDate = createPoDto.batch.productionDate;
    createBatchDTO.nokHigh = 0;
    createBatchDTO.nokLow = 0;
    createBatchDTO.nokOther = 0;
    createBatchDTO.nokTotal = 0;
    createBatchDTO.okTotal = 0;
    createBatchDTO.userId = createPoDto.userId;
    
    const poInDb = await this.poRepository.findOne({ where: { name } }); // check if the PO exists in the db    
    if (poInDb) {
        throw new HttpException('La PO ya existe', HttpStatus.BAD_REQUEST);    
    }
    const user = await this.usersRepository.findOne(createPoDto.userId);
    if (!user) {
      throw new HttpException('Usuario no existe', HttpStatus.BAD_REQUEST);    
    }
    const product = await this.productsService.findOne(createPoDto.productId);
    if (!product) {
      throw new HttpException('Producto no existe', HttpStatus.BAD_REQUEST);    
    }
    const batch =  await this.batchesService.create(createBatchDTO);
    if (!batch) {
      throw new HttpException('Error al crear lote', HttpStatus.BAD_REQUEST);    
    }
    product.batches = [batch];
    const po = this.poRepository.create(createPoDto);
    po.user = user;
    po.products = [product];
    po.batches = [batch];
    po.state = 0;
    const poCreated = await this.poRepository.save(po);
    if (!poCreated) {
      throw new HttpException('Error al crear lote', HttpStatus.BAD_REQUEST);    
    }
    delete poCreated.batches;
    delete poCreated.products;
    delete poCreated.user;
    if(poCreated){
      this.auditTrailService.auditLogEvent(EventType.created, ObjectType.PO, po.name, user, batch, po);
    }
    return poCreated;  
  }

  async findAll(): Promise<PO[]> {
    const po = await this.poRepository.find({relations: ['products', 'batches']});
    return po;
  }

  async findOne(id: number): Promise<PO> {
    const po = await this.poRepository.findOne(id,  {relations: ['products', 'batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    return po;
  }

  async findOpen(): Promise<PO[]> {
    let state = 1;
    const po = await this.poRepository.find({where: {state}, relations: ['products', 'batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    return po;
  }
  
  async findState(state: string): Promise<PO[]> {
    const po = await this.poRepository.find({where: {state}, relations: ['products', 'batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    return po;
  }

  async update(id: number, updatePoDto: UpdatePoDto, user: any) {
    const po = await this.poRepository.findOne(id);
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }

    let batch: Batch = updatePoDto.batches[0]; //guardo batch y product para actualizarlos
    let product: Product = updatePoDto.products[0];
    delete product["batches"];
    delete updatePoDto["products"]; //los borro porque no se actualizan en cadena.
    delete updatePoDto["batches"];

    await this.productsService.update(product.id, product, user);
    batch.product = product;
    await this.batchesService.update(batch.id, batch, user);
    await this.poRepository.update(id, updatePoDto);

    const updatedPO = await this.poRepository.findOne(id);
    delete po.batches;
    delete po.products;
    this.auditTrailService.auditLogDifference(ObjectType.PO, po, updatedPO, user, batch);

    return updatedPO;
  }

  async remove(id: number, user: any): Promise<DeleteResult> {
    const po = await this.poRepository.findOne(id, {relations: ['batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    const batchPO = po.batches[0];
    delete po.batches;
    this.auditTrailService.auditLogEvent(EventType.deleted, ObjectType.PO, po.name, user, batchPO)

    return this.poRepository.softDelete(id);
  }

  async close(id: string, user: any): Promise<any> {
    const po = await this.poRepository.findOne(id, {relations: ['batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    const batchPO = po.batches[0];
    delete po.batches;
    po.state = 2;
    const poUpdated = await this.poRepository.update(po.id, po);
    if(poUpdated){
      if(await this.batchesService.close(po.id, user)){
        this.auditTrailService.auditLogEvent(EventType.closed, ObjectType.PO, po.name, user, batchPO);
      } else {
        po.state = 1; 
        await this.poRepository.update(po.id, po);
        return false
      }
    }
    return true;
  }

  async open(id: string, userInfo: any): Promise<any> {
    const user = userInfo;
    const po = await this.poRepository.findOne(id, {relations: ['batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    po.state = 1;
    const batch = po.batches[0];
    delete po.batches;
    const poUpdated = await this.poRepository.update(po.id, po);
    if(poUpdated){
      if(await this.batchesService.open(po.id, user)){
        this.auditTrailService.auditLogEvent(EventType.opened, ObjectType.PO, po.name, user, batch);
      } else {
        po.state = 0; 
        await this.poRepository.update(po.id, po);
      }
    }
    return po;
  }

}
