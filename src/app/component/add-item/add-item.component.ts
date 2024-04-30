import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task.template';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  text !: string;
  day !: string;
  reminder : boolean=false;
  showAddTask !: boolean;
  subscription !: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }
  onSubmit() {
    if(!this.text){
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
      this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;

  }
  


}
