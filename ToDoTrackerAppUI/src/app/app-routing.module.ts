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
import { ViewCompletedTaskComponent } from './components/view-filtered-tasks/view-completed-task/view-completed-task.component';
import { SendConfirmationComponent } from './components/view-filtered-tasks/send-confirmation/send-confirmation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderSidenavComponent } from './components/header-sidenav/header-sidenav.component';
import { AuthGuard } from './guards/auth.guard';

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
    path:"view-archive-task",
    component:ViewArchiveTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view-personal-tasks",
    component:ViewPersonalTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view-today-tasks",
    component:ViewTodayTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view-upcoming-tasks",
    component:ViewUpcomingTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view-work-tasks",
    component:ViewWorkTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"settings",
    component:SettingsComponent
  },
  {
    path:"helpcenter",
    component:HelpcenterComponent
    
  },
  {
    path:"view-complete-tasks",
    component:ViewCompletedTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"user-profile",
    component:UserProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view-task/:userId",
    component:ViewTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"view-task",
    component:ViewTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"popup",
    component: SendConfirmationComponent
  },
  {
    path:"**" ,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
