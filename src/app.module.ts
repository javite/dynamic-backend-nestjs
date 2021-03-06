import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PosModule } from './pos/pos.module';
import { BatchesModule } from './batches/batches.module';
import { UnitsModule } from './units/units.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';
import { WarningsModule } from './warnings/warnings.module';
import { MachineStateModule } from './machine-state/machine-state.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { APP_GUARD } from '@nestjs/core';
import { PreviousPasswordsModule } from './previous-passwords/previous-passwords.module';
import { UsersOptionsModule } from './users-options/users-options.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '000000',
      database: 'dynamic',
      entities: [__dirname + './database/entities/*entitie{.ts, .js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }), 
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    UsersModule, 
    AuthModule,
    ProductsModule,
    PosModule, 
    BatchesModule, 
    UnitsModule, 
    AuditTrailModule, 
    WarningsModule, 
    MachineStateModule, 
    ConfigurationsModule, 
    PreviousPasswordsModule, UsersOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
