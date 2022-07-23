import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from 'src/database/entities/unit.entity';
import { StatisticsService } from './statistics.service';

@Module({
    imports: [TypeOrmModule.forFeature([Unit])],
    controllers: [StatisticsController],
    providers: [StatisticsService]
})
export class StatisticsModule {}
