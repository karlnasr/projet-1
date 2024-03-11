import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service';
import { LoggingService } from './logging.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService, LoggingService]
})
export class TodoModule {}
