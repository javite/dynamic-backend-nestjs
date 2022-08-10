import { Module, forwardRef } from '@nestjs/common';
import { AuditTrailService } from './audit-trail.service';
import { AuditTrailController } from './audit-trail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/database/entities/user.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Batch, Product, AuditTrail]), 
    forwardRef(() => UsersModule)
  ],
  controllers: [AuditTrailController],
  providers: [AuditTrailService],
  exports: [AuditTrailService]
})
export class AuditTrailModule {}
