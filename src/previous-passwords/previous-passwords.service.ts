import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreviousPassword } from 'src/database/entities/previous-password.entity';
import { UpdatePreviousPasswordDto } from './dto/update-previous-password.dto';
import { User } from 'src/database/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PreviousPasswordsService {
  constructor(
    @InjectRepository(PreviousPassword)
    private readonly prevPassRepository: Repository<PreviousPassword>,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService
  ) {}

  async create(user: User, newPassword: string) {
    let pass = new PreviousPassword();
    pass.user = user;
    pass.previousPassword = newPassword;
    const prevPass: PreviousPassword = this.prevPassRepository.create(pass);
    const prevPassCreated = await this.prevPassRepository.save(prevPass);
    if(prevPassCreated){
      return true;
    }
    return false;
  }

  async findAll(userId: string, take: number): Promise<PreviousPassword[]> {
    const user = this.userService.findById(+userId);
    let prevPass = await this.prevPassRepository.find({where:{user}, order: {createdAt: "DESC"}, take});//{where:{batch}, order: {createdAt: "DESC"}, take: number}
    return prevPass;
  }

  findOne(id: number) {
    return `This action returns a #${id} previousPassword`;
  }

  update(id: number, updatePreviousPasswordDto: UpdatePreviousPasswordDto) {
    return `This action updates a #${id} previousPassword`;
  }

  remove(id: number) {
    return `This action is not permited`;
  }
}
