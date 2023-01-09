import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ArchiveTaskCardComponent } from './components/archive-task-card/archive-task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HelpcenterComponent,
    ViewArchiveTaskComponent,
    UserProfileComponent,
    ArchiveTaskCardComponent
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
