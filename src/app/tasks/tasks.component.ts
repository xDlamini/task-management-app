import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskData, Task } from './task/task.model';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({ required: true }) userId! : string;
  @Input({ required: true }) name! : string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {

  }

  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
   
  }

  onStartTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
