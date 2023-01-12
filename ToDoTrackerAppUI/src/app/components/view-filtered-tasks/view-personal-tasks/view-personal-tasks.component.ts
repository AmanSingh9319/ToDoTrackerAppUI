import { Component } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from '../../../services/user-task.service';
import { User } from '../../../model/User';
import { UserAuthenticationService } from '../../../services/user-authentication.service';

@Component({
  selector: 'app-view-personal-tasks',
  templateUrl: './view-personal-tasks.component.html',
  styleUrls: ['./view-personal-tasks.component.css']
})
export class ViewPersonalTasksComponent {
  notes:Task[] = [
    {
      taskId:1,
      taskName:"continue",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"personal",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    },
    {
      taskId:2,
      taskName:"okokok",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"personal",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    },
    {
      taskId:3,
      taskName:"okokok",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"personal",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    },
    {
      taskId:4,
      taskName:"okokok",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"personal",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    }
  ];
  constructor(private userTaskService:UserTaskService, private userAuthService:UserAuthenticationService) { }

  user:User={};
  tasks:Task[] = [];

  getPersonalTask(){                                                             //to view personal tasks
    this.userTaskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("personal");
        }) },
      error() {alert ("error occured while loading personal tasks")},          
    })
  }

  ngOnInit(): void {
    this.getPersonalTask();
  }

}
