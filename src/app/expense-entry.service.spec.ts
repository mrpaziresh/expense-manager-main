import { TestBed } from '@angular/core/testing';

import { ExpenseEntryService } from './expense-entry.service';

describe('ExpenseEntryService', () => {
  let service: ExpenseEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
