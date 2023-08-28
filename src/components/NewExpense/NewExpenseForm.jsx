import React, { useState } from "react";
import "./NewExpenseForm.css";

const ExpenseForm = ({ onSaveExpenceData }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevData) => {
      return { ...prevData, title: event.target.value };
    });
  };

  const amountHandler = (e) => {
    setUserInput((prevData) => {
      return { ...prevData, amount: e.target.value };
    });
  };

  const dateHandler = (e) => {
    setUserInput((prevData) => {
      return { ...prevData, date: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    onSaveExpenceData(expenseData);
    setUserInput({ title: "", amount: "", date: "" });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Text</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step=".01"
            value={userInput.amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-08-24"
            max="2024-12-31"
            value={userInput.date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
