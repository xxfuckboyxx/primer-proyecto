import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacamadreComponent } from './placamadre.component';

describe('PlacamadreComponent', () => {
  let component: PlacamadreComponent;
  let fixture: ComponentFixture<PlacamadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacamadreComponent]
    });
    fixture = TestBed.createComponent(PlacamadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
