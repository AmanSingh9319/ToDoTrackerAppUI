import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { AddTaskComponent } from '../../add-task/add-task.component';
import { UpdateTaskComponent } from '../../update-task/update-task.component';

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
      this.taskService.getAllTasksOfUser(this.emailId).subscribe(response => {
        this.notes = response
        console.log(this.emailId);})
  
    }

  getCompletedTask() {                                                           
    this.taskService.getAllTasksOfUser(this.emailId).subscribe({
      next: data => {
        this.notes = data.filter((task) => {
          return task.isTaskCompleted?.valueOf();
        })
      },
      error() { alert("error occured while loading the Pizza Details") },
    })
  }
  
 




  update(taskId: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { emailId: this.emailId, task: taskId },
      width: "700px",
      height: "900px"
    })
  }
  move(task: any) {
    this.taskArc.addTaskInArchive(task, this.emailId).subscribe(data => { console.log(task) });
    this.taskService.deleteTaskByTaskId(this.emailId, task.taskId).subscribe(() => alert("successfull move to archive"))
    window.location.reload();
  }





}
