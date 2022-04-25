import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Request() req: any, @Body() createUserDto: CreateUserDto) {
    const userLoggued = req.user;
    const user = await this.usersService.create(createUserDto, userLoggued);
    return user;
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(+id); 
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Request() req: any, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const userLoggued = req.user;
    const user = await this.usersService.update(+id, updateUserDto, userLoggued);
    return user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Request() req: any, @Param('id') id: string) {
    const userLoggued = req.user;
    const user = await this.usersService.remove(+id, userLoggued);
    return user;
  }
}
