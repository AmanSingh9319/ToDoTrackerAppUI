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
  notes:Task[] = [
    {
      taskId:1,
      taskName:"continue",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"work",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    },
    {
      taskId:2,
      taskName:"okokok",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"work",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    },
    {
      taskId:3,
      taskName:"do the work",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"work",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    },
    {
      taskId:4,
      taskName:"complete the task",
      taskContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ",
      taskCategory:"work",
      taskDeadline:"23/01/2022",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    }
  ];
  constructor(private userTaskService:UserTaskService) { }

  user:User={};
  tasks:Task[] = [];

  getWorkTask(){                                                             //to view personal tasks
    this.userTaskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("work");
        }) },
      error() {alert ("error occured while loading work tasks")},          
    })
  }

  ngOnInit(): void {
    this.getWorkTask();
   
  }
}
