import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosuserComponent } from './datosuser.component';

describe('DatosuserComponent', () => {
  let component: DatosuserComponent;
  let fixture: ComponentFixture<DatosuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosuserComponent]
    });
    fixture = TestBed.createComponent(DatosuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
