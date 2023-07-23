import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkstationsController } from './workstations.controller';
import { WorkstationsService } from './workstations.service';
import { Workstation } from './workstations.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Workstation])],
    controllers: [WorkstationsController],
    providers: [WorkstationsService],
})
export class WorkstationsModule { }
