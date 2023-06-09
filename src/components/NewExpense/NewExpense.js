import React from "react";

import ExepenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log
        props.onAddExpense(expenseData);
    };

    return (
    <div className="new-expense">
       <ExepenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
    );
};

export default NewExpense;