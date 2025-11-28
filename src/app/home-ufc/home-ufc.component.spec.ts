import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUfcComponent } from './home-ufc.component';

describe('HomeUfcComponent', () => {
  let component: HomeUfcComponent;
  let fixture: ComponentFixture<HomeUfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
