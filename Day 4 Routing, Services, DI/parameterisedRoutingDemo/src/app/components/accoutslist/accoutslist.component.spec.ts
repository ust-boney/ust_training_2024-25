import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutslistComponent } from './accoutslist.component';

describe('AccoutslistComponent', () => {
  let component: AccoutslistComponent;
  let fixture: ComponentFixture<AccoutslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoutslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoutslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
