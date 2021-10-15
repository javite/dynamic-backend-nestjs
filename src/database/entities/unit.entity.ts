import { Column, CreateDateColumn,  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Batch } from "./batch.entity";


@Entity()
export class Unit {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    state: number;

    @Column("decimal", { precision: 6, scale: 2 })
    value: number;

    @ManyToOne(()=>Batch, batch => batch.units)
    batch: Batch;

    @CreateDateColumn()
    createdAt:Date;

}
