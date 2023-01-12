import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/Task';
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
  userId:any ;
  
 constructor(private taskService: UserTaskService, private router: Router,
     public dialog: MatDialog, private actRoute: ActivatedRoute) { }


open() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      data: { userId: this.userId },
      width: "700px",
      height: "850px"
    })
  }
  open1(taskId:any) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { userId: this.userId ,task:taskId},
      width: "700px",
      height: "850px"
    })
  }
delete(taskId:any){
  console.log(taskId);
  
this.taskService.deleteTaskByTaskId(this.userId,taskId).subscribe({next(){alert("successfully deleted ")},error(){alert("error from server side ")}})
window.location.reload();
}

ngOnInit(): void {
    this.userId = this.actRoute.snapshot.paramMap.get('userId');
    this.taskService.getAllTasksOfUser(this.userId).subscribe(response => {
      this.notes = response
        console.log(response);
        console.log(this.userId);
    })}












  search(searchText: string) {
    //   this.noteService.getNote().subscribe({
    //     next: data => 

    //   {if(searchText || searchText !== ''){
    //  this.notes =data.filter(data => data?.title?.includes(searchText));}
    //   else
    //   {
    //     this.notes = data;
    //   }
    // }})
    //   }
    //   }
     this.notes = this.notes.filter(data => data?.taskName?.includes(searchText));
  }
 

}
