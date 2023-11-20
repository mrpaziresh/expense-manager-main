import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css'],
})
export class ExpenseEntryListComponent implements OnInit {
  title!: string;
  expenseEntries!: ExpenseEntry[];
  constructor(private restService: ExpenseEntryService) {}

  ngOnInit() {
    this.title = 'Expense Entry List';

    this.getExpenseItems();
  }

  getExpenseItems() {
    this.restService
      .getExpenseEntries()
      .subscribe((data) => (this.expenseEntries = data));
  }
}
