
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { JobCard } from '../job-cards/job-cards.entity';

@Entity()
export class Workstation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @OneToMany(() => JobCard, jobCard => jobCard.workstation)
    jobCards: JobCard[];
}
