
export class CreateConfigurationDto {
    name: string;
    value: any;
    value_type: string; //boolean, number or string
    visible: boolean;
    max: number;
    min: number;
    group: string;
}
