import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoShopComponent } from './catalogo-shop.component';

describe('CatalogoShopComponent', () => {
  let component: CatalogoShopComponent;
  let fixture: ComponentFixture<CatalogoShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoShopComponent]
    });
    fixture = TestBed.createComponent(CatalogoShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
