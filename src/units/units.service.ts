import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Batch } from 'src/database/entities/batch.entity';
import { Unit } from 'src/database/entities/unit.entity';
import { Repository } from 'typeorm';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: Repository<Unit>,
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
  ) {}

   async create(createUnitDto: CreateUnitDto): Promise<Unit>{
    const batch = await this.batchRepository.findOne(createUnitDto.batchId); 
    if (!batch) {
        throw new HttpException('Lote no existe', HttpStatus.BAD_REQUEST);    
    }
    const unit = this.unitRepository.create(createUnitDto);
    unit.batch = batch;
    if(unit.state === 0){
      batch.okTotal = batch.okTotal + 1;
    } else if(unit.state === 1){
      batch.nokTotal = batch.nokTotal + 1;
      batch.nokHigh = batch.nokHigh + 1;
    } else if(unit.state === 2){
      batch.nokTotal = batch.nokTotal + 1;
      batch.nokLow = batch.nokLow + 1;
    } else {
      batch.nokTotal = batch.nokTotal + 1;
      batch.nokOther = batch.nokOther + 1;
    }
    await this.unitRepository.save(unit);
    await this.batchRepository.save(batch);
    return unit;  
  }

  async findAll() {
    const units = await this.unitRepository.find();
    return units;
  }

  async findByBatch(id: number) {
    const batch = await this.batchRepository.findOne(id);
    if (!batch) {
      throw new HttpException('Lote no existe', HttpStatus.BAD_REQUEST);    
    }
    const units = await this.unitRepository.find({where: {batch}});
    return units;
  }

  async findFirst(number: number, id: number) {
    const batch = await this.batchRepository.findOne(id);
    if (!batch) {
      throw new HttpException('Lote no existe', HttpStatus.BAD_REQUEST);    
    }
    const units = await this.unitRepository.find({where:{batch}, order: {createdAt: "DESC"},take: number});
    return units;
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}
