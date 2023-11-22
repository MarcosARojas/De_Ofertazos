import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpesaravenderComponent } from './empesaravender.component';

describe('EmpesaravenderComponent', () => {
  let component: EmpesaravenderComponent;
  let fixture: ComponentFixture<EmpesaravenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpesaravenderComponent]
    });
    fixture = TestBed.createComponent(EmpesaravenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
