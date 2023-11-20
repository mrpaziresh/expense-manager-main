import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseEntryComponent } from './expense-entry.component';

describe('ExpenseEntryComponent', () => {
  let component: ExpenseEntryComponent;
  let fixture: ComponentFixture<ExpenseEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseEntryComponent],
    });
    fixture = TestBed.createComponent(ExpenseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
