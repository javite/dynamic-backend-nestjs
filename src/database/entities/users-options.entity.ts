import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class UsersOptions {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    sessionDuration: number;

    @Column()
    loginTimeout: number;

    @Column()
    securePassword: boolean;

    @Column({nullable: true})
    passwordGenerations: number;

    @Column({nullable: true})
    loginAttempts: number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
