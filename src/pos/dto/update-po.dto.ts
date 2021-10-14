import { PartialType } from '@nestjs/mapped-types';
import { CreatePoDto } from './create-po.dto';

export class UpdatePoDto extends PartialType(CreatePoDto) {}
