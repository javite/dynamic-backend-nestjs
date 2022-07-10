import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpException, HttpStatus, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/enums/role.enum';
import { ChangePasswordDto } from './dto/change-password.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req: any, @Body() createUserDto: CreateUserDto) {
    const userLoggued = req.user;
    if(this.usersService.validateUserAccess(userLoggued, [Role.Admin])){
      return this.usersService.create(createUserDto, userLoggued); 
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('change-password/:userId')
  public async changePassword(@Req() req: any, @Body() changePasswordDto: ChangePasswordDto, @Param('userId') userId: string): Promise<boolean> {
    const userLogged = req.user;
    return await this.usersService.changePassword(changePasswordDto, userId, userLogged);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const userLoggued = req.user;
    if(this.usersService.validateUserAccess(userLoggued, [Role.Admin])){
      return this.usersService.update(+id, updateUserDto, userLoggued);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const userLoggued = req.user;
    if(this.usersService.validateUserAccess(userLoggued, [Role.Admin])){
      return this.usersService.remove(+id, userLoggued);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }
}
