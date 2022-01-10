import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, changeFilteredYear] = useState('2019');

    const expensesFilterHandler = (newFilteredYear) => {
        console.log("Filter: " + newFilteredYear)
        changeFilteredYear(newFilteredYear)
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onExpensesFilterHandler={expensesFilterHandler} />
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
            </Card>
        </div>
    );
}

export default Expenses;