import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutsdetailsComponent } from './accoutsdetails.component';

describe('AccoutsdetailsComponent', () => {
  let component: AccoutsdetailsComponent;
  let fixture: ComponentFixture<AccoutsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoutsdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
