import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UpdateTaskComponent } from '../../update-task/update-task.component';

@Component({
  selector: 'app-view-today-tasks',
  templateUrl: './view-today-tasks.component.html',
  styleUrls: ['./view-today-tasks.component.css']
})
export class ViewTodayTasksComponent {

  upcomingTask :Task[]=[];
  emailId: any;


constructor(private taskService: UserTaskService, private router: Router,public dialog: MatDialog) { }

date = new Date()
padTo2Digits(num: number) {
 return num.toString().padStart(2, '0');
}

formatDate(date: Date) {
 return (
   [
     date.getFullYear(),
     this.padTo2Digits(date.getMonth() + 1),
     this.padTo2Digits(date.getDate()),
   ].join('-'))
  }


getTodayTask(){
  this.taskService.getAllTasksOfUser(this.emailId).subscribe(response =>{
    const tasks = response.filter((task:any)=>{
      const itemDate = task.taskDeadline
      console.log(itemDate);
      const today = this.formatDate(this.date)
      console.log("Today date = "+today);
      return itemDate == today
    })
   this.upcomingTask=tasks
   console.log(this.upcomingTask);
   console.log(tasks) }) }


ngOnInit(): void {
  this.emailId = this.taskService.getEmailId()
  console.log(this.emailId);
  this.getTodayTask() 
  this.taskService.Refresh.subscribe(res=>{
    this.getTodayTask()
  })
}

  update(taskname: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { emailId: this.emailId, task: taskname },
      width: "700px",
      height: "700px"
    })
  }

}
