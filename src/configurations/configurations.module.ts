import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsController } from './configurations.controller';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { User } from 'src/database/entities/user.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { UsersService } from 'src/users/users.service';
import { AuditTrailModule } from 'src/audit-trail/audit-trail.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Batch, User, AuditTrail]),
    AuditTrailModule,
    UsersModule
  ],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService],
  exports: [ConfigurationsService]
})
export class ConfigurationsModule {}
