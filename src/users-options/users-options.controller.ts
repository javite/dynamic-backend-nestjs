import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersOptionsService } from './users-options.service';
import { CreateUsersOptionDto } from './dto/create-users-option.dto';
import { UpdateUsersOptionDto } from './dto/update-users-option.dto';

@Controller('users-options')
export class UsersOptionsController {
  constructor(private readonly usersOptionsService: UsersOptionsService) {}

  @Post()
  create(@Body() createUsersOptionDto: CreateUsersOptionDto) {
    return this.usersOptionsService.create(createUsersOptionDto);
  }

  @Get()
  findAll() {
    return this.usersOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersOptionsService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  update(@Req() req: any, @Body() updateUsersOptionDto: UpdateUsersOptionDto) {
    const userLogged = req.user;
    return this.usersOptionsService.update(updateUsersOptionDto, userLogged);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersOptionsService.remove(+id);
  }
}
