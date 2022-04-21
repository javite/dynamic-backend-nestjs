import { Module } from '@nestjs/common';
import { BatchesService } from './batches.service';
import { BatchesController } from './batches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/database/entities/product.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Unit } from 'src/database/entities/unit.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
@Module({
  imports:  [TypeOrmModule.forFeature([Unit, Batch, Product, AuditTrail])],
  controllers: [BatchesController],
  providers: [BatchesService]
})
export class BatchesModule {}
