import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import {diff} from 'deep-diff';

import { CreateAuditTrailDto } from './dto/create-audit-trail.dto';
import { UpdateAuditTrailDto } from './dto/update-audit-trail.dto';

@Injectable()
export class AuditTrailService {
  constructor(
    @InjectRepository(AuditTrail)
    private readonly auditTrailRepository: Repository<AuditTrail>,
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createAuditTrailDto: CreateAuditTrailDto): Promise<AuditTrail> {
    let batchInDb = undefined;
    if(createAuditTrailDto.batchId != undefined){
      batchInDb = await this.batchRepository.findOne(createAuditTrailDto.batchId); 
      if (!batchInDb) {
          throw new HttpException('El Lote no existe', HttpStatus.BAD_REQUEST);    
      }
    }
    const userInDb = await this.usersRepository.findOne(createAuditTrailDto.userId); // check if the user exists in the db    
    if (!userInDb) {
        throw new HttpException('El Usuario no existe', HttpStatus.BAD_REQUEST);    
    }
    const newLog = this.auditTrailRepository.create(createAuditTrailDto);
    newLog.batch = batchInDb;
    newLog.user = userInDb;
    const log = await this.auditTrailRepository.save(newLog);
    return log;  
  }

  async findAll() {
    const logs = await this.auditTrailRepository.find({relations: ['user']});
    const losgC = logs.map(log => {
      return {...log, user: this.buildUserName(log.user)}
    });
    return losgC;
  }

  async findOne(id: number) {
    const log = await this.auditTrailRepository.findOne(id);
    return log;
  }

  update(id: number, updateAuditTrailDto: UpdateAuditTrailDto) {
    throw new HttpException('Los logs no se puede modificar', HttpStatus.BAD_REQUEST);    
  }

  remove(id: number) {
    throw new HttpException('Los logs no se pueden borrar', HttpStatus.BAD_REQUEST); 
  }

  public auditLogDifference(object: number, previousValue: any, newValue: any, user: any, batch: any){
    delete previousValue.updatedAt;
    delete newValue.updatedAt;
    const difference = diff(JSON.parse(JSON.stringify(previousValue)), JSON.parse(JSON.stringify(newValue)));
    if(difference === undefined) return;
    let differenceArray = JSON.parse(JSON.stringify(difference));
    differenceArray.map(dif => {
      if(dif.kind === 'E'){
        let audit = new CreateAuditTrailDto();
        audit.eventType = 0;
        audit.object = object;
        audit.fieldName = dif.path[0];
        audit.previousValue= dif.lhs;
        audit.newValue = dif.rhs;
        audit.userId = user.id;
        if(batch != undefined){
          audit.batchId = batch.id;
        }
        this.create(audit);
      }
    })
  }

  public auditLogEvent(eventType: number, object: number, newValue: any = undefined, user: any, batch: any = undefined, file?:any){
    let audit = new CreateAuditTrailDto();
    audit.eventType = eventType;
    audit.object = object;
    audit.newValue = newValue != undefined ? newValue : '-' ;
    audit.previousValue = '-';
    audit.fieldName = newValue != undefined ? 'nombre' : '-';
    audit.userId = user.id;
    audit.batchId = batch != undefined ? batch.id :undefined;
    if(eventType === 1 && file != undefined){ //0: modify, 1: new, 2: delete, 3: open, 4: close, 5: login, 6: logout
      audit.file = JSON.stringify(file);
    }
    this.create(audit);
  }

  buildUserName(user: User){
    return user.firstName + ' ' + user.lastName + ' - (' + user.user + ')';
  }

}
