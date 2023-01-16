import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { UpdateTaskComponent } from '../../update-task/update-task.component';
import { SendConfirmationComponent } from '../send-confirmation/send-confirmation.component';

@Component({
  selector: 'app-view-completed-task',
  templateUrl: './view-completed-task.component.html',
  styleUrls: ['./view-completed-task.component.css']
})
export class ViewCompletedTaskComponent implements OnInit {


  notes: Task[] = [];
  emailId: any;



  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc: TaskArchiveService) { }


    ngOnInit(): void {
      this.emailId = this.taskService.getEmailId()
      console.log(this.emailId);
     // this.getCompletedTask()
        this.taskService.getCompletedTask(this.emailId).subscribe(response => {
        this.notes = response
        console.log(this.emailId);})
  
    }













    move(note: any) {
      const dialogRef = this.dialog.open(SendConfirmationComponent, {
        data: { emailId: this.emailId, task: note },
        width: "400px",
        height: "247px" })
    }


    update(taskId: any) {
      const dialogRef = this.dialog.open(UpdateTaskComponent, {
        data: { emailId: this.emailId, task: taskId },
        width: "700px",
        height: "900px"
      })
    }

  }

 
  
 




  
 






