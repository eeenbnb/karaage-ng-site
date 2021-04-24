import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOriginTitleComponent } from './card-origin-title.component';

describe('CardOriginTitleComponent', () => {
  let component: CardOriginTitleComponent;
  let fixture: ComponentFixture<CardOriginTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOriginTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOriginTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
