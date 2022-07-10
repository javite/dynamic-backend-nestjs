import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../database/entities/user.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { PreviousPassword } from 'src/database/entities/previous-password.entity';

import { PreviousPasswordsModule } from 'src/previous-passwords/previous-passwords.module';
import { AuditTrailModule } from 'src/audit-trail/audit-trail.module';
import { UsersOptions } from 'src/database/entities/users-options.entity';

@Module({
  imports:  [
    TypeOrmModule.forFeature([User, Batch, AuditTrail, PreviousPassword, UsersOptions]), 
    PreviousPasswordsModule,
    forwardRef(() => AuditTrailModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
