import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesM } from './perfumes-m';

describe('PerfumesM', () => {
  let component: PerfumesM;
  let fixture: ComponentFixture<PerfumesM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumesM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfumesM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
