import { PartialType } from '@nestjs/mapped-types';
import { Batch } from 'src/database/entities/batch.entity';
import { Product } from 'src/database/entities/product.entity';
import { CreatePoDto } from './create-po.dto';

export class UpdatePoDto extends PartialType(CreatePoDto) {
    // po: CreatePoDto;
    batches: Batch[];
    products: Product[];
}
// extends PartialType(CreatePoDto)