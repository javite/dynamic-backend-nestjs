import { IsNotEmpty } from "class-validator";

export class CreateBatchDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    productId: string;

    expirationDate?: Date;

    productionDate?: Date;

    expectedSize?: number;

    finishedBatchDate?: Date;
    
    @IsNotEmpty()
    state?: number;

    okTotal?: number;

    nokTotal?: number;

    nokHigh?: number;

    nokLow?: number;

    nokOther?: number;

}
