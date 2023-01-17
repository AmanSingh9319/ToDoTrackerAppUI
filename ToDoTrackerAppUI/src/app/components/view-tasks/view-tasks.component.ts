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
      taskPriorityLevel: 'Low',
      isTaskCompleted: true,
    },
    {
      taskId: 2,
      taskName: 'okokok',
      taskContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum sit impedit recusandae reprehenderit cupiditate in qui. Corrupti, incidunt adipisci quo magni necessitatibus, in accusantium fuga non animi, sit placeat! ',
      taskCategory: 'work',
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
  delete(taskId: any) {
    console.log(taskId);

    this.taskService.deleteTaskByTaskId(this.userId, taskId).subscribe({
      next() {
        alert('successfully deleted ');
      },
      error() {
        alert('error from server side ');
      },
    });
    window.location.reload();
  }

  ngOnInit(): void {
    this.userId = this.actRoute.snapshot.paramMap.get('userId');
    this.taskService.getAllTasksOfUser(this.userId).subscribe((response) => {
      this.notes = response;
      console.log(response);
      console.log(this.userId);
    });
  }

  check: any = '';
  ngOnInit(): void {
    this.check = this.taskService.email;
    this.taskService.getUserByEmailId().subscribe();
  }
}
