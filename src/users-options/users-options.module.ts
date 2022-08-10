import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersOptionsService } from './users-options.service';
import { UsersOptionsController } from './users-options.controller';
import { Batch } from 'src/database/entities/batch.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { UsersOptions } from 'src/database/entities/users-options.entity';
import { AuditTrailModule } from 'src/audit-trail/audit-trail.module';

@Module({
  imports:  [
    TypeOrmModule.forFeature([Batch, AuditTrail, UsersOptions]), 
    forwardRef(() => AuditTrailModule)
  ],
  controllers: [UsersOptionsController],
  providers: [UsersOptionsService],
  exports: [UsersOptionsService]
})
export class UsersOptionsModule {}
