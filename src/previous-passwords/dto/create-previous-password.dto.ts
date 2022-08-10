import { IsNotEmpty } from "class-validator";

export class CreatePreviousPasswordDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    newPassword: string;

}
