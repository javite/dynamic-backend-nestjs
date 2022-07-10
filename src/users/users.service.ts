import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './../database/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { InfoUserDto } from './dto/info-user.dto';
import { AuditTrailService } from 'src/audit-trail/audit-trail.service';
import { ChangePasswordDto } from './dto/change-password.dto';
import { EventType } from 'src/enums/event_type.enum';
import { ObjectType } from 'src/enums/object_type.enum';
import { PreviousPasswordsService } from 'src/previous-passwords/previous-passwords.service';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(forwardRef(() => AuditTrailService))
    private readonly auditTrailService: AuditTrailService,
    private readonly previousPasswordsService: PreviousPasswordsService
  ) {}
 
  async create(userDto: CreateUserDto, userLogged: any): Promise<InfoUserDto> {    
    const { user, password, firstName, lastName, level, groupLevel } = userDto;
    const userInDb = await this.usersRepository.findOne({ where: { user } }); // check if the user exists in the db    
    if (userInDb) {
        throw new HttpException('Usuario ya existe', HttpStatus.BAD_REQUEST);    
    }
    const _user: User = this.usersRepository.create({ user, password, firstName, lastName, level, groupLevel });
    const userCreated = await this.usersRepository.save(_user);
    if(userCreated){
      this.auditTrailService.auditLogEvent(EventType.created, ObjectType.user, this.buildUserName(userCreated), userLogged, undefined, undefined);
    }
    return this.toUserDto(userCreated);
  }

  async findAll(): Promise<InfoUserDto[]> {
    let usersDTO: InfoUserDto[] = [];
    let users = await this.usersRepository.find();
    for (let index = 0; index < users.length; index++) {
      const _user = users[index];
      usersDTO[index] = this.toUserDto(_user);
    }
    return usersDTO;
  }

  async findOne(id: number): Promise<InfoUserDto> {
    const _user = await this.usersRepository.findOne(id);
    if (!_user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    return this.toUserDto(_user);
  }

  async findById(id: number): Promise<User> {
    const _user = await this.usersRepository.findOne(id);
    if (!_user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    return _user;
  }

  async update(id: number, updateUserDto: UpdateUserDto, userLoggued: any) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    delete updateUserDto.password;
    await this.usersRepository.update(id, updateUserDto);
    const updatedUser = await this.usersRepository.findOne(id);
    if(updatedUser){
      this.auditTrailService.auditLogDifference(ObjectType.user, user, updatedUser, userLoggued, undefined);
    }
    delete updatedUser.password;
    delete updatedUser.token;
    return updatedUser;
  }

  async remove(id: number, userLoggued: any): Promise<DeleteResult> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    const deletedUser = await this.usersRepository.softDelete(id);
    if(deletedUser){
      this.auditTrailService.auditLogEvent(EventType.deleted, ObjectType.user, this.buildUserName(user), userLoggued, undefined);
    }
    return deletedUser;
  }

  async findByLogin({ user, password }: LoginUserDto): Promise<InfoUserDto> {    
    const userInDb = await this.usersRepository.findOne({ where: { user } });
    if (!userInDb) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    const areEqual = await this.comparePasswords(userInDb.password, password);     // compare passwords  
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }
    return this.toUserDto(userInDb);  
  }
  
  async changePassword(changePasswordDto: ChangePasswordDto, userId: string, userLogged: any){
    let response = false; 
    let match = await this.verifyPassword(userId, changePasswordDto.password);
    if(match.areEqual){
      response = await this.updatePassword(changePasswordDto.newPassword, match.user, userLogged);
    } else {
      response = false;
    }
    return response;
  }

  async verifyPassword(usedId: string, password: string): Promise<{areEqual: boolean, user: User}> {    
    const userInDb = await this.usersRepository.findOne(usedId);
    if (!userInDb) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    const areEqual = await this.comparePasswords(userInDb.password, password);  
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }

    return {areEqual, user: userInDb};  
  }

  async updatePassword(newPassword: string, user: User, userLoggued: any) {
    const changed = await this.previousPasswordsService.create(user, newPassword);
    if(!changed){
      return false;
    }
    let changePasswordDto = new ChangePasswordDto();
    changePasswordDto.password = await bcrypt.hash(newPassword, 10);
    await this.usersRepository.update(user.id, changePasswordDto);
    const updatedUser = await this.usersRepository.findOne(user.id);
    if(updatedUser){
      this.auditTrailService.auditLogEvent(EventType.modified, ObjectType.user, '*******', userLoggued, undefined, undefined, 'password');
      return true;
    } 
    return false;
  }

  async findByPayload({ user }: any): Promise<InfoUserDto> {
    return await this.usersRepository.findOne({ where:  { user } });  
  }

  validateUserAccess(user: User, roles: number[]): boolean {
    return roles.some((role) => user.level === role)
  }
  
  toUserDto(_user: User): InfoUserDto {  
    const {
      id,
      firstName,
      lastName,
      user,
      level,
      groupLevel,
      passExpirationDate,
      active,
      deletedAt,
      createdAt,
      updatedAt,
      erased,
    } = _user;
    let userDto: InfoUserDto = {
      id,
      firstName,
      lastName,
      user,
      level,
      groupLevel,
      passExpirationDate,
      active,
      erased,
      deletedAt,
      createdAt,
      updatedAt,
    };
    return userDto;
  };

  async comparePasswords(userPassword, currentPassword){
    return await bcrypt.compare(currentPassword, userPassword);
  };

  buildUserName(user: User){
    return user.firstName + ' ' + user.lastName + ' - (' + user.user + ')';
  }
}
