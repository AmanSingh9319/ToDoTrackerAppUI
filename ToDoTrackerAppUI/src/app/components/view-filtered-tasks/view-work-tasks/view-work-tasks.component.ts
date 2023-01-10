import { Component } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-view-work-tasks',
  templateUrl: './view-work-tasks.component.html',
  styleUrls: ['./view-work-tasks.component.css']
})
export class ViewWorkTasksComponent {
  constructor(private userTaskService:UserTaskService) { }

  user:User={};
  tasks:Task[] = [];

  getWorkTask(){                                                             //to view personal tasks
    this.userTaskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("work");
        }) },
      error() {alert ("error occured while loading the work tasks")},          
    })
  }

  ngOnInit(): void {
    this.getWorkTask();
   
  }
}
