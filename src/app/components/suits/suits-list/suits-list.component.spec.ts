import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsListComponent } from './suits-list.component';

describe('SuitsListComponent', () => {
  let component: SuitsListComponent;
  let fixture: ComponentFixture<SuitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuitsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
