import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleclothingComponent } from './femaleclothing.component';

describe('FemaleclothingComponent', () => {
  let component: FemaleclothingComponent;
  let fixture: ComponentFixture<FemaleclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemaleclothingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemaleclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
