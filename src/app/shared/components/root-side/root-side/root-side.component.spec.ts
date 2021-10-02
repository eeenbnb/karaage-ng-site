import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSideComponent } from './root-side.component';

describe('RootSideComponent', () => {
  let component: RootSideComponent;
  let fixture: ComponentFixture<RootSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RootSideComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
