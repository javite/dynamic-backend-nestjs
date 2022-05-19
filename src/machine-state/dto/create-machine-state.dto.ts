import { IsNotEmpty } from "class-validator";

export class CreateMachineStateDto {
    @IsNotEmpty()
    state: number;

    batchId?: number;

    poId?: number;

}
