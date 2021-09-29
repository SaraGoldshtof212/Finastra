import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBoomComponent } from './TestBoom.component';

describe('TestBoomComponent', () => {
  let component: TestBoomComponent;
  let fixture: ComponentFixture<TestBoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
