import { IsNotEmpty } from "class-validator";

export class CreateAuditTrailDto {
    @IsNotEmpty()
    eventType: string;

    @IsNotEmpty()
    fieldName: string;

    @IsNotEmpty()
    newValue: string;

    previousValue?: string;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    batchId: number;

    file: any;
}
