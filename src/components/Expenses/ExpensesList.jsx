import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          date={exp.date}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
