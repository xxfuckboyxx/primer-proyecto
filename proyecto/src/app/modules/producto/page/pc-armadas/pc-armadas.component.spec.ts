import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcArmadasComponent } from './pc-armadas.component';

describe('PcArmadasComponent', () => {
  let component: PcArmadasComponent;
  let fixture: ComponentFixture<PcArmadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcArmadasComponent]
    });
    fixture = TestBed.createComponent(PcArmadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
