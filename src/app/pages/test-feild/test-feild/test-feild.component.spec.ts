import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFeildComponent } from './test-feild.component';

describe('TestFeildComponent', () => {
  let component: TestFeildComponent;
  let fixture: ComponentFixture<TestFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFeildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
