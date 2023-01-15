import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserTaskService } from 'src/app/services/user-task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewTasksComponent } from '../view-tasks/view-tasks.component';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  user: number = this.data.emailId;
  task: Task = {}

  addTaskForm = this.formBuilder.group({
    taskName: ['', [Validators.required]],
    taskContent: ['', [Validators.required]],
    taskDeadline: [null],
    taskCategory: ['', [Validators.required]],
    taskPriorityLevel: ['', [Validators.required]],
    taskCompleted: [false, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, private taskService: UserTaskService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: { emailId: number }, public dialogRef: MatDialogRef<ViewTasksComponent>) { };

  ngOnInit(): void {console.log(this.user);}

  addSubmit() {
    this.taskService.getAllTasksOfUser(this.user).subscribe((data) => {
      const availableTask = data.find((res: Task) => { return res.taskName === this.task.taskName })
      if (availableTask) {
        alert("Task Name already exist")
      }
      else {
        this.taskService.addTask(this.user, this.task).subscribe((response: Task) => {

          this.task.taskName = response.taskName;
          this.task.taskContent = response.taskContent;
          this.task.taskDeadline = response.taskDeadline;
          this.task.taskCategory = response.taskCategory;
          this.task.taskPriorityLevel = response.taskPriorityLevel;
          this.task.taskCompleted = response.taskCompleted;
          window.location.reload();
          console.log(this.user);
          console.log(this.addTaskForm.value);
          this.dialogRef.close()

        }, (error) => { alert('server site issue') })
      }
    })
}









}
