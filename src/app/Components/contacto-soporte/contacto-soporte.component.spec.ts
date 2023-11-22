import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSoporteComponent } from './contacto-soporte.component';

describe('ContactoSoporteComponent', () => {
  let component: ContactoSoporteComponent;
  let fixture: ComponentFixture<ContactoSoporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoSoporteComponent]
    });
    fixture = TestBed.createComponent(ContactoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
