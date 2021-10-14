import { Module } from '@nestjs/common';
import { BatchesService } from './batches.service';
import { BatchesController } from './batches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Batch } from 'src/database/entities/batch.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Batch,Product])],
  controllers: [BatchesController],
  providers: [BatchesService]
})
export class BatchesModule {}
