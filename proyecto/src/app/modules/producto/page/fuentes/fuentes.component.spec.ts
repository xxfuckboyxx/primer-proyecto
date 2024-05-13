import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuentesComponent } from './fuentes.component';

describe('FuentesComponent', () => {
  let component: FuentesComponent;
  let fixture: ComponentFixture<FuentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuentesComponent]
    });
    fixture = TestBed.createComponent(FuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
