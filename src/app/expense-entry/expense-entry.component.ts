import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css'],
})
export class ExpenseEntryComponent implements OnInit {
  title = 'Expense entry';
  expenseEntry!: ExpenseEntry;
  constructor() {}
  ngOnInit() {
    this.title = 'Expense Entry';
    this.expenseEntry = {
      id: 1,
      item: 'Pizza',
      amount: 21,
      category: 'Food',
      location: 'Jordan',
      spendOn: new Date(2020, 6, 1, 10, 10, 10),
      createdOn: new Date(2020, 6, 1, 10, 10, 10),
    };
  }
}
