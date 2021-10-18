import { IsNotEmpty } from 'class-validator';

export class CreatePoDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    code: string;

    description: string;

    productId: number;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    batchName: string;

    state?: number;

    expirationDate?: Date;

    productionDate?: Date;

    expectedSize?: number;

}
