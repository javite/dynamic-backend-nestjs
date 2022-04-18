import { Column, CreateDateColumn,  Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Batch } from "./batch.entity";


@Entity()
export class Unit {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    state: number;

    @Column("decimal", { precision: 6, scale: 2 })
    value: number;

    @Index()
    @ManyToOne(()=>Batch, batch => batch.units)
    batch: Batch;

    @Index()
    @CreateDateColumn()
    createdAt:Date;

}
