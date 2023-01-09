import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTaskCardComponent } from './archive-task-card.component';

describe('ArchiveTaskCardComponent', () => {
  let component: ArchiveTaskCardComponent;
  let fixture: ComponentFixture<ArchiveTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
