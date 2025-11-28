import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthUfcComponent } from './month-ufc.component';

describe('MonthUfcComponent', () => {
  let component: MonthUfcComponent;
  let fixture: ComponentFixture<MonthUfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthUfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthUfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
