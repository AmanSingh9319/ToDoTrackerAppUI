import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodayTasksComponent } from './view-today-tasks.component';

describe('ViewTodayTasksComponent', () => {
  let component: ViewTodayTasksComponent;
  let fixture: ComponentFixture<ViewTodayTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTodayTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTodayTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
