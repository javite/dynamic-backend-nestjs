import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {UsersModule} from './../users/users.module';
import {JwtModule} from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { User } from 'src/database/entities/user.entity';
@Module({
    imports: [    
        UsersModule,    
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: jwtConstants.secret, 
            signOptions: {expiresIn: jwtConstants.expiresIn,},
        }),
        TypeOrmModule.forFeature([User, Batch, AuditTrail])
    ], 
    controllers: [AuthController],  
    providers: [AuthService, JwtStrategy, AuditTrailService],  
    exports: [PassportModule, JwtModule],})
export class AuthModule {}
