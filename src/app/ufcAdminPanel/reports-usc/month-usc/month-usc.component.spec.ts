import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthUscComponent } from './month-usc.component';

describe('MonthUscComponent', () => {
  let component: MonthUscComponent;
  let fixture: ComponentFixture<MonthUscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthUscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthUscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
