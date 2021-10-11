import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    presentation: string;

    GTIN?: number;

    internalCode?: string;

    @IsNotEmpty()
    weightTarget: number;

    @IsNotEmpty()
    weightMax: number;

    @IsNotEmpty()
    weightMin: number;

    speed?: number;
}
