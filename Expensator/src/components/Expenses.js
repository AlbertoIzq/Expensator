import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import './Expenses.css'

export default function Expenses(props) {
    return (
        <Card className="expenses">
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