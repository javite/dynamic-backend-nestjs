import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, HttpException, HttpStatus} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PosService } from './pos.service';
import { CreatePoDto } from './dto/create-po.dto';
import { UpdatePoDto } from './dto/update-po.dto';
import { Role } from 'src/enums/role.enum';
import { UsersService } from 'src/users/users.service';

@Controller('pos')
export class PosController {
  constructor(
    private readonly posService: PosService,
    private readonly usersService: UsersService
    ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req: any, @Body() createPoDto: CreatePoDto) {  
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.posService.create(createPoDto);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/close/:id')
  close(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.posService.close(id, user);      
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/open/:id')
  open(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.posService.open(id, user);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
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
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.posService.update(+id, updatePoDto, user);      
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.posService.remove(+id, user);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }
}
