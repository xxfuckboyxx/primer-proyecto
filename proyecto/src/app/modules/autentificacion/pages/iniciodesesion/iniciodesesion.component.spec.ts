import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciodesesionComponent } from './iniciodesesion.component';

describe('IniciodesesionComponent', () => {
  let component: IniciodesesionComponent;
  let fixture: ComponentFixture<IniciodesesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciodesesionComponent]
    });
    fixture = TestBed.createComponent(IniciodesesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
