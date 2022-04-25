import { IsNotEmpty } from "class-validator";

export class CreateAuditTrailDto {
    @IsNotEmpty()
    eventType: number;
    
    @IsNotEmpty()
    object: number;
    
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
