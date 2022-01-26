import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressesListComponent } from './dresses-list.component';

describe('DressesListComponent', () => {
  let component: DressesListComponent;
  let fixture: ComponentFixture<DressesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});