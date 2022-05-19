import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MachineState } from 'src/database/entities/machine-state.entity';
import { Repository } from 'typeorm';
import { CreateMachineStateDto } from './dto/create-machine-state.dto';
import { UpdateMachineStateDto } from './dto/update-machine-state.dto';

@Injectable()
export class MachineStateService {
  constructor(
    @InjectRepository(MachineState)
    private readonly machineStateRepository: Repository<MachineState>
  ) {}
  async create(createMachineStateDto: CreateMachineStateDto) {
    const machineStateCreated = this.machineStateRepository.create(createMachineStateDto);
    const machineState = await this.machineStateRepository.save(machineStateCreated);
    if(machineState){
      return true;
    } 
    return false; 
  }

  async findAll() {
    const machineStates = await this.machineStateRepository.find();
    return machineStates;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineState`;
  }

  update(id: number, updateMachineStateDto: UpdateMachineStateDto) {
    return `This action updates a #${id} machineState`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineState`;
  }
}
