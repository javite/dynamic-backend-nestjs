import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MachineStateService } from './machine-state.service';
import { CreateMachineStateDto } from './dto/create-machine-state.dto';
import { UpdateMachineStateDto } from './dto/update-machine-state.dto';

@Controller('machine-state')
export class MachineStateController {
  constructor(private readonly machineStateService: MachineStateService) {}

  @Post()
  create(@Body() createMachineStateDto: CreateMachineStateDto) {
    return this.machineStateService.create(createMachineStateDto);
  }

  @Get()
  findAll() {
    return this.machineStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineStateDto: UpdateMachineStateDto) {
    return this.machineStateService.update(+id, updateMachineStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineStateService.remove(+id);
  }
}
