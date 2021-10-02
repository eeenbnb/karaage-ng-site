import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIntersectionObserverComponent } from './item-intersection-observer.component';

describe('ItemIntersectionObserverComponent', () => {
  let component: ItemIntersectionObserverComponent;
  let fixture: ComponentFixture<ItemIntersectionObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemIntersectionObserverComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIntersectionObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
