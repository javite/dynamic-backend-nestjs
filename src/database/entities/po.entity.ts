import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity()
export class PO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    code: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    batchId: number;

    @ManyToOne(()=>User, user=>user.pos)
    user: User;

    @ManyToMany(()=>Product)
    @JoinTable()
    products: Product[];

    @Column()
    state: number;

    @DeleteDateColumn()
    deletedAt: Date;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
