import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private auditTrailService: AuditTrailService
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
      this.auditTrailService.auditLogEvent(1, 3, this.buildUserName(userCreated), userLogged, undefined, undefined);
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

  async update(id: number, updateUserDto: UpdateUserDto, userLoggued: any) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    delete updateUserDto.password;
    await this.usersRepository.update(id, updateUserDto);
    const updatedUser = await this.usersRepository.findOne(id);
    if(updatedUser){
      this.auditTrailService.auditLogDifference(3, user, updatedUser, userLoggued, undefined);
    }
    delete updatedUser.password;
    delete updatedUser.token;
    return updatedUser;
  }

  async updatePassword(newPassword: string, userId: string, userLoggued: any) {
    const user = await this.usersRepository.findOne(userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    let changePasswordDto = new ChangePasswordDto();
    changePasswordDto.password = await bcrypt.hash(newPassword, 10);
    await this.usersRepository.update(userId, changePasswordDto);
    const updatedUser = await this.usersRepository.findOne(userId);
    if(updatedUser){
      this.auditTrailService.auditLogEvent(0, 3, '*******', userLoggued, undefined, undefined, 'password');
      return true;
    }
    return false;
  }

  async remove(id: number, userLoggued: any): Promise<DeleteResult> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    const deletedUser = await this.usersRepository.softDelete(id);
    if(deletedUser){
      this.auditTrailService.auditLogEvent(2, 3, this.buildUserName(user), userLoggued, undefined);
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
