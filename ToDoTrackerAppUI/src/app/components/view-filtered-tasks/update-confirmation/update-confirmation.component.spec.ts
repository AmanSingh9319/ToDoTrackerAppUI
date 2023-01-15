import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConfirmationComponent } from './update-confirmation.component';

describe('UpdateConfirmationComponent', () => {
  let component: UpdateConfirmationComponent;
  let fixture: ComponentFixture<UpdateConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
