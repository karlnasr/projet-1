import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
    _tasks: TaskModel[] = [
        {id: 1, description: 'Finir le projet'},
        {id: 2, description: 'Aller au gym'},
        {id: 3, description: 'Faire les courses'},
        {id: 4, description: 'Promener le chien'},
        {id: 5, description: 'Aller chez le docteur'}
    ]

    findAllTasks(): TaskModel[] {
        return this._tasks;
    }

    findTaskById(id: number): TaskModel {
        return this._tasks.find(t => t.id == id);
    }
}
