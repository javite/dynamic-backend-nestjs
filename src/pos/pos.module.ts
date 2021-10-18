import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PO } from './../database/entities/po.entity';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { User } from 'src/database/entities/user.entity';
import { Product } from 'src/database/entities/product.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { BatchesService } from 'src/batches/batches.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports:  [TypeOrmModule.forFeature([PO, User, Product, Batch])],
  controllers: [PosController],
  providers: [PosService, BatchesService, ProductsService]
})
export class PosModule {}
