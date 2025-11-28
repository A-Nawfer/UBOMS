import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayUfcComponent } from './day-ufc.component';

describe('DayUfcComponent', () => {
  let component: DayUfcComponent;
  let fixture: ComponentFixture<DayUfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayUfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayUfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
