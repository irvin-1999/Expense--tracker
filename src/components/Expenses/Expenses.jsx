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
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      />
    </div>
  );
};

export default Expense;
