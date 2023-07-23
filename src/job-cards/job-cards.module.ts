import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobCardsController } from './job-cards.controller';
import { JobCardsService } from './job-cards.service';
import { JobCard } from './job-cards.entity';
import { JobCardStateTransitionListener } from './job-card-state-transition.listener';

@Module({
    imports: [TypeOrmModule.forFeature([JobCard])],
    controllers: [JobCardsController],
    // Add the listener to the providers 
    providers: [JobCardsService, JobCardStateTransitionListener]
})
export class JobCardsModule { }
