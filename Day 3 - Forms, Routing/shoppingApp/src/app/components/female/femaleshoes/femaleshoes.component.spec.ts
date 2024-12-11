import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleshoesComponent } from './femaleshoes.component';

describe('FemaleshoesComponent', () => {
  let component: FemaleshoesComponent;
  let fixture: ComponentFixture<FemaleshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemaleshoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemaleshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
