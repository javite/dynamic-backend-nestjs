import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { Unit } from 'src/database/entities/unit.entity';
import { Batch } from 'src/database/entities/batch.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Unit, Batch])],
  controllers: [UnitsController],
  providers: [UnitsService]
})
export class UnitsModule {}
