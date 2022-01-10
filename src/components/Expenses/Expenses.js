import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

import './Expenses.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, changeFilteredYear] = useState('2019');

    const expensesFilterHandler = (newFilteredYear) => {
        console.log("Filter: " + newFilteredYear)
        changeFilteredYear(newFilteredYear)
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === Number(filteredYear)
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onExpensesFilterHandler={expensesFilterHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;