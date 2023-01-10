import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkTasksComponent } from './view-work-tasks.component';

describe('ViewWorkTasksComponent', () => {
  let component: ViewWorkTasksComponent;
  let fixture: ComponentFixture<ViewWorkTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
