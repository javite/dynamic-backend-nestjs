import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './../users/dto/create-user.dto';
import { RegistrationStatus } from './../interfaces/registration-status.interface';
import { UsersService } from './../users/users.service';
import { LoginStatus } from './../interfaces/login-status.interface';
import { LoginUserDto } from './../users/dto/login-user.dto';
import { InfoUserDto } from './../users/dto/info-user.dto';
import { JwtPayload } from './../interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { ChangePasswordDto } from 'src/users/dto/change-password.dto';
import { EventType } from 'src/enums/event_type.enum';
import { ObjectType } from 'src/enums/object_type.enum';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly auditTrailService: AuditTrailService
  ) {}

  async register(userDto: CreateUserDto, userLoggued: any): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.usersService.create(userDto, userLoggued);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user = await this.usersService.findByLogin(loginUserDto);
    const token = this._createToken(user);
    this.auditTrailService.auditLogEvent(EventType.login, ObjectType.user, undefined , user , undefined);
    return {
      user: user,
      ...token,
    };
  }

  async logout(loggedUser): Promise<boolean> {
    this.auditTrailService.auditLogEvent(EventType.logout, ObjectType.user, undefined , loggedUser , undefined);
    return true;
  }

  async validateUser(payload: JwtPayload): Promise<InfoUserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ user }: InfoUserDto): any {
    const expiresIn = process.env.EXPIRESIN;
    const _user: JwtPayload = { user };
    const accessToken = this.jwtService.sign(_user);
    return {
      expiresIn,
      accessToken,
    };
  }
}