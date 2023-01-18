import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userId: any;
  userDetail: any = {};

  userId:any;
  userDetail:any={}
  
  constructor(private taskService: UserTaskService, private router: Router,
    public dialog: MatDialog, private actRoute: ActivatedRoute, private taskArc : TaskArchiveService) { }
  
    ngOnInit(): void {
      this.userId = this.taskService.getEmailId()
      this.taskService.getUserById(this.userId).subscribe(data=>{
      this.userDetail=data })}

  ngOnInit(): void {
    this.userId = this.taskService.getEmailId();
    this.taskService.getUserById(this.userId).subscribe((data) => {
      this.userDetail = data;
    });
  }
}
