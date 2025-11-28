import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UscRealTimeComponent } from './usc-real-time.component';

describe('UscRealTimeComponent', () => {
  let component: UscRealTimeComponent;
  let fixture: ComponentFixture<UscRealTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UscRealTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UscRealTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
