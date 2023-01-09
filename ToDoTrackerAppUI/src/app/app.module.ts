import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ArchiveTaskCardComponent } from './components/archive-task-card/archive-task-card.component';
=======
>>>>>>> 145bf6dceec8ad2a18e54328976f51ccea0119f6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HelpcenterComponent,
    ViewArchiveTaskComponent,
    UserProfileComponent,
    ArchiveTaskCardComponent
=======
    ViewTasksComponent
>>>>>>> 145bf6dceec8ad2a18e54328976f51ccea0119f6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
