import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PreviousPasswordsService } from './previous-passwords.service';
import { CreatePreviousPasswordDto } from './dto/create-previous-password.dto';
import { UpdatePreviousPasswordDto } from './dto/update-previous-password.dto';

@Controller('previous-passwords')
export class PreviousPasswordsController {
  constructor(private readonly previousPasswordsService: PreviousPasswordsService) {}

  @Post()
  create(@Body() createPreviousPasswordDto: CreatePreviousPasswordDto) {
    //return this.previousPasswordsService.create(user, createPreviousPasswordDto.newPassword);
    return "No implementado";
  }

  @Get(':id')
  findAll(@Param('id') id: string, @Query('take') take: number) {
    return this.previousPasswordsService.findAll(id, take);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.previousPasswordsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreviousPasswordDto: UpdatePreviousPasswordDto) {
    return this.previousPasswordsService.update(+id, updatePreviousPasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.previousPasswordsService.remove(+id);
  }
}
