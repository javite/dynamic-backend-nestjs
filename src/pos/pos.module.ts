import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PO } from './../database/entities/po.entity';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { User } from 'src/database/entities/user.entity';
import { Product } from 'src/database/entities/product.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([PO, User, Product])],
  controllers: [PosController],
  providers: [PosService]
})
export class PosModule {}
