import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PosService } from './pos.service';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createPoDto: CreatePoDto) {  
    return this.posService.create(createPoDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/close/:id')
  close(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    return this.posService.close(id, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/open/:id')
  open(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    return this.posService.open(id, user);
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

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() updatePoDto: UpdatePoDto) {
    const user = req.user;
    return this.posService.update(+id, updatePoDto, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    return this.posService.remove(+id, user);
  }
}
