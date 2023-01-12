import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/Task';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css'],
})
export class ViewTasksComponent implements OnInit {
  notes: Task[] = [
    {
      taskId: 1,
      taskName: 'continue',
      taskContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ',
      taskCategory: 'work',
      taskDeadline: '23/01/2022',
      taskPriorityLevel: 'Low',
      isTaskCompleted: true,
    },
    {
      taskId: 2,
      taskName: 'okokok',
      taskContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ',
      taskCategory: 'work',
      taskDeadline: '23/01/2022',
      taskPriorityLevel: 'Low',
      isTaskCompleted: true,
    },
  ];

  constructor(private taskService: UserTaskService, private router: Router) {}

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
    this.notes = this.notes.filter((data) =>
      data?.taskName?.includes(searchText)
    );
  }

  check: any = '';
  ngOnInit(): void {
    this.check = this.taskService.email;
    this.taskService.getUserByEmailId().subscribe();
  }
}
