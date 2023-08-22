import React from "react";
import "./ExpesenItem.css";

const ExpenseItem = ({ date, expense, price }) => {
  return (
    <div className="expense-item">
      <div>
        <div>{date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
        <div>{date.getFullYear()}</div>
      </div>

      <div className="expense-item__description">
        <h2>{expense}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
