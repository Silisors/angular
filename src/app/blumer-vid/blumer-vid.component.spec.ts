import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlumerVidComponent } from './blumer-vid.component';

describe('BlumerVidComponent', () => {
  let component: BlumerVidComponent;
  let fixture: ComponentFixture<BlumerVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlumerVidComponent]
    });
    fixture = TestBed.createComponent(BlumerVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
