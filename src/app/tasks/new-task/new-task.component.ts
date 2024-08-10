import { TasksService } from './../tasks.service';
import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private TasksService = inject(TasksService) //using dependency injection which allows us to reference only the name as a Token to using it

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.TasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
      this.userId
    );
    this.close.emit();
  }

}
    