import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsComponent } from './suits.component';

describe('SuitsComponent', () => {
  let component: SuitsComponent;
  let fixture: ComponentFixture<SuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
