import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { ViewPersonalTasksComponent } from './components/view-filtered-tasks/view-personal-tasks/view-personal-tasks.component';
import { ViewTodayTasksComponent } from './components/view-filtered-tasks/view-today-tasks/view-today-tasks.component';
import { ViewUpcomingTasksComponent } from './components/view-filtered-tasks/view-upcoming-tasks/view-upcoming-tasks.component';
import { ViewWorkTasksComponent } from './components/view-filtered-tasks/view-work-tasks/view-work-tasks.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"view-tasks",
    component:ViewTasksComponent
  },
  {
    path:"view-archive-task",
    component:ViewArchiveTaskComponent
  },
  {
    path:"view-personal-tasks",
    component:ViewPersonalTasksComponent,
    // canActivate:[ViewPizzaGuard]
  },
  {
    path:"view-today-tasks",
    component:ViewTodayTasksComponent,
  },
  {
    path:"view-upcoming-tasks",
    component:ViewUpcomingTasksComponent,
  },
  {
    path:"view-work-tasks",
    component:ViewWorkTasksComponent,
  },
  {
    path:"settings",
    component:SettingsComponent,
  },
  {
    path:"helpcenter",
    component:HelpcenterComponent,
    
  },
  {
    path:"user-profile",
    component:UserProfileComponent
  },
  {
    path:"view-task/:userId",
    component:ViewTasksComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
