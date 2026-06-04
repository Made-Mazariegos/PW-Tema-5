import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVendedores } from './admin-vendedores';

describe('AdminVendedores', () => {
  let component: AdminVendedores;
  let fixture: ComponentFixture<AdminVendedores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVendedores],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminVendedores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
