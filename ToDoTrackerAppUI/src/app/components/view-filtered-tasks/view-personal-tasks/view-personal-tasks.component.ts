import { Component } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from '../../../services/user-task.service';
import { User } from '../../../model/User';
<<<<<<< HEAD
import { UserAuthenticationService } from '../../../services/user-authentication.service';
=======
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UpdateTaskComponent } from '../../update-task/update-task.component';
import { SendConfirmationComponent } from '../send-confirmation/send-confirmation.component';
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3

@Component({
  selector: 'app-view-personal-tasks',
  templateUrl: './view-personal-tasks.component.html',
  styleUrls: ['./view-personal-tasks.component.css']
})
export class ViewPersonalTasksComponent {
<<<<<<< HEAD
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
=======
  
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3

  user:any;
  tasks:Task[] = [];

<<<<<<< HEAD
  getPersonalTask(){                                                             //to view personal tasks
    this.userTaskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("personal");
        }) },
      error() {alert ("error occured while loading personal tasks")},          
=======

  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc: TaskArchiveService) { }


  getPersonalTask(){                                                             //to view personal tasks
    this.taskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("Personal");
        }) },
      error() {alert ("error occured while loading the Pizza Details")},          
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3
    })
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.getPersonalTask();
=======
    this.user = this.taskService.getEmailId()
    this.getPersonalTask();
    this.taskService.Refresh.subscribe(res=>{
      this.getPersonalTask()
    })
   
  }

  update(taskId: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { emailId: this.user, task: taskId },
      width: "700px",
      height: "900px"
    })
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3
  }

}
