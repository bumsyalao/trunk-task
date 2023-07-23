import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { JobCardStateTransitionEvent } from './job-card-state-transition.event';

@Injectable()
export class JobCardStateTransitionListener {
    @OnEvent(JobCardStateTransitionEvent.name)
    handleJobCardStateTransitionEvent(event: JobCardStateTransitionEvent) {
        console.log(`Job Card ID: ${event.jobCardId} has transitioned to state: ${event.nextState}`);
    }
}
