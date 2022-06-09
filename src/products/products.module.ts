import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './../database/entities/product.entity';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { User } from 'src/database/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersService } from 'src/users/users.service';
@Module({
  imports:  [TypeOrmModule.forFeature([Product, Batch, User, AuditTrail]), AuthModule],
  controllers: [ProductsController],
  providers: [ProductsService, AuditTrailService, UsersService]
})
export class ProductsModule {}
