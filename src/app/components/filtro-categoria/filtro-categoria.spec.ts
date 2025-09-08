import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCategoria } from './filtro-categoria';

describe('FiltroCategoria', () => {
  let component: FiltroCategoria;
  let fixture: ComponentFixture<FiltroCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
