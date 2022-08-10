import { IsNotEmpty } from 'class-validator';

export class UpdateUsersOptionDto {
    @IsNotEmpty()
    sessionDuration: number;
    @IsNotEmpty()
    passwordDuration: number;
    @IsNotEmpty()
    securePassword: boolean;
    @IsNotEmpty()
    passwordGenerations: number;
    @IsNotEmpty()
    loginAttempts: number;
}
