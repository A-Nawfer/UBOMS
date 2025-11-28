import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfcRealTimeComponent } from './ufc-real-time.component';

describe('UfcRealTimeComponent', () => {
  let component: UfcRealTimeComponent;
  let fixture: ComponentFixture<UfcRealTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfcRealTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfcRealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
