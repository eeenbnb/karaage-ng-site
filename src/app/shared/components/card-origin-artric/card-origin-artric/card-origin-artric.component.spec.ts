import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOriginArtricComponent } from './card-origin-artric.component';

describe('CardOriginArtricComponent', () => {
  let component: CardOriginArtricComponent;
  let fixture: ComponentFixture<CardOriginArtricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOriginArtricComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOriginArtricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
