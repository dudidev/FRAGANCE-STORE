import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCarrito } from './resumen-carrito';

describe('ResumenCarrito', () => {
  let component: ResumenCarrito;
  let fixture: ComponentFixture<ResumenCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenCarrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenCarrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
