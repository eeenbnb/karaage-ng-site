import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactCardComponent } from './react-card.component';

describe('ReactCardComponent', () => {
  let component: ReactCardComponent;
  let fixture: ComponentFixture<ReactCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
