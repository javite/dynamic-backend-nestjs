import { IsNotEmpty } from "class-validator";

export class CreateBatchDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    productId: number;

    expirationDate?: Date;

    productionDate?: Date;

    expectedSize?: number;

    finishedBatchDate?: Date;
    
    state?: number;

    okTotal?: number;

    nokTotal?: number;

    nokHigh?: number;

    nokLow?: number;

    nokOther?: number;

}
