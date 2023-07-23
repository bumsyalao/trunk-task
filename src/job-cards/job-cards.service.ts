import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobCard, JobCardState } from './job-cards.entity';
import { JobCardStateTransitionEvent } from './job-card-state-transition.event';


@Injectable()
export class JobCardsService {
    constructor(
        @InjectRepository(JobCard)
        private readonly jobCardRepository: Repository<JobCard>,
        private readonly eventEmitter: EventEmitter2
    ) { }

    async findAll(): Promise<JobCard[]> {
        return this.jobCardRepository.find();
    }

    async findById(id: number): Promise<JobCard> {
        return this.jobCardRepository.findOne({ where: { id } });
    }

    async create(jobCardData: Partial<JobCard>): Promise<JobCard> {
        const jobCard = this.jobCardRepository.create(jobCardData);
        return this.jobCardRepository.save(jobCard);
    }

    async update(id: number, jobCardData: Partial<JobCard>): Promise<JobCard> {
        await this.jobCardRepository.update(id, jobCardData);
        return this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.jobCardRepository.delete(id);
    }

    async transitionJobCardState(id: number, nextState: JobCardState): Promise<JobCard> {
        const jobCard = await this.findById(id);

        if (!jobCard) {
            throw new NotFoundException('Job Card not found');
        }

        if (jobCard.state === nextState) {
            throw new Error('Job card is already in the requested state.');
        }

        switch (nextState) {
            case JobCardState.IN_PROGRESS:
                if (jobCard.state !== JobCardState.PENDING) {
                    throw new Error('Invalid state transition. Job card must be in "Pending" state to start.');
                }
                break;
            case JobCardState.PAUSED:
                if (jobCard.state !== JobCardState.IN_PROGRESS) {
                    throw new Error('Invalid state transition. Job card must be in "In progress" state to pause.');
                }
                break;
            case JobCardState.COMPLETE:
                if (jobCard.state !== JobCardState.IN_PROGRESS && jobCard.state !== JobCardState.PAUSED) {
                    throw new Error('Invalid state transition. Job card must be in "In progress" or "Paused" state to complete.');
                }
                break;
            default:
                throw new Error('Invalid state transition.');
        }

        jobCard.state = nextState;
        const updatedJobCard = await this.jobCardRepository.save(jobCard);

        // Emit the state transition event
        this.eventEmitter.emit(JobCardStateTransitionEvent.name, new JobCardStateTransitionEvent(id, nextState));

        return updatedJobCard;
    }
}
