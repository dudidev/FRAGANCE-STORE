import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesH } from './perfumes-h';

describe('PerfumesH', () => {
  let component: PerfumesH;
  let fixture: ComponentFixture<PerfumesH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumesH]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfumesH);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
