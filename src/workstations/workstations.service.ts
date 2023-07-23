import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workstation } from './workstations.entity';

@Injectable()
export class WorkstationsService {
    constructor(
        @InjectRepository(Workstation)
        private readonly workstationRepository: Repository<Workstation>,
    ) { }

    async findAll(): Promise<Workstation[]> {
        return this.workstationRepository.find();
    }

    async findById(id: number): Promise<Workstation> {
        return this.workstationRepository.findOne({ where: { id } });
    }

    async create(workstationData: Partial<Workstation>): Promise<Workstation> {
        const workstation = this.workstationRepository.create(workstationData);
        return this.workstationRepository.save(workstation);
    }

    async update(id: number, workstationData: Partial<Workstation>): Promise<Workstation> {
        await this.workstationRepository.update(id, workstationData);
        return this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.workstationRepository.delete(id);
    }
}
