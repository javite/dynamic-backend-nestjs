import { PartialType } from '@nestjs/mapped-types';
import { CreatePreviousPasswordDto } from './create-previous-password.dto';

export class UpdatePreviousPasswordDto extends PartialType(CreatePreviousPasswordDto) {}
