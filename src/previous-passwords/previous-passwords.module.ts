import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../database/entities/user.entity';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { PreviousPasswordsService } from './previous-passwords.service';
import { PreviousPasswordsController } from './previous-passwords.controller';
import { PreviousPassword } from 'src/database/entities/previous-password.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:  [
    TypeOrmModule.forFeature([User, Batch, PreviousPassword, AuditTrail]),
    forwardRef(() => UsersModule)
  ],
  controllers: [PreviousPasswordsController],
  providers: [PreviousPasswordsService],
  exports: [PreviousPasswordsService]
})
export class PreviousPasswordsModule {}
