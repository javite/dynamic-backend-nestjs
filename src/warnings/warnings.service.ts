import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Warning } from 'src/database/entities/warning.entity';
import { CreateWarningDto } from './dto/create-warning.dto';
import { UpdateWarningDto } from './dto/update-warning.dto';

@Injectable()
export class WarningsService {
  constructor(
    @InjectRepository(Warning)
    private readonly warningRepository: Repository<Warning>
  ) {}
  
  async create(createWarningDto: CreateWarningDto) {
    const warningCreated = this.warningRepository.create(createWarningDto);
    const warning = await this.warningRepository.save(warningCreated);
    if(warning){
      return true;
    } 
    return false; 
  }

  async findAll() {
    const warnings = await this.warningRepository.find();
    return warnings;
  }

  async findOne(id: number) {
    const warning = await this.warningRepository.findOne(id);
    if (!warning) {
      throw new HttpException('Warning not found', HttpStatus.BAD_REQUEST);    
    }
    return warning;
  }

  async update(id: number, updateWarningDto: UpdateWarningDto) {
    const warning = await this.warningRepository.findOne(id);
    if (!warning) {
      throw new HttpException('Warning not found', HttpStatus.BAD_REQUEST);    
    }
    if(updateWarningDto.acceptedBy){
      updateWarningDto.acceptedAt = new Date();
    }
    const updatedWarning = await this.warningRepository.update(id, updateWarningDto);
    if(updatedWarning){
      return true;
    }
    return false;
  }

  async remove(id: number) {
    const warning = await this.warningRepository.findOne(id);
    if (!warning) {
      throw new HttpException('Warning not found', HttpStatus.BAD_REQUEST);    
    }
    return this.warningRepository.softDelete(id);
  }
}
