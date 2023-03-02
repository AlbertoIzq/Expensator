import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022, 12, 14);
  const expenseIcon = "Food";
  const expenseDescription = "Bread";
  const expenseType = "Groceries";
  const expensePriceEuros = 2.17;
  const expenseCurrency = "THB";
  const expensePriceOther = 165.00;
  
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <h2>{expenseDate.toDateString()}</h2>
      </div>
        <div className="expense-item__icon">
          <p>{expenseIcon}</p>
        </div>
        <div className="expense-item__description">
          <h2>{expenseDescription}</h2>
          <h4>{expenseType}</h4>
        </div>
      <div className="expense-item__price">
        <p>{expensePriceEuros} €</p>
        <p>{expensePriceOther} {expenseCurrency}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
