import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingTasksComponent } from './view-upcoming-tasks.component';

describe('ViewUpcomingTasksComponent', () => {
  let component: ViewUpcomingTasksComponent;
  let fixture: ComponentFixture<ViewUpcomingTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUpcomingTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUpcomingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
