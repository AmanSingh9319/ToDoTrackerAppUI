import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UpdateTaskComponent } from '../../update-task/update-task.component';

@Component({
  selector: 'app-view-upcoming-tasks',
  templateUrl: './view-upcoming-tasks.component.html',
  styleUrls: ['./view-upcoming-tasks.component.css']
})
export class ViewUpcomingTasksComponent implements OnInit{

   upcomingTask :Task[]=[];
    emailId: any;

  
  constructor(private taskService: UserTaskService, private router: Router,public dialog: MatDialog) { }

   

    

  getUpcomingTask(){
    this.taskService.getAllTasksOfUser(this.emailId).subscribe(response =>{
      const tasks = response.filter((task:any)=>{
        const itemDate = new Date(task.taskDeadline)
        console.log(itemDate);
        const today = new Date()
        console.log("Today date = "+today);
        return itemDate > today
      })
     this.upcomingTask=tasks
     console.log(this.upcomingTask);
     console.log(tasks) }) }


  ngOnInit(): void {
    this.emailId = this.taskService.getEmailId()
    console.log(this.emailId);
    this.getUpcomingTask() 
    this.taskService.Refresh.subscribe(res=>{
      this.getUpcomingTask()
    })
   }

    update(taskId: any) {
      const dialogRef = this.dialog.open(UpdateTaskComponent, {
        data: { emailId: this.emailId, task: taskId },
        width: "700px",
        height: "700px"
      })
    }


}
