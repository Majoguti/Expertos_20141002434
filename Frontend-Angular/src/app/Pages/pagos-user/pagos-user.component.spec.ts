import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosUserComponent } from './pagos-user.component';

describe('PagosUserComponent', () => {
  let component: PagosUserComponent;
  let fixture: ComponentFixture<PagosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
