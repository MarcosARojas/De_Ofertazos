import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasfrecuentesComponent } from './preguntasfrecuentes.component';

describe('PreguntasfrecuentesComponent', () => {
  let component: PreguntasfrecuentesComponent;
  let fixture: ComponentFixture<PreguntasfrecuentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreguntasfrecuentesComponent]
    });
    fixture = TestBed.createComponent(PreguntasfrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
