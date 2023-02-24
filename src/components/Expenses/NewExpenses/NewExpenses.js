import React, {useState} from "react";

import ExpensesForm from "./ExpensesForm.js";
import "./NewExpenses.css";


const NewExpenses = (props) => {

const [displayForm, setDisplayeForm] = useState(false);

const displayFormHandler = () => {
  setDisplayeForm(true);
};
const removeFormHandler = () => {
  setDisplayeForm(false);
};

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  // const gg = () => document.querySelector('body').style.display = 'none';

  
  return (
    <div className="new-expense">
      {!displayForm && <button type="submit" onClick={displayFormHandler}>Add New Expense</button>}
      {displayForm && <ExpensesForm  onRemoveForm={removeFormHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpenses;
