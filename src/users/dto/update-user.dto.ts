import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
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
