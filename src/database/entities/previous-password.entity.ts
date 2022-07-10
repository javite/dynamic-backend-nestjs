import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class PreviousPassword {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    previousPassword: string;

    @ManyToOne(()=>User, user => user.previousPassword)
    user: User;

    @CreateDateColumn()
    createdAt:Date;

}
