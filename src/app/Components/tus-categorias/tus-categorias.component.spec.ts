import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusCategoriasComponent } from './tus-categorias.component';

describe('TusCategoriasComponent', () => {
  let component: TusCategoriasComponent;
  let fixture: ComponentFixture<TusCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TusCategoriasComponent]
    });
    fixture = TestBed.createComponent(TusCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
