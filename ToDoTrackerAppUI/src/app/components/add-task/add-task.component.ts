import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserTaskService } from 'src/app/services/user-task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewTasksComponent } from '../view-tasks/view-tasks.component';
import { Task } from 'src/app/model/Task';
 import * as moment from 'moment';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  user: number = this.data.emailId; //emailId
  task: Task = {};
  todayDate = new Date();
  addCount: number = 0;

  addTaskForm = this.formBuilder.group({
    taskName: ['', [Validators.required]],
    taskContent: ['', [Validators.required, Validators.maxLength(203)]],
    taskDeadline: ['', [Validators.required]],
    taskCategory: ['', [Validators.required]],
    taskPriorityLevel: ['', [Validators.required]],
    taskCompleted: [false, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private taskService: UserTaskService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { emailId: number },
    public dialogRef: MatDialogRef<ViewTasksComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.user);
    let today = moment().format('YYYY-MM-DD');

    console.log(today);
  }

  addSubmit() {
  
      
        this.addCount=this.addCount+1;
        this.taskService.notifycount.next(this.addCount)
        this.taskService.addTask(this.user, this.task).subscribe((response: Task) => {

          this.task.taskName = response.taskName;
          this.task.taskContent = response.taskContent;
          this.task.taskDeadline = response.taskDeadline;
          this.task.taskCategory = response.taskCategory;
          this.task.taskPriorityLevel = response.taskPriorityLevel;
          this.task.taskCompleted = response.taskCompleted;
          console.log(this.user);
          console.log(this.addTaskForm.value);
          this.dialogRef.close()

        },(error:HttpErrorResponse) => {
          if(error.status==409){
          console.log(error.message);
          alert("Task with specified detail already exists.")   }
          else{
            alert("server site problem")
          }
        })
      
    
    console.log(this.task);
  }
  
}
