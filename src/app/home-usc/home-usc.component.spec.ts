import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUscComponent } from './home-usc.component';

describe('HomeUscComponent', () => {
  let component: HomeUscComponent;
  let fixture: ComponentFixture<HomeUscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
