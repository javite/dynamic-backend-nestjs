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


@Module({
  imports: [
    UsersModule, 
    AuthModule,
    ProductsModule,
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
    }), PosModule, BatchesModule, UnitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
