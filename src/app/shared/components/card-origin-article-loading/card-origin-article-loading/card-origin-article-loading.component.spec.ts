import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOriginArticleLoadingComponent } from './card-origin-article-loading.component';

describe('CardOriginArticleLoadingComponent', () => {
  let component: CardOriginArticleLoadingComponent;
  let fixture: ComponentFixture<CardOriginArticleLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOriginArticleLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOriginArticleLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
