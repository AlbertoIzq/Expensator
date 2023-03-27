import {useState} from 'react';

import './Expenses.css'

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const expensesFiltered = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          <ExpenseChart expenses={expensesFiltered}/>
          <ExpensesList expenses={expensesFiltered}/>
        </Card>
    );
}