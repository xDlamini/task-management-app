import { Injectable } from "@angular/core";
import { type NewTaskData, Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Task[] = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2024-12-31',
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-08-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary: 'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
        {
          id: 't4',
          userId: 'u4',
          title: 'Build a Chat-app and include Firebase',
          summary: 'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
        {
          id: 't5',
          userId: 'u5',
          title: 'Flutter pokedex app',
          summary: 'Make a pokedex app with flutter and make sure you can make HTTP requests',
          dueDate: '2024-06-15',
        },
        {
          id: 't6',
          userId: 'u6',
          title: 'Prepare flutter app for deployment',
          summary: 'Test and debug the app to see how it functions before deployment',
          dueDate: '2024-06-15',
        },
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
      }

      getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({                                //push to add it at the bottom, unshift adds at the top
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
      }

      removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      //storing tasks to the browser's local storage
      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
}