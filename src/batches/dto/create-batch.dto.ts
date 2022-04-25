import { IsNotEmpty } from "class-validator";

export class CreateBatchDto {
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    productId: number;

    expirationDate?: string;

    productionDate?: string;

    expectedSize?: number;

    finishedBatchDate?: Date;
    
    state?: number;

    okTotal?: number;

    nokTotal?: number;

    nokHigh?: number;

    nokLow?: number;

    nokOther?: number;

}
