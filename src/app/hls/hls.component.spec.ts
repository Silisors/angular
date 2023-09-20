import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlsComponent } from './hls.component';

describe('HlsComponent', () => {
  let component: HlsComponent;
  let fixture: ComponentFixture<HlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HlsComponent]
    });
    fixture = TestBed.createComponent(HlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
