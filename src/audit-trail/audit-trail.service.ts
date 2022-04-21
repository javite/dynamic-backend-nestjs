import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditTrail } from 'src/database/entities/audit-trail.entity';
import { Batch } from 'src/database/entities/batch.entity';
import { User } from 'src/database/entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
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
    const batchInDb = await this.batchRepository.findOne(createAuditTrailDto.batchId); 
    if (!batchInDb) {
        throw new HttpException('El Lote no existe', HttpStatus.BAD_REQUEST);    
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
    const log = await this.auditTrailRepository.find();
    return log;
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

  public auditLogDifference(lrh: any, rhs: any, user: any, batch: any){
    const difference = diff(JSON.parse(JSON.stringify(lrh)), JSON.parse(JSON.stringify(rhs)));
    let differenceArray = JSON.parse(JSON.stringify(difference));
    differenceArray.map(dif => {
      if(dif.kind === 'E'){
        let audit = new CreateAuditTrailDto();
        audit.eventType = "modif";
        audit.fieldName = dif.path[0];
        audit.newValue = dif.lhs;
        audit.previousValue = dif.rhs;
        audit.userId = user.id;
        audit.batchId = batch.id;
        this.create(audit);
      }
    })
  }

  public auditLogNew(type: string, name: any, user: any, batch: any, file?:any){
    let audit = new CreateAuditTrailDto();
    audit.eventType = "create";
    audit.fieldName = type;
    audit.newValue = name;
    audit.previousValue = '-';
    audit.userId = user.id;
    audit.batchId = batch.id;
    audit.file = JSON.stringify(file);
    this.create(audit);
  }
}
