import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArchiveTaskComponent } from './view-archive-task.component';

describe('ViewArchiveTaskComponent', () => {
  let component: ViewArchiveTaskComponent;
  let fixture: ComponentFixture<ViewArchiveTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArchiveTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewArchiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
