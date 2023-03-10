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

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {
            props.expenses.map((expense, index) => (
              <div key={index}>
                <ExpenseItem
                  id={expense.id}
                  date={expense.date}
                  icon={expense.icon}
                  description={expense.description}
                  type={expense.type}
                  priceEuros={expense.priceEuros}
                  currency={expense.currency}
                  priceOther={expense.priceOther}
                />
              </div>
            ))
          }
        </Card>
    );
}