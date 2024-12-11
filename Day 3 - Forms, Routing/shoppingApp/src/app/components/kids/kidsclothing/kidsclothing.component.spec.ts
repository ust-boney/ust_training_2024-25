import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsclothingComponent } from './kidsclothing.component';

describe('KidsclothingComponent', () => {
  let component: KidsclothingComponent;
  let fixture: ComponentFixture<KidsclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsclothingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
