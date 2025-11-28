import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUfcBookingsComponent } from './manage-ufc-bookings.component';

describe('ManageUfcBookingsComponent', () => {
  let component: ManageUfcBookingsComponent;
  let fixture: ComponentFixture<ManageUfcBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUfcBookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUfcBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
