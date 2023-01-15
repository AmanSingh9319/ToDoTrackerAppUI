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
  

  user:any;
  tasks:Task[] = [];

  getPersonalTask(){                                                             //to view personal tasks
    this.taskService.getAllTasksOfUser(this.user).subscribe({
      next:data => { this.tasks=data.filter((task)=>
        {
          return task.taskCategory?.startsWith("Personal");
        }) },
      error() {alert ("error occured while loading the Pizza Details")},          
    })
  }

  ngOnInit(): void {
    this.user = this.taskService.getEmailId()
    console.log(this.user);
    
    this.getPersonalTask();
   
  }
  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc: TaskArchiveService) { }
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
