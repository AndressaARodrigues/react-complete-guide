import React from "react";

import ExepenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = () => {
    return (
    <div className="new-expense">
       <ExepenseForm/>
    </div>
    );
};

export default NewExpense;