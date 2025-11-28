import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsUscComponent } from './reports-usc.component';

describe('ReportsUscComponent', () => {
  let component: ReportsUscComponent;
  let fixture: ComponentFixture<ReportsUscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsUscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsUscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
