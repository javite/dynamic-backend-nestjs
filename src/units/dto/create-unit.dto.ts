import { IsNotEmpty } from "class-validator";

export class CreateUnitDto {

    @IsNotEmpty()
    state: number;

    @IsNotEmpty()
    batchId: number;
}
