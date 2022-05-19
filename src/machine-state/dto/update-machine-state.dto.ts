import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineStateDto } from './create-machine-state.dto';

export class UpdateMachineStateDto extends PartialType(CreateMachineStateDto) {}
