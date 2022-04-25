import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../database/entities/user.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { Batch } from 'src/database/entities/batch.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([User, Batch, AuditTrail])],
  controllers: [UsersController],
  providers: [UsersService, AuditTrailService],
  exports: [UsersService]
})
export class UsersModule {}
