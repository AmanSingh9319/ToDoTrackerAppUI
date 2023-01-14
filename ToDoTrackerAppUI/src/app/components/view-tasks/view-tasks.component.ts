import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { UpdateTaskComponent } from '../update-task/update-task.component';


@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  notes: Task[] = [];
  emailId: any;

  

  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc : TaskArchiveService) { }
  

  add() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: { emailId: this.emailId },
      width: "700px",
      height: "850px"
    })
  }
  update(taskId: any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { emailId: this.emailId, task: taskId },
      width: "700px",
      height: "900px" })
  }
  delete(task: any) {
    this.taskService.deleteTaskByTaskId(this.emailId, task.taskId).subscribe(()=>alert("successfull move to archive"))
    window.location.reload();
  }

  ngOnInit(): void {
      this.emailId = this.taskService.getEmailId()
      console.log(this.emailId);
      
      this.taskService.getAllTasksOfUser(this.emailId).subscribe(response => {
      this.notes = response
      console.log(this.emailId);})}


  

  search(searchText: string) {
      this.notes = this.notes.filter((task) => {
      return task.taskName?.startsWith(searchText);})}

}



















// this.userId = this.actRoute.snapshot.paramMap.get('userId');