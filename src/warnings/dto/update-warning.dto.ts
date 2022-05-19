import { PartialType } from '@nestjs/mapped-types';
import { CreateWarningDto } from './create-warning.dto';

export class UpdateWarningDto extends PartialType(CreateWarningDto) {}
