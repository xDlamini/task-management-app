import { TasksService } from './../tasks.service';
import { Component, Input, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {
  @Input() task!: Task;

  private TasksService = inject(TasksService) //making tasksService available for use

  onCompleteTask() {
    this.TasksService.removeTask(this.task.id);
  }
}
