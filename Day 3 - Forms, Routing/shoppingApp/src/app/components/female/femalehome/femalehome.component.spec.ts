import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemalehomeComponent } from './femalehome.component';

describe('FemalehomeComponent', () => {
  let component: FemalehomeComponent;
  let fixture: ComponentFixture<FemalehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemalehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemalehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
