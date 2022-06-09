import { Controller, Get, Body, Patch, UseGuards, Request, HttpException, HttpStatus  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { ConfigurationsService } from './configurations.service';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Role } from 'src/enums/role.enum';

@Controller('configurations')
export class ConfigurationsController {
  constructor(
    private readonly configurationsService: ConfigurationsService,
    private readonly usersService: UsersService
    ) {}

  @Get()
  findAll() {
    return this.configurationsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  update(@Request() req: any, @Body() updateConfigurationDto: UpdateConfigurationDto) {
    const user = req.user;
    if(this.usersService.validateUserAccess(user, [Role.Admin, Role.Maintenance, Role.Supervisor])){
      return this.configurationsService.update(updateConfigurationDto, user);
    } else {
      throw new HttpException("No tiene nivel suficiente", HttpStatus.FORBIDDEN);
    }
  }

}
