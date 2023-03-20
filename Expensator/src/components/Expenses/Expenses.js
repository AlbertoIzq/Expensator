import {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const expensesFiltered = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  let expensesContent = <p>No expenses found</p>;
  if(expensesFiltered.length > 0) {
    expensesContent =  expensesFiltered.map((expense) => (
      <ExpenseItem key={expense.id}
      id={expense.id}
      date={expense.date}
      icon={expense.icon}
      description={expense.description}
      type={expense.type}
      priceEuros={expense.priceEuros}
      currency={expense.currency}
      priceOther={expense.priceOther}
      />
    ));
  }

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {expensesContent}
        </Card>
    );
}