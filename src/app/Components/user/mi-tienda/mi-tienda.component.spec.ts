import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiTiendaComponent } from './mi-tienda.component';

describe('MiTiendaComponent', () => {
  let component: MiTiendaComponent;
  let fixture: ComponentFixture<MiTiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiTiendaComponent]
    });
    fixture = TestBed.createComponent(MiTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
