import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSidenavComponent } from './components/header-sidenav/header-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ArchiveTaskCardComponent } from './components/archive-task-card/archive-task-card.component';
import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSidenavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HelpcenterComponent,
    ViewArchiveTaskComponent,
    UserProfileComponent,
    ArchiveTaskCardComponent,
    ViewTasksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
