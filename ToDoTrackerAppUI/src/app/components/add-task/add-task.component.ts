import { Component, OnInit ,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserTaskService } from 'src/app/services/user-task.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {



  user: number = this.data.userId;

  addTaskForm!: FormGroup;
  addEmail: User = {}
  constructor(
    private formBuilder: FormBuilder, private taskService: UserTaskService, private router: Router,@Inject(MAT_DIALOG_DATA) public data :{ userId: number }) { }
 
 
    Category: any[] = [
    { value: 'Work-0', viewValue: 'Work' },
    { value: 'Personal-1', viewValue: 'Personal' },
    { value: 'Archive-2', viewValue: 'Archive' },
  ];

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      taskId: ['', [Validators.required]],
      taskName: ['', [Validators.required]],
      taskContent: ['', [Validators.required]],
      taskDeadline: [null],
      taskCategory: ['', [Validators.required]],
      taskPriorityLevel: ['', [Validators.required]],
      isTaskCompleted: ['', [Validators.required]]
    })

    console.log(this.user);

  }

  addSubmit() {
   this.taskService.addTask(this.user, this.addTaskForm.value).subscribe()
   window.location.reload();
   console.log(this.user);
   console.log(this.addTaskForm.value);

  }

}
