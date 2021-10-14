import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { User } from 'src/database/entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PO } from './../database/entities/po.entity';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';

@Injectable()
export class PosService {
  constructor(
    @InjectRepository(PO)
    private readonly poRepository: Repository<PO>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createPoDto: CreatePoDto): Promise<PO>{
    const name = createPoDto.name;
    const poInDb = await this.poRepository.findOne({ where: { name } }); // check if the user exists in the db    
    if (poInDb) {
        throw new HttpException('PO ya existe', HttpStatus.BAD_REQUEST);    
    }
    const user = await this.usersRepository.findOne(createPoDto.userId);
    if (!user) {
      throw new HttpException('Usuario no existe', HttpStatus.BAD_REQUEST);    
    }
    const product = await this.productsRepository.findOne(createPoDto.productId);
    const po = await this.poRepository.create(createPoDto);
    po.user = user;
    po.products = [product];
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
    const po = await this.poRepository.find({where: {state}});
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
