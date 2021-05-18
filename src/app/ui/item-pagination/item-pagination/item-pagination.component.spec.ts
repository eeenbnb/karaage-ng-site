import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPaginationComponent } from './item-pagination.component';

describe('ItemPaginationComponent', () => {
  let component: ItemPaginationComponent;
  let fixture: ComponentFixture<ItemPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
