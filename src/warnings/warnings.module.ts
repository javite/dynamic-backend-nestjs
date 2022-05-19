import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarningsService } from './warnings.service';
import { WarningsController } from './warnings.controller';
import { Warning } from 'src/database/entities/warning.entity';
import { Batch } from 'src/database/entities/batch.entity';

@Module({
  imports:  [TypeOrmModule.forFeature([Warning, Batch])],
  controllers: [WarningsController],
  providers: [WarningsService]
})
export class WarningsModule {}
