import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { User } from 'src/database/entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PO } from './../database/entities/po.entity';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';
import { CreateBatchDto } from './../batches/dto/create-batch.dto';
import { BatchesService } from 'src/batches/batches.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class PosService {
  constructor(
    @InjectRepository(PO)
    private readonly poRepository: Repository<PO>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private batchesService: BatchesService,
    private productsService: ProductsService,
  ) {}

  async create(createPoDto: CreatePoDto): Promise<PO>{
    const name = createPoDto.name;
    let createBatchDTO = new CreateBatchDto();
    createBatchDTO.name = createPoDto.batchName;
    createBatchDTO.productId = createPoDto.productId;
    createBatchDTO.state = 0;

    const poInDb = await this.poRepository.findOne({ where: { name } }); // check if the user exists in the db    
    if (poInDb) {
        throw new HttpException('PO ya existe', HttpStatus.BAD_REQUEST);    
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
    await this.poRepository.save(po);
    return po;  
  }

  async findAll(): Promise<PO[]> {
    const po = await this.poRepository.find({relations: ['products']});
    return po;
  }

  async findOne(id: number): Promise<PO> {
    const po = await this.poRepository.findOne(id);
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    return po;
  }

  async findOpen(): Promise<PO[]> {
    let state = 1;
    const po = await this.poRepository.find({where: {state}, relations: ['products', 'products.batches']});
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    return po;
  }
  
  async update(id: number, updateProductDto: UpdatePoDto) {
    const po = await this.poRepository.findOne(id);
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }

    await this.poRepository.update(id, updateProductDto);
    const updatedPO = await this.poRepository.findOne(id);
    return updatedPO;
  }

  async remove(id: number): Promise<DeleteResult> {
    const po = await this.poRepository.findOne(id);
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }
    return this.poRepository.delete(id);
  }
}
