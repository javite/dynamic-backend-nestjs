import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { Product } from './../database/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EventType } from 'src/enums/event_type.enum';
import { ObjectType } from 'src/enums/object_type.enum';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly auditTrailService: AuditTrailService
  ) {}

  async create(createProductDto: CreateProductDto, user: any): Promise<Product>{
    const name = createProductDto.name;
    const prodInDb = await this.productsRepository.findOne({ where: { name } }); // check if the product exists in the db    
    if (prodInDb) {
        throw new HttpException('Producto ya existe', HttpStatus.BAD_REQUEST);    
    }
    const product = this.productsRepository.create(createProductDto);
    const productCreated = await this.productsRepository.save(product);
    if(productCreated){
      this.auditTrailService.auditLogEvent(EventType.created, ObjectType.product, productCreated.name, user, undefined, productCreated);
    }
    return product;  
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productsRepository.find({relations: ['batches']});
    return products;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne(id,{relations: ['batches']});
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);    
    }
    return product;
  }
  
  async update(id: number, updateProductDto: UpdateProductDto, user: any) {
    const product = await this.productsRepository.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);    
    }
    await this.productsRepository.update(id, updateProductDto);
    const updatedProduct = await this.productsRepository.findOne(id);
    if(updatedProduct){
      this.auditTrailService.auditLogDifference(ObjectType.product, product, updatedProduct, user, undefined);
    }

    return updatedProduct;
  }

  async remove(id: number, user: any): Promise<DeleteResult> {
    const product = await this.productsRepository.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);    
    }
    this.auditTrailService.auditLogEvent(EventType.deleted, ObjectType.product, product.name, user, undefined);
    return this.productsRepository.softDelete(id);
  }
}
