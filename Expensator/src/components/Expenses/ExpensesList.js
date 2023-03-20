import './ExpensesList.css';

import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {  
    if(props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return (
        <ul className="expenses-list">
        {
            props.expenses.map((expense) => (
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
            ))
        }
        </ul>
    )
}