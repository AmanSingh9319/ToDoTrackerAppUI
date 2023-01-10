import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSidenavComponent } from './components/header-sidenav/header-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ArchiveTaskCardComponent } from './components/archive-task-card/archive-task-card.component';
import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ViewTodayTasksComponent } from './components/view-filtered-tasks/view-today-tasks/view-today-tasks.component';
import { ViewUpcomingTasksComponent } from './components/view-filtered-tasks/view-upcoming-tasks/view-upcoming-tasks.component';
import { ViewPersonalTasksComponent } from './components/view-filtered-tasks/view-personal-tasks/view-personal-tasks.component';
import { ViewWorkTasksComponent } from './components/view-filtered-tasks/view-work-tasks/view-work-tasks.component';
import { SettingsComponent } from './components/settings/settings.component';
import {MatChipsModule} from '@angular/material/chips';


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
    ViewTasksComponent,
    ViewTodayTasksComponent,
    ViewUpcomingTasksComponent,
    ViewPersonalTasksComponent,
    ViewWorkTasksComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
