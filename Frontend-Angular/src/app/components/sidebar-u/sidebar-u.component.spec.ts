import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUComponent } from './sidebar-u.component';

describe('SidebarUComponent', () => {
  let component: SidebarUComponent;
  let fixture: ComponentFixture<SidebarUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
