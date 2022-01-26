import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuitComponent } from './add-suit.component';

describe('AddSuitComponent', () => {
  let component: AddSuitComponent;
  let fixture: ComponentFixture<AddSuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
