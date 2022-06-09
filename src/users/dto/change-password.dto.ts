import { IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
    previowsPassword?: string;
    @IsNotEmpty()
    password: string;
}
