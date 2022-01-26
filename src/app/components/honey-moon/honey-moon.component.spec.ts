import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyMoonComponent } from './honey-moon.component';

describe('HoneyMoonComponent', () => {
  let component: HoneyMoonComponent;
  let fixture: ComponentFixture<HoneyMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyMoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneyMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
