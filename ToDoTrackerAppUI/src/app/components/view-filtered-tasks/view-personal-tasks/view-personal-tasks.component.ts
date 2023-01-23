import { Component } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from '../../../services/user-task.service';
import { User } from '../../../model/User';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UpdateTaskComponent } from '../../update-task/update-task.component';
import { SendConfirmationComponent } from '../send-confirmation/send-confirmation.component';

@Component({
  selector: 'app-view-personal-tasks',
  templateUrl: './view-personal-tasks.component.html',
  styleUrls: ['./view-personal-tasks.component.css']
})
export class ViewPersonalTasksComponent {
  

  emailId:any;
  tasks:Task[] = [];


  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc: TaskArchiveService) { }


  getPersonalTask(){                                                             //to view personal tasks
    this.taskService.getAllTasksOfUser(this.emailId).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("Personal");
        }) },
      error() {alert ("Error occured while loading personal tasks")},          
    })
  }

  ngOnInit(): void {
    this.emailId = this.taskService.getEmailId()
    this.getPersonalTask();
    this.taskService.Refresh.subscribe(res=>{
      this.getPersonalTask()
    })
   
  }

  update(taskname: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { emailId: this.emailId, task: taskname },
      width: "700px",
      height: "900px"
    })
  }

}
