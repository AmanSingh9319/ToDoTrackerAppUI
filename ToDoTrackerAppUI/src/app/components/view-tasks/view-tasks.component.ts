import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit{

  notes:Task[] = [
    {
      taskId:1,
      taskName:"continue",
      taskContent:"loream ok ok ",
      taskCategory:"work",
      taskPriorityLevel: "Low",
      isTaskCompleted:true
    }
  ];

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
  }
  ngOnInit(): void {
  }
 
}
