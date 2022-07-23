import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Request, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuditTrailService } from './audit-trail.service';
import { CreateAuditTrailDto } from './dto/create-audit-trail.dto';
import { UpdateAuditTrailDto } from './dto/update-audit-trail.dto';
import { AuditTrailFilterOptions } from './dto/audit-trail-filter-options.dto';
import { Role } from 'src/enums/role.enum';

@Controller('audit-trail')
export class AuditTrailController {
  constructor(
    private readonly auditTrailService: AuditTrailService,
    private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createAuditTrailDto: CreateAuditTrailDto) {
    return this.auditTrailService.create(createAuditTrailDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.auditTrailService.findAll(query.skip, query.take);
  }

  // RUTA DE FILTRADO DE AUDIT TRAIL
  @Post('filter')
  filteredFindAll(@Body() filterOptions: AuditTrailFilterOptions, @Query() query) {
    return this.auditTrailService.filteredFindAll(filterOptions, query.skip, query.take);
  };

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditTrailService.findOne(+id);
  }

  @Patch(':id')
  update(@Request() req: any, @Param('id') id: string, @Body() updateAuditTrailDto: UpdateAuditTrailDto) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.auditTrailService.update(+id, updateAuditTrailDto);      
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.auditTrailService.remove(+id);      
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }
}
