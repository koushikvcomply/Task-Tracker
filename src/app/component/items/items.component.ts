import { Component } from '@angular/core';
import { Task } from '../../Task.template';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    this.taskService.getData().subscribe((data) => {
      this.tasks = data;
    });
  }

  onclickDelete(task: Task) {
    this.taskService.deleteOneTask(task).subscribe(() => {
      this.taskService.getData().subscribe((data) => {
        this.tasks = data;
      });

    });
  };
  toggleSet(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  submitData(task: Task) {
    this.taskService.addTask(task).subscribe((data) => {
      this.tasks.push(data);
    });
  }
}

