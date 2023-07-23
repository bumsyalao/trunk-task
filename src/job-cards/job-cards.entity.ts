import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Workstation } from '../workstations/workstations.entity';

export enum JobCardState {
    PENDING = 'Pending',
    IN_PROGRESS = 'In progress',
    PAUSED = 'Paused',
    COMPLETE = 'Complete',
}

@Entity()
export class JobCard {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'enum', enum: JobCardState, default: JobCardState.PENDING })
    state: JobCardState;

    @ManyToOne(() => Workstation, workstation => workstation.jobCards)
    workstation: Workstation;
}
