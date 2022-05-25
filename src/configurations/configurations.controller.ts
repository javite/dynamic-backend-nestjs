import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigurationsService } from './configurations.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';

@Controller('configurations')
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  @Get()
  findAll() {
    return this.configurationsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  update(@Request() req: any, @Body() updateConfigurationDto: UpdateConfigurationDto) {
    const user = req.user;
    return this.configurationsService.update(updateConfigurationDto, user);
  }

}
