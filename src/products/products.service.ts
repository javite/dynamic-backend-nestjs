import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Product } from './../database/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product>{
    const name = createProductDto.name;
    const prodInDb = await this.productsRepository.findOne({ where: { name } }); // check if the user exists in the db    
    if (prodInDb) {
        throw new HttpException('Producto ya existe', HttpStatus.BAD_REQUEST);    
    }
    const product = this.productsRepository.create(createProductDto);
    await this.productsRepository.save(product);
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
  
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);    
    }

    await this.productsRepository.update(id, updateProductDto);
    const updatedProduct = await this.productsRepository.findOne(id);
    return updatedProduct;
  }

  async remove(id: number): Promise<DeleteResult> {
    const product = await this.productsRepository.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);    
    }
    return this.productsRepository.delete(id);
  }
}
