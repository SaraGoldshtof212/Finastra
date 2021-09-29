import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollNumComponent } from './Scroll-Num.component';

describe('CityCardComponent', () => {
  let component: ScrollNumComponent;
  let fixture: ComponentFixture<ScrollNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
