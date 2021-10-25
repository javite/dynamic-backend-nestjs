import { IsNotEmpty } from 'class-validator';
import { Batch } from 'src/database/entities/batch.entity';

export class CreatePoDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    code: string;

    description: string;

    productId: number;

    @IsNotEmpty()
    userId: number;

    batch: Batch;

}
