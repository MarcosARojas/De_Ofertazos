import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilShopComponent } from './perfil-shop.component';

describe('PerfilShopComponent', () => {
  let component: PerfilShopComponent;
  let fixture: ComponentFixture<PerfilShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilShopComponent]
    });
    fixture = TestBed.createComponent(PerfilShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
