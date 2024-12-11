import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidshomeComponent } from './kidshome.component';

describe('KidshomeComponent', () => {
  let component: KidshomeComponent;
  let fixture: ComponentFixture<KidshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
