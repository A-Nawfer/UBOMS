import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUscBookingsComponent } from './create-usc-bookings.component';

describe('CreateUscBookingsComponent', () => {
  let component: CreateUscBookingsComponent;
  let fixture: ComponentFixture<CreateUscBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUscBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUscBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
