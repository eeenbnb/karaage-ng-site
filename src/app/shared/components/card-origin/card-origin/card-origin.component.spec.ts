import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOriginComponent } from './card-origin.component';

describe('CardOriginComponent', () => {
  let component: CardOriginComponent;
  let fixture: ComponentFixture<CardOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOriginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
