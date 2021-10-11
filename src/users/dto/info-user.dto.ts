import { IsNotEmpty } from 'class-validator';

export class InfoUserDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    user: string;
    @IsNotEmpty()
    level: number;
    @IsNotEmpty()
    groupLevel: number;
    @IsNotEmpty()
    passExpirationDate: Date;
    @IsNotEmpty()
    active: boolean;
    erased: boolean;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
