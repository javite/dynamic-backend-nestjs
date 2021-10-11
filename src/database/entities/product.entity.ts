import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    presentation: string;

    @Column({nullable: true})
    GTIN: number;

    @Column({nullable: true})
    internalCode: string;

    @Column()
    weightTarget: number;

    @Column()
    weightMax: number;

    @Column()
    weightMin: number;

    @Column({nullable: true})
    speed: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
