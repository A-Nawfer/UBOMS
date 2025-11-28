import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsUfcComponent } from './reports-ufc.component';

describe('ReportsUfcComponent', () => {
  let component: ReportsUfcComponent;
  let fixture: ComponentFixture<ReportsUfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsUfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsUfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
