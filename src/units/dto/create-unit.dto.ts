import { IsNotEmpty } from "class-validator";

export class CreateUnitDto {

    @IsNotEmpty()
    state: number;

    @IsNotEmpty()
    value: number;

    @IsNotEmpty()
    batchId: number;
}
