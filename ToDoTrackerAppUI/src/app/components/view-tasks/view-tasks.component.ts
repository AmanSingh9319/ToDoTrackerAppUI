import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import { UpdateConfirmationComponent } from '../view-filtered-tasks/update-confirmation/update-confirmation.component';


@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css'],
})
export class ViewTasksComponent implements OnInit {
  notes$: any;
  searchResult: Task[] = [];
  emailId: any;
  addCount: number = 0;

  constructor(
    private taskService: UserTaskService,
    private router: Router,
    public dialog: MatDialog,
    private actRoute: ActivatedRoute,
    private taskArc: TaskArchiveService,
    private _snackBar: MatSnackBar
  ) {}

  add() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: { emailId: this.emailId },
      width: '700px',
      height: '650px',
    });
  }
  update(taskName: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { emailId: this.emailId, task: taskName },
      width: '700px',
      height: '750px',
    });
  }

  update1(taskName: any) {
    const dialogRef = this.dialog.open(UpdateConfirmationComponent, {
      data: { emailId: this.emailId, task: taskName },
      width: '300px',
      height: '200px',
    });
  }

  delete(task: any) {
    this.addCount = this.addCount + 1;
    this.taskService.notifycount.next(this.addCount);
    this.taskService.deleteTaskByTaskId(this.emailId, task.taskName).subscribe({
      next() {
        alert('successfully delete ');
      },
      error() {
        alert('error from server side ');
      },
    });
  }
  getAllTask() {
    this.taskService.getAllTasksOfUser(this.emailId).subscribe((response) => {
      this.notes$ = response;
      this.searchResult = response;
    });
  }

  getTaskPrioritywise(priority:string){
    if(priority==null){
      this.taskService.getAllTasksOfUser(this.emailId).subscribe({
        next:data => {this.notes$=data },
        error() {alert ("error occured while loading the tasks")},         
      })
    }else{
      this.taskService.getAllTasksOfUser(this.emailId).subscribe({
        next:data => { this.notes$=data.filter((task)=>
          {
            return task.taskPriorityLevel?.startsWith(priority);
          }) },
        error() {alert ("error occured while loading the tasks")},          
      })
    }
  }

  ngOnInit(): void {
    this.emailId = this.taskService.getEmailId();
    console.log(this.emailId);
    this.getAllTask();
    this.taskService.Refresh.subscribe((response) => {
      this.getAllTask();
    });
  }

  refresh(text: any) {
    window.location.reload();
  }

  search(searchText: string) {
    if (searchText === ' ' || !searchText) this.notes$ = this.searchResult;
    else {
      console.log(this.notes$);
      console.log(this.searchResult);
      this.taskService.getAllTasksOfUser(this.emailId).subscribe({
        next: (data) => {
          this.notes$ = data.filter((task) => {
            return task.taskName
              ?.toLowerCase()
              .startsWith(searchText.toLowerCase());
          });
        },
        error() {
          alert('no result');
        },
      });
      console.log(searchText);
      console.log(this.notes$);
    }
  }
}
















// this.userId = this.actRoute.snapshot.paramMap.get('userId');