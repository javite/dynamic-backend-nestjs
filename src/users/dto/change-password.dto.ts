import { IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
    password?: string;
    @IsNotEmpty()
    newPassword: string;
}
