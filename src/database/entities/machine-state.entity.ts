import { Column, CreateDateColumn,  DeleteDateColumn,  Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MachineState {
    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column()
    state: number;

    @Column({nullable: true})
    batchId: number;

    @Column({nullable: true})
    poId: number;

    @Index()
    @CreateDateColumn()
    createdAt:Date;
}
