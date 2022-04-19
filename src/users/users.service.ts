import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './../database/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { InfoUserDto } from './dto/info-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
 
  async create(userDto: CreateUserDto): Promise<InfoUserDto> {    
    const { user, password, firstName, lastName, level, groupLevel } = userDto;
    const userInDb = await this.usersRepository.findOne({ where: { user } }); // check if the user exists in the db    
    if (userInDb) {
        throw new HttpException('Usuario ya existe', HttpStatus.BAD_REQUEST);    
    }
    const _user: User = this.usersRepository.create({ user, password, firstName, lastName, level, groupLevel });
    await this.usersRepository.save(_user);
    return this.toUserDto(_user);  
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    const _user = await this.usersRepository.findOne(id);
    if (!_user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    _user.firstName = updateUserDto.firstName;
    _user.lastName = updateUserDto.lastName;
    _user.level = updateUserDto.level;
    _user.groupLevel = updateUserDto.groupLevel;
    _user.passExpirationDate = updateUserDto.passExpirationDate;
    _user.active = updateUserDto.active;
    _user.erased = updateUserDto.erased;
    await this.usersRepository.update(id, _user);

    return this.toUserDto(_user);

  }

  async remove(id: number): Promise<DeleteResult> {
    const _user = await this.usersRepository.findOne(id);
    if (!_user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    _user.erased = true;
    await this.usersRepository.update(id, _user);
    return this.usersRepository.softDelete(id);
  }

  async findByLogin({ user, password }: LoginUserDto): Promise<InfoUserDto> {    
    const _user = await this.usersRepository.findOne({ where: { user } });
    if (!_user) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);    
    }
    const areEqual = await this.comparePasswords(_user.password, password);     // compare passwords    
    if (!areEqual) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
    }
    return this.toUserDto(_user);  
  }
  
  async findByPayload({ user }: any): Promise<InfoUserDto> {
    return await this.usersRepository.findOne({ where:  { user } });  
  }

  toUserDto(_user: User): InfoUserDto {  
    const { id, firstName, lastName, user, level, groupLevel, passExpirationDate, active, deletedAt, createdAt, updatedAt, erased } = _user;
    let userDto: InfoUserDto = { id, firstName, lastName, user, level, groupLevel, passExpirationDate, active, erased, deletedAt, createdAt, updatedAt };
    // { id, firstName, lastName, user, level, groupLevel, passExpirationDate, active, erased, deletedAt, createdAt, updatedAt };
    return userDto;
  };

  async comparePasswords(userPassword, currentPassword){
    return await bcrypt.compare(currentPassword, userPassword);
  };
}
