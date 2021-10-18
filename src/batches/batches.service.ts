import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';


@Injectable()
export class BatchesService {
  constructor(
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
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
    await this.batchRepository.save(batch);
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

  async update(id: number, updateBatchDto: UpdateBatchDto) {
    const po = await this.batchRepository.findOne(id);
    if (!po) {
      throw new HttpException('PO not found', HttpStatus.BAD_REQUEST);    
    }

    await this.batchRepository.update(id, updateBatchDto);
    const updatedPO = await this.batchRepository.findOne(id);
    return updatedPO;
  }

  async remove(id: number): Promise<DeleteResult> {
    const batch = await this.batchRepository.findOne(id);
    if (!batch) {
      throw new HttpException('Batch not found', HttpStatus.BAD_REQUEST);    
    }
    return this.batchRepository.delete(id);
  }
}
