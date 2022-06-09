import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { BatchesService } from './batches.service';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { Role } from 'src/enums/role.enum';

@Controller('batches')
export class BatchesController {
  constructor(
    private readonly batchesService: BatchesService,
    private readonly usersService: UsersService
    ) {}

  @Post()
  create(@Request() req: any, @Body() createBatchDto: CreateBatchDto) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.batchesService.create(createBatchDto);      
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  findAll() {
    return this.batchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.batchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() updateBatchDto: UpdateBatchDto) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.batchesService.update(+id, updateBatchDto, null);  
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.batchesService.remove(+id, null); 
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }
}
