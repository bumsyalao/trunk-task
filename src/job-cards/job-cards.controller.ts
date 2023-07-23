import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { JobCardsService } from './job-cards.service';
import { JobCard } from './job-cards.entity';
import { JobCardState } from './job-cards.entity';

@Controller('job-cards')
export class JobCardsController {
    constructor(private readonly jobCardsService: JobCardsService) { }

    @Get()
    async getAllJobCards(): Promise<JobCard[]> {
        return this.jobCardsService.findAll();
    }

    @Get(':id')
    async getJobCardById(@Param('id', ParseIntPipe) id: number): Promise<JobCard> {
        return this.jobCardsService.findById(id);
    }

    @Post()
    async createJobCard(@Body() jobCardData: Partial<JobCard>): Promise<JobCard> {
        return this.jobCardsService.create(jobCardData);
    }

    @Put(':id')
    async updateJobCard(
        @Param('id', ParseIntPipe) id: number,
        @Body() jobCardData: Partial<JobCard>,
    ): Promise<JobCard> {
        return this.jobCardsService.update(id, jobCardData);
    }

    @Delete(':id')
    async deleteJobCard(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.jobCardsService.delete(id);
    }

    @Put(':id/transition/:state')
    async transitionJobCardState(
        @Param('id', ParseIntPipe) id: number,
        @Param('state') state: JobCardState,
    ): Promise<JobCard> {
        return this.jobCardsService.transitionJobCardState(id, state);
    }
}
