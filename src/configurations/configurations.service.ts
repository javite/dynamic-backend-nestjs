import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import * as fs from 'fs/promises';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';

@Injectable()
export class ConfigurationsService {
  constructor(
    private auditTrailService: AuditTrailService
  ) {}

  path = 'K:/Mi unidad/01 - Proyectos/27 - Balanzas/Software/vulcano/Data/configuration.ini';

  async findAll() {
    let jsonData ;
    try {
      const data = await fs.readFile(this.path, 'utf8');     
      jsonData = JSON.parse(data)
      return jsonData;
    } catch (error) {
      console.log(error);
      throw new HttpException('No se encontro archivo de configuracion', HttpStatus.NOT_FOUND);
    }
  }

  async update(updateConfigurationDto: UpdateConfigurationDto, user: any) {
    try {
      const previousConfig = await this.findAll();
      const frameworksData = JSON.stringify(updateConfigurationDto);
      const jsonPretty = JSON.stringify(JSON.parse(frameworksData),null,2); //for prettify

      await fs.writeFile(this.path, jsonPretty, 'utf-8');
      this.auditTrailService.auditLogDifference(4, previousConfig, updateConfigurationDto, user, undefined);
      return true;
    } catch (error) { 
      console.log(error);
      throw new HttpException('Error al guardar el archivo de configuracion', HttpStatus.NOT_FOUND);
    }
  }

}
