import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PO } from './../database/entities/po.entity';
import { PosService } from './pos.service';
import { PosController } from './pos.controller';
import { User } from 'src/database/entities/user.entity';
import { Product } from 'src/database/entities/product.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Unit } from 'src/database/entities/unit.entity';
import { BatchesService } from 'src/batches/batches.service';
import { ProductsService } from 'src/products/products.service';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { UsersService } from 'src/users/users.service';
import { PreviousPassword } from 'src/database/entities/previous-password.entity';
import { BatchesModule } from 'src/batches/batches.module';
import { ProductsModule } from 'src/products/products.module';
import { AuditTrailModule } from 'src/audit-trail/audit-trail.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:  [
    TypeOrmModule.forFeature([PO, User, Product, Batch, Unit, AuditTrail]),
    BatchesModule,
    ProductsModule,
    AuditTrailModule,
    UsersModule
  ],
  controllers: [PosController],
  providers: [PosService],
  exports: [PosService]
})
export class PosModule {}
