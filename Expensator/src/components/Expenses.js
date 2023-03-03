import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
    return (
        <div>
            {
            props.expenses.map((expense, index) => (
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