import React, {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredType, setEnteredType] = useState("");
    const [enteredPriceEuros, setEnteredPriceEuros] = useState("");
    const [enteredCurrency, setEnteredCurrency] = useState("");
    const [enteredPriceOther, setEnteredPriceOther] = useState("");

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const typeChangeHandler = (event) => {
        setEnteredType(event.target.value);
    }

    const priceEurosChangeHandler = (event) => {
        setEnteredPriceEuros(event.target.value);
    }

    const currencyChangeHandler = (event) => {
        setEnteredCurrency(event.target.value);
    }

    const priceOtherChangeHandler = (event) => {
        setEnteredPriceOther(event.target.value);
    }

    const reinitializeForm = () => {
        setEnteredDate("");
        setEnteredDescription("");
        setEnteredType("");
        setEnteredPriceEuros("");
        setEnteredCurrency("");
        setEnteredPriceOther("");
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredExpense =
        {
            date: new Date(enteredDate),
            description: enteredDescription,
            type: enteredType,
            priceEuros: +enteredPriceEuros,
            currency: enteredCurrency,
            priceOther: +enteredPriceOther
        }

        props.onSaveExpenseData(enteredExpense);

        // Reinitialize form
        reinitializeForm();

        // Hide form
        props.onCancel();
    }

    const resetHandler = (event) => {
        event.preventDefault();

        // Reinitialize form
        reinitializeForm();
    }

    return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
        <div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" step="2023-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Description</label>
                    <input type='text'
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Type</label>
                    <input type='text'
                    value={enteredType}
                    onChange={typeChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price in €</label>
                    <input type='number' min="0.01" step="0.01"
                    value={enteredPriceEuros}
                    onChange={priceEurosChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Other currency</label>
                    <input type='text'
                    value={enteredCurrency}
                    onChange={currencyChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price other currency</label>
                    <input type='number' min="0.01" step="0.01"
                    value={enteredPriceOther}
                    onChange={priceOtherChangeHandler}/>
                </div>
                
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' onClick={submitHandler}>Add expense</button>
                <button type='reset'>Reset</button>
            </div>
        </div>
    </form>
    )
};

export default ExpenseForm;
