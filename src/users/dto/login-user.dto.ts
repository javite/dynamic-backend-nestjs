import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    user: string;
    @IsNotEmpty()
    password: string;
}
