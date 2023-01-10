import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonalTasksComponent } from './view-personal-tasks.component';

describe('ViewPersonalTasksComponent', () => {
  let component: ViewPersonalTasksComponent;
  let fixture: ComponentFixture<ViewPersonalTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPersonalTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPersonalTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
