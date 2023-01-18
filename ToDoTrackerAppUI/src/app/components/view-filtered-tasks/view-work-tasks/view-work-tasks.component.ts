import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { User } from 'src/app/model/User';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UpdateTaskComponent } from '../../update-task/update-task.component';

@Component({
  selector: 'app-view-work-tasks',
  templateUrl: './view-work-tasks.component.html',
  styleUrls: ['./view-work-tasks.component.css']
})
export class ViewWorkTasksComponent {
  

  user:any;
  tasks:Task[] = [];
  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc: TaskArchiveService) { }

  getWorkTask(){                                                             //to view personal tasks
    this.taskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("Work");
        }) },
      error() {alert ("error occured while loading the work tasks")},          
    })
  }

  ngOnInit(): void {
    this.user = this.taskService.getEmailId()
    console.log(this.user);
    this.getWorkTask();
    this.taskService.Refresh.subscribe(res=>{
      this.getWorkTask()
    })
   }

   
    delete(note: any) {
      this.taskService.deleteTaskByTaskId(this.user, note.taskName).subscribe()
      window.location.reload();
    }
  
  
    update(taskId: any) {
      const dialogRef = this.dialog.open(UpdateTaskComponent, {
        data: { emailId: this.user, task: taskId },
        width: "700px",
        height: "900px"
      })
    }
}
