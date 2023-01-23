import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  userId: any;
  notification$: any;
  addCount:number=1

  constructor(private taskService: UserTaskService,private notificationService :NotificationService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc : TaskArchiveService) { }
  
    ngOnInit(): void {
      this.userId = this.taskService.getEmailId()
      this.getAllNotification()
      console.log(this.notification$);
      
    }


    getAllNotification(){
      this.notificationService.getAllTasksFromNotification(this.userId).subscribe((response)=>{
        console.log(response);
        
        this.notification$ = response
        console.log(this.notification$);

      })
    }

    delete(taskname:any){
      this.addCount=this.addCount-1;
      this.taskService.notifycount.next(this.addCount)
      this.notificationService.deleteTaskFromNotification(this.userId,taskname).subscribe(data=>{
        this.ngOnInit()
      })
    }
}
