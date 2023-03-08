import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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
  
  return (
    <div>
      <h1>Expensator</h1>
      <Expenses expenses={expenses} />
    </div>
  );

  /*
  return (
    React.createElement(
    'div', {}, 
      React.createElement('h1', {}, "Expensator"),
      React.createElement(Expenses, {expenses: expenses})
    )
  );
  */
}

export default App;

