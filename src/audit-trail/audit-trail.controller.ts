import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AuditTrailService } from './audit-trail.service';
import { CreateAuditTrailDto } from './dto/create-audit-trail.dto';
import { UpdateAuditTrailDto } from './dto/update-audit-trail.dto';

@Controller('audit-trail')
export class AuditTrailController {
  constructor(private readonly auditTrailService: AuditTrailService) {}

  @Post()
  create(@Body() createAuditTrailDto: CreateAuditTrailDto) {
    return this.auditTrailService.create(createAuditTrailDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.auditTrailService.findAll(query.skip, query.take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditTrailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditTrailDto: UpdateAuditTrailDto) {
    return this.auditTrailService.update(+id, updateAuditTrailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditTrailService.remove(+id);
  }
}
