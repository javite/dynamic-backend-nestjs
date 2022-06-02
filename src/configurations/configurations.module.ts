import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsController } from './configurations.controller';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { User } from 'src/database/entities/user.entity';
import { Batch } from 'src/database/entities/batch.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Batch, User, AuditTrail])],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService, AuditTrailService]
})
export class ConfigurationsModule {}
