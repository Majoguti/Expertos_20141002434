import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUComponent } from './panel-u.component';

describe('PanelUComponent', () => {
  let component: PanelUComponent;
  let fixture: ComponentFixture<PanelUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
