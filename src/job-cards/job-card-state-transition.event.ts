import { JobCardState } from './job-cards.entity';

export class JobCardStateTransitionEvent {
    constructor(public readonly jobCardId: number, public readonly nextState: JobCardState) { }
}