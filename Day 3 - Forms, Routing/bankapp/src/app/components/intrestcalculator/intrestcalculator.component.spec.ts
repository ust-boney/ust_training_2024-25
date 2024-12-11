import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestcalculatorComponent } from './intrestcalculator.component';

describe('IntrestcalculatorComponent', () => {
  let component: IntrestcalculatorComponent;
  let fixture: ComponentFixture<IntrestcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntrestcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrestcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
