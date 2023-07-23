import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { WorkstationsService } from './workstations.service';
import { Workstation } from './workstations.entity';

@Controller('workstations')
export class WorkstationsController {
    constructor(private readonly workstationsService: WorkstationsService) { }

    @Get()
    async getAllWorkstations(): Promise<Workstation[]> {
        return this.workstationsService.findAll();
    }

    @Get(':id')
    async getWorkstationById(@Param('id', ParseIntPipe) id: number): Promise<Workstation> {
        return this.workstationsService.findById(id);
    }

    @Post()
    async createWorkstation(@Body() workstationData: Partial<Workstation>): Promise<Workstation> {
        return this.workstationsService.create(workstationData);
    }

    @Put(':id')
    async updateWorkstation(
        @Param('id', ParseIntPipe) id: number,
        @Body() workstationData: Partial<Workstation>,
    ): Promise<Workstation> {
        return this.workstationsService.update(id, workstationData);
    }

    @Delete(':id')
    async deleteWorkstation(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.workstationsService.delete(id);
    }
}
