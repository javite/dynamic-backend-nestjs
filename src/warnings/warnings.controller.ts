import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WarningsService } from './warnings.service';
import { CreateWarningDto } from './dto/create-warning.dto';
import { UpdateWarningDto } from './dto/update-warning.dto';

@Controller('warnings')
export class WarningsController {
  constructor(private readonly warningsService: WarningsService) {}

  @Post()
  create(@Body() createWarningDto: CreateWarningDto) {
    return this.warningsService.create(createWarningDto);
  }

  @Get()
  findAll() {
    return this.warningsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warningsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWarningDto: UpdateWarningDto) {
    return this.warningsService.update(+id, updateWarningDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warningsService.remove(+id);
  }
}
