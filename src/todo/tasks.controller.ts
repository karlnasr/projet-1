import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { LoggingService } from './logging.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService,
        private readonly loggingService: LoggingService) {}

    @Get()
    getTasks() {
        this.loggingService.log('Fetching all tasks')
        return this.taskService.findAllTasks();
    }

    @Get(':taskId')
    getTaskbyId(@Param('taskId') id: number) {
        let task = this.taskService.findTaskById(id);

        if (!task) {
            this.loggingService.error(`Task with Id ${id} not found`)
            throw new NotFoundException(`Task with Id ${id} not found`)
        }

        this.loggingService.log(`Retrieved task with Id ${id}`)
        return task;
    }
}
