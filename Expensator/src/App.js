import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2022, 12, 14),
      icon: "Food",
      description:"Bread",
      type: "Groceries",
      priceEuros: 2.17,
      currency: "THB",
      priceOther: 165.00
    },
    {
      date: new Date(2022, 12, 13),
      icon: "Train",
      description:"Airport link",
      type: "Transport",
      priceEuros: 1.09,
      currency: "THB",
      priceOther: 40.00 
    },
    {
      date: new Date(2022, 12, 13),
      icon: "Train",
      description:"Grab",
      type: "Transport",
      priceEuros: 1.77,
      currency: "THB",
      priceOther: 65.00
    }
  ]
  
  return (
    <div>
      <h1>Expensator</h1>
      {
        expenses.map((expense, index) => (
          <ExpenseItem
            date={expense.date}
            icon={expense.icon}
            description={expense.description}
            type={expense.type}
            priceEuros={expense.priceEuros}
            currency={expense.currency}
            priceOther={expense.priceOther}
          />
        ))
      }
    </div>
  );
}

export default App;
