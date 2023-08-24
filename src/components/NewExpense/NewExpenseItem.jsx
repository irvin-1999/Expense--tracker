import React from "react";
import ExpenseForm from "./NewExpenseForm";
import "./NewExpenseItem.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
