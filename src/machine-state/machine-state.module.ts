import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MachineStateService } from './machine-state.service';
import { MachineStateController } from './machine-state.controller';
import { MachineState } from 'src/database/entities/machine-state.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([MachineState])],
  controllers: [MachineStateController],
  providers: [MachineStateService]
})
export class MachineStateModule {}
