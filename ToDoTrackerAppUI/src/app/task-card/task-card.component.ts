import { Component, Input } from '@angular/core';
import { Task } from '../model/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  
  @Input()
  notes?:Task[] = [];
}
