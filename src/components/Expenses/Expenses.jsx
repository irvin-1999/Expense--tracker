import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const saveExpenseFilterYear = (year) => {
    setFilteredYear(year);
  };

  const filteredArray = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onSaveExpenseYear={saveExpenseFilterYear}
      />
      <ExpensesList items={filteredArray} />
    </div>
  );
};

export default Expense;
