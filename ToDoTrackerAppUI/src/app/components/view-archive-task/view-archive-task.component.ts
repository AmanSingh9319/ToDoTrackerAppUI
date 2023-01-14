import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-view-archive-task',
  templateUrl: './view-archive-task.component.html',
  styleUrls: ['./view-archive-task.component.css']
})
export class ViewArchiveTaskComponent  implements OnInit{
 
 
 
  notes: Task[] = [];
  task:Task={};
  userId:any;

  
  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc : TaskArchiveService) { }
 
  
  
 ngOnInit(): void {
    this.userId=this.taskService.getEmailId()
    this.taskArc.getAllTasksInArchive(this.userId).subscribe(data =>{
    this.notes =data
  })}


  restore(task:any){

    this.taskService.addTask(this.userId,task).subscribe(data=>{ console.log(data);});
    console.log(task);
    this.taskArc.deleteTaskByInArchive(this.userId,task.taskId).subscribe(()=>alert("move to user service"+task)); 
    window.location.reload();
  }
  

  }
