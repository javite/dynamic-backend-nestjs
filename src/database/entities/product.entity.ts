import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Batch } from "./batch.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    presentation: string;

    @Column({nullable: true})
    GTIN: string;

    @Column({nullable: true})
    internalCode: string;

    @Column("decimal", { precision: 6, scale: 2 })
    weightTarget: number;

    @Column("decimal", { precision: 6, scale: 2 })
    weightMax: number;

    @Column("decimal", { precision: 6, scale: 2 })
    weightMin: number;

    @Column({nullable: true})
    speed: number;

    @Column({nullable: true})
    width: number;

    @Column()
    state: number;

    @OneToMany(()=>Batch, batch => batch.product)
    batches: Batch[];

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
