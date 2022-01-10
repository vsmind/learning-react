import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // We can pass object to the state hook and manage one state in sted of 3 different state slices

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // React does not merge the state its just replace the old state with new one, that´s why we need to pass all fields
    // first we use spread operator to copy values from the previous state object and then replace field

    // when we update state and depend on previous state we should pass function to update state
    // it happens because react schedules state updates and does not perform them instantly

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        // prevent default behavior
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Titel</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2020-01-01" max="2022-12-31"
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm