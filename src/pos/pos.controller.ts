import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosService } from './pos.service';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  @Post()
  create(@Body() createPoDto: CreatePoDto) {
    return this.posService.create(createPoDto);
  }

  @Post('/close/:id')
  close(@Param('id') id: string) {
    return this.posService.close(id);
  }

  @Post('/open/:id')
  open(@Param('id') id: string) {
    return this.posService.open(id);
  }

  @Get()
  findAll() {
    return this.posService.findAll();
  }

  @Get('/open')
  findOpen() {
    return this.posService.findOpen();
  }

  @Get('/state/:state')
  findState(@Param('state') state: string) {
    return this.posService.findState(state);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.posService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoDto: UpdatePoDto) {
    return this.posService.update(+id, updatePoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.posService.remove(+id);
  }
}