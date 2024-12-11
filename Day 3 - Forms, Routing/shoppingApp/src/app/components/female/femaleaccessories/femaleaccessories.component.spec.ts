import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleaccessoriesComponent } from './femaleaccessories.component';

describe('FemaleaccessoriesComponent', () => {
  let component: FemaleaccessoriesComponent;
  let fixture: ComponentFixture<FemaleaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemaleaccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemaleaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
