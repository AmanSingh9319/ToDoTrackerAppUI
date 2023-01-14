import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompletedTaskComponent } from './view-completed-task.component';

describe('ViewCompletedTaskComponent', () => {
  let component: ViewCompletedTaskComponent;
  let fixture: ComponentFixture<ViewCompletedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompletedTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCompletedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
