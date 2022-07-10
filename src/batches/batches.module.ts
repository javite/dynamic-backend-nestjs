import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BatchesService } from './batches.service';
import { BatchesController } from './batches.controller';
import { Product } from 'src/database/entities/product.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Unit } from 'src/database/entities/unit.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { User } from 'src/database/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuditTrailModule } from 'src/audit-trail/audit-trail.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:  [
    TypeOrmModule.forFeature([Unit, Batch, Product, AuditTrail, User]),
    AuditTrailModule,
    UsersModule
  ],
  controllers: [BatchesController],
  providers: [BatchesService],
  exports: [BatchesService]
})
export class BatchesModule {}
