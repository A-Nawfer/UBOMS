import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayUscComponent } from './day-usc.component';

describe('DayUscComponent', () => {
  let component: DayUscComponent;
  let fixture: ComponentFixture<DayUscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayUscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayUscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
