import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../database/entities/user.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { PreviousPasswordsService } from './previous-passwords.service';
import { PreviousPasswordsController } from './previous-passwords.controller';
import { UsersService } from 'src/users/users.service';
import { PreviousPassword } from 'src/database/entities/previous-password.entity';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { UsersModule } from 'src/users/users.module';
import { AuditTrailModule } from 'src/audit-trail/audit-trail.module';

@Module({
  imports:  [
    TypeOrmModule.forFeature([User, Batch, PreviousPassword, AuditTrail])
  ],
  controllers: [PreviousPasswordsController],
  providers: [PreviousPasswordsService],
  exports: [PreviousPasswordsService]
})
export class PreviousPasswordsModule {}
