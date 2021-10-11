import { Module } from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {UsersModule} from './../users/users.module';
import {JwtModule} from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';


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
    ], 
    controllers: [AuthController],  
    providers: [AuthService, JwtStrategy],  
    exports: [PassportModule, JwtModule],})
export class AuthModule {}
