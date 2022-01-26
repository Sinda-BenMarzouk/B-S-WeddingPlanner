import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitItemComponent } from './suit-item.component';

describe('SuitItemComponent', () => {
  let component: SuitItemComponent;
  let fixture: ComponentFixture<SuitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
