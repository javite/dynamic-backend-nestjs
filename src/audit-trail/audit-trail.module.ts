import { Module } from '@nestjs/common';
import { AuditTrailService } from './audit-trail.service';
import { AuditTrailController } from './audit-trail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/database/entities/user.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([User, Batch, Product, AuditTrail])],
  controllers: [AuditTrailController],
  providers: [AuditTrailService]
})
export class AuditTrailModule {}
