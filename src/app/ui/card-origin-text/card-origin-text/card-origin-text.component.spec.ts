import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOriginTextComponent } from './card-origin-text.component';

describe('CardOriginTextComponent', () => {
  let component: CardOriginTextComponent;
  let fixture: ComponentFixture<CardOriginTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOriginTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOriginTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
