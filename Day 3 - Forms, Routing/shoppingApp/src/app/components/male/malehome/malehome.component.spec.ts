import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalehomeComponent } from './malehome.component';

describe('MalehomeComponent', () => {
  let component: MalehomeComponent;
  let fixture: ComponentFixture<MalehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
