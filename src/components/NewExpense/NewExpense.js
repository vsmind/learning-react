import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [showExpenseForm, expenseFormStatus] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData, id: Math.random().toString()
      };

      props.onAddExpense(expenseData);
    };

    const changeExpenseFormStatus = () => {
        if (showExpenseForm === false)
            return expenseFormStatus(true);
        else
            return expenseFormStatus(false);
    };
    
    return (
        <div className="new-expense">
            { showExpenseForm ? <ExpenseForm changeExpenseForm={changeExpenseFormStatus} onSaveExpenseData={saveExpenseDataHandler}/> : <button type="button" onClick={changeExpenseFormStatus}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense