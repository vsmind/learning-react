import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from 'react';

import './ExpenseItem.css'

const ExpenseItem = (props) => {
    // useState is a react hook, his functions must be called only in a react component functions, they cannot be called outside or in nested functions
    // state returns array [value (pointer), updating function]
    // we can use array destructure to store this values
    const [title, setTitle] = useState(props.title);

    // in jsx we only point to this handler function `onClick={clickHandler}` and not execute it `onClick={clickHandler()}`
    const clickHandler = () => {
        setTitle('Updated!');
        console.log('Clicked!!!')
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;