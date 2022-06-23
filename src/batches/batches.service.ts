import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Unit } from 'src/database/entities/unit.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { EventType } from 'src/enums/event_type.enum';
import { ObjectType } from 'src/enums/object_type.enum';
@Injectable()
export class BatchesService {
  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private auditTrailService: AuditTrailService
  ) {}

  async create(createBatchDto: CreateBatchDto): Promise<Batch>{
    const name = createBatchDto.name;
    createBatchDto.state = 0;
    const batchInDb = await this.batchRepository.findOne({ where: { name } }); 
    if (batchInDb) {
        throw new HttpException('Lote ya existe', HttpStatus.BAD_REQUEST);    
    }
    const product = await this.productsRepository.findOne(createBatchDto.productId);
    if (!product) {
      throw new HttpException('Producto no existe', HttpStatus.BAD_REQUEST);    
    }
    
    const batch = this.batchRepository.create(createBatchDto);
    batch.product = product;
    const batchCreated = await this.batchRepository.save(batch);

    if(batchCreated){
      this.auditTrailService.auditLogEvent(EventType.created, ObjectType.batch ,batch.name, createBatchDto.userId, batch, batch);
    }
    return batch;
  }

  async findAll(): Promise<Batch[]> {
    const batches = await this.batchRepository.find();
    return batches;
  }

  async findOne(id: number): Promise<Batch> {
    const batch = await this.batchRepository.findOne(id);
    if (!batch) {
      throw new HttpException('Batch not found', HttpStatus.BAD_REQUEST);    
    }
    return batch;
  }

  async update(id: number, updateBatchDto: UpdateBatchDto, user: any) {
    const batch = await this.batchRepository.findOne(id);
    if (!batch) {
      throw new HttpException('Batch not found', HttpStatus.BAD_REQUEST);    
    }

    await this.batchRepository.update(id, updateBatchDto);
    const updatedBatch = await this.batchRepository.findOne(id);

    this.auditTrailService.auditLogDifference(ObjectType.batch, batch, updatedBatch, user, batch)

    return updatedBatch;
  }

  async remove(id: number, user: any): Promise<DeleteResult> {
    const batch = await this.batchRepository.findOne(id);
    if (!batch) {
      throw new HttpException('Batch not found', HttpStatus.BAD_REQUEST);    
    }
    this.auditTrailService.auditLogEvent(EventType.deleted, ObjectType.batch, batch.name, user, batch);
    return this.batchRepository.softDelete(id);
  }

  async close(po: number, user: any): Promise<boolean> {
    const batches = await this.batchRepository.find({where: {po}});
    const batch = batches[0];
    if (!batch) {
      throw new HttpException('Batch not found', HttpStatus.BAD_REQUEST);    
    }
    
    const okTotal: number = await this.unitRepository.count({where:{batch , state: 0}});  //state: 0 ok, 1 high, 2 low, 3 other
    const nokHigh: number = await this.unitRepository.count({where:{batch , state: 1}});  //state: 0 ok, 1 high, 2 low, 3 other
    const nokLow: number = await this.unitRepository.count({where:{batch , state: 2}});  //state: 0 ok, 1 high, 2 low, 3 other
    const nokOther: number = await this.unitRepository.count({where:{batch , state: 3}});  //state: 0 ok, 1 high, 2 low, 3 other

    batch.state = 2;
    batch.okTotal = okTotal;
    batch.nokHigh = nokHigh;
    batch.nokLow = nokLow;
    batch.nokOther = nokOther;
    batch.nokTotal = nokHigh + nokLow + nokOther;
    
    const batchUpdated = await this.batchRepository.update(batch.id, batch);
    if(batchUpdated){
      this.auditTrailService.auditLogEvent(EventType.closed, ObjectType.batch, batch.name, user, batch);
    } else {
      batch.state = 1;
      await this.batchRepository.update(batch.id, batch);
      return false;
    }
    return true;
  }

  async open(po: number, user: any): Promise<boolean> {
    const batches = await this.batchRepository.find({where: {po}});
    const batch = batches[0];
    if (!batch) {
      throw new HttpException('Batch not found', HttpStatus.BAD_REQUEST);    
    }
    batch.state = 1;
    const batchUpdated = await this.batchRepository.update(batch.id, batch);
    if(batchUpdated){
      this.auditTrailService.auditLogEvent(EventType.opened, ObjectType.batch, batch.name, user, batch);
    } else {
      await this.batchRepository.update(batch.id, batch);
      batch.state = 0;
      return false;
    }
    return true;
  }
}
