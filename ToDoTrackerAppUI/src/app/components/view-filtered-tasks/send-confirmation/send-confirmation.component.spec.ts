import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendConfirmationComponent } from './send-confirmation.component';

describe('SendConfirmationComponent', () => {
  let component: SendConfirmationComponent;
  let fixture: ComponentFixture<SendConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
