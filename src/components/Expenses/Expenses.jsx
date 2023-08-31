import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const saveExpenseFilterYear = (year) => {
    setFilteredYear(year);
  };
  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onSaveExpenseYear={saveExpenseFilterYear}
      />
      {expenses.map((exp) => (
        <ExpenseItem title={exp.title} date={exp.date} amount={exp.amount} />
      ))}
    </div>
  );
};

export default Expense;
