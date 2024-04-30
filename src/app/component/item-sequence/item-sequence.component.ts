import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Task } from '../../Task.template';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-sequence',
  templateUrl: './item-sequence.component.html',
  styleUrl: './item-sequence.component.css'
})
export class ItemSequenceComponent {
  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();
  falTimes = faTimes;
  delete(task: Task){
    this.deleteTask.emit(task);
    
  }
  Toggle(task: Task){
    this.toggleReminder.emit(task);
  }

}
