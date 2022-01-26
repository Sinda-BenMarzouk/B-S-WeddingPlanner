import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressItemComponent } from './dress-item.component';

describe('DressItemComponent', () => {
  let component: DressItemComponent;
  let fixture: ComponentFixture<DressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DressItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
