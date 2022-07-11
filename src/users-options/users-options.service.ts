import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectType } from 'src/enums/object_type.enum';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { UsersOptions } from 'src/database/entities/users-options.entity';
import { CreateUsersOptionDto } from './dto/create-users-option.dto';
import { UpdateUsersOptionDto } from './dto/update-users-option.dto';

@Injectable()
export class UsersOptionsService {
  constructor(
    @InjectRepository(UsersOptions)
    private readonly usersOptionsRepository: Repository<UsersOptions>,
    @Inject(forwardRef(() => AuditTrailService))
    private readonly auditTrailService: AuditTrailService,
  ) {}
  create(createUsersOptionDto: CreateUsersOptionDto) {
    return 'This action adds a new usersOption';
  }

  async findAll(): Promise<UsersOptions> {
    const usersOptions = await this.usersOptionsRepository.find();
    return usersOptions[0];
  }

  findOne(id: number) {
    return `This action returns a #${id} usersOption`;
  }

  async update(updateUsersOptionDto: UpdateUsersOptionDto, userLoggued: any) {
    const usersOption = await this.findAll();
    await this.usersOptionsRepository.update(usersOption.id, updateUsersOptionDto);
    const updatedUsersOptions = await this.usersOptionsRepository.findOne(usersOption.id);
    if(updatedUsersOptions){
      this.auditTrailService.auditLogDifference(ObjectType.usersOptions, usersOption, updatedUsersOptions, userLoggued, undefined);
    }
    return updatedUsersOptions;
  }

  remove(id: number) {
    return `This action removes a #${id} usersOption`;
  }
}
