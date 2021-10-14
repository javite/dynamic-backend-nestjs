import { IsNotEmpty } from 'class-validator';

export class CreatePoDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    code: string;

    description: string;

    productId: number;

    batchId: number;
    
    @IsNotEmpty()
    state: number;

    @IsNotEmpty()
    userId: number;

}
