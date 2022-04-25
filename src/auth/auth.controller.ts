import { Controller, Body, Post, HttpException, HttpStatus, Request, Get, Req, UseGuards,} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
  import { CreateUserDto } from './../users/dto/create-user.dto';
  import { RegistrationStatus } from './../interfaces/registration-status.interface';
  import { AuthService } from './auth.service';
  import { LoginStatus } from '../interfaces/login-status.interface';
  import { LoginUserDto } from './../users/dto/login-user.dto';
  import { JwtPayload } from './../interfaces/payload.interface';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @UseGuards(AuthGuard('jwt'))
    @Post('register')
    public async register(@Request() req: any, @Body() createUserDto: CreateUserDto,): Promise<RegistrationStatus> {
      const userLoggued = req.user;
      const result: RegistrationStatus = await this.authService.register(createUserDto, userLoggued);
      if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
      }
      return result;
    }
  
    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto, @Req() req: any): Promise<LoginStatus> {
      return await this.authService.login(loginUserDto);
    }
  
    @Get('whoami')
    @UseGuards(AuthGuard())
    public async testAuth(@Req() req: any): Promise<JwtPayload> {
      return req.user;
    }
  }