import React from "react";
import ExpenseForm from "./NewExpenseForm";
import "./NewExpenseItem.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenceData={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
