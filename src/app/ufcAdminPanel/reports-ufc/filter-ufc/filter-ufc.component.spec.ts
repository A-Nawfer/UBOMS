import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUfcComponent } from './filter-ufc.component';

describe('FilterUfcComponent', () => {
  let component: FilterUfcComponent;
  let fixture: ComponentFixture<FilterUfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterUfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterUfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
