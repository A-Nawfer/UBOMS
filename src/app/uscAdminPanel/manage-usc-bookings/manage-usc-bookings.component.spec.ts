import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUscBookingsComponent } from './manage-usc-bookings.component';

describe('ManageUscBookingsComponent', () => {
  let component: ManageUscBookingsComponent;
  let fixture: ComponentFixture<ManageUscBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUscBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUscBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
