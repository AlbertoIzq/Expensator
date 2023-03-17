import {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2022, 12, 14),
    icon: "Food",
    description:"Bread",
    type: "Groceries",
    priceEuros: 2.17,
    currency: "THB",
    priceOther: 165.00
  },
  {
    id: 2,
    date: new Date(2022, 12, 13),
    icon: "Train",
    description:"Airport link",
    type: "Transport",
    priceEuros: 1.09,
    currency: "THB",
    priceOther: 40.00 
  },
  {
    id: 3,
    date: new Date(2022, 12, 13),
    icon: "Train",
    description:"Grab",
    type: "Transport",
    priceEuros: 1.77,
    currency: "THB",
    priceOther: 65.00
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = newExpense => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    })
  }
  
  return (
    <div>
      <h1>Expensator</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

