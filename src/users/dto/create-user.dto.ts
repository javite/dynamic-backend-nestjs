import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    user: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    level: number;
    @IsNotEmpty()
    groupLevel: number;
    @IsNotEmpty()
    erased: boolean;
    @IsNotEmpty()
    active: boolean;
    @IsNotEmpty()
    passExpirationDate: Date;
}
