import { Component } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from '../../../services/user-task.service';
import { User } from '../../../model/User';

@Component({
  selector: 'app-view-personal-tasks',
  templateUrl: './view-personal-tasks.component.html',
  styleUrls: ['./view-personal-tasks.component.css']
})
export class ViewPersonalTasksComponent {
  constructor(private userTaskService:UserTaskService) { }

  user:any;
  tasks:Task[] = [];

  getPersonalTask(){                                                             //to view personal tasks
    this.userTaskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("Personal");
        }) },
      error() {alert ("error occured while loading the Pizza Details")},          
    })
  }

  ngOnInit(): void {
    this.user = this.userTaskService.getEmailId()
    console.log(this.user);
    
    this.getPersonalTask();
   
  }

}
