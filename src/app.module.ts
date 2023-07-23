import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkstationsModule } from './workstations/workstations.module';
import { JobCardsModule } from './job-cards/job-cards.module';

const DB_URL = process.env.DB_URL || '';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: DB_URL,
      type: 'postgres',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    EventEmitterModule.forRoot(),
    WorkstationsModule,
    JobCardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
