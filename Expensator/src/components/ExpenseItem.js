import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date} />
      </div>
        <div className="expense-item__icon">
          <p>{props.icon}</p>
        </div>
        <div className="expense-item__description">
          <h2>{props.description}</h2>
          <h4>{props.type}</h4>
        </div>
      <div className="expense-item__price">
        <p>{props.priceEuros} €</p>
        <p>{props.priceOther} {props.currency}</p>
      </div>
    </div>
  );
}