import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UpdateTaskComponent } from '../../update-task/update-task.component';

@Component({
  selector: 'app-view-work-tasks',
  templateUrl: './view-work-tasks.component.html',
  styleUrls: ['./view-work-tasks.component.css']
})
export class ViewWorkTasksComponent {
<<<<<<< HEAD
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
=======
  
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3

  user:any;
  tasks:Task[] = [];
  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc: TaskArchiveService) { }

<<<<<<< HEAD
<<<<<<< HEAD
  getWorkTask(){                                                             //to view personal tasks
    this.userTaskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("work");
        }) },
      error() {alert ("error occured while loading work tasks")},          
    })
  }
=======
  // getWorkTask(){                                                             //to view personal tasks
  //   this.userTaskService.getAllTasksOfUser(this.user).subscribe({
  //     next:data => { this.tasks=data.filter((task)=>
  //       {
  //         return task.taskCategory?.startsWith("work");
  //       }) },
  //     error() {alert ("error occured while loading the work tasks")},          
  //   })
  // }
>>>>>>> bcd4fe26da7542ed43bd9f5c6369aebe1434b8f4
=======
  getWorkTask(){                                                             //to view personal tasks
    this.taskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("Work");
        }) },
      error() {alert ("error occured while loading the work tasks")},          
    })
  }
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3

  ngOnInit(): void {
    this.user = this.taskService.getEmailId()
    console.log(this.user);
    this.getWorkTask();
    this.taskService.Refresh.subscribe(res=>{
      this.getWorkTask()
    })
   }

   
    delete(note: any) {
      this.taskService.deleteTaskByTaskId(this.user, note.taskName).subscribe()
      window.location.reload();
    }
  
  
    update(taskId: any) {
      const dialogRef = this.dialog.open(UpdateTaskComponent, {
        data: { emailId: this.user, task: taskId },
        width: "700px",
        height: "900px"
      })
    }
}
