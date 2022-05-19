import { IsNotEmpty } from "class-validator";


export class CreateWarningDto {
    @IsNotEmpty()
    type: number;

    @IsNotEmpty()
    code: number;

    description?: string;

    active?: boolean;

    batchId?: number;

    acceptedBy?: number;

    acceptedAt?:Date;
}
