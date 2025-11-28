import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUscComponent } from './filter-usc.component';

describe('FilterUscComponent', () => {
  let component: FilterUscComponent;
  let fixture: ComponentFixture<FilterUscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterUscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterUscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
