import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressesComponent } from './dresses.component';

describe('DressesComponent', () => {
  let component: DressesComponent;
  let fixture: ComponentFixture<DressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
