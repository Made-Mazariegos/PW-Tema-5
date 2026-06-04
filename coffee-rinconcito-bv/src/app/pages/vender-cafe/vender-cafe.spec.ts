import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderCafe } from './vender-cafe';

describe('VenderCafe', () => {
  let component: VenderCafe;
  let fixture: ComponentFixture<VenderCafe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderCafe],
    }).compileComponents();

    fixture = TestBed.createComponent(VenderCafe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
