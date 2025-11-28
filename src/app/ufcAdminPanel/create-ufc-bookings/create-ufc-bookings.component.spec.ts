import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUfcBookingsComponent } from './create-ufc-bookings.component';

describe('CreateUfcBookingsComponent', () => {
  let component: CreateUfcBookingsComponent;
  let fixture: ComponentFixture<CreateUfcBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUfcBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUfcBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
