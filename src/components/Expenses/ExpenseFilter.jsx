import "./ExpenseFilter.css";

const ExpenseFilter = ({ selectedYear, onSaveExpenseYear }) => {
  const onselectedYearHandler = (event) => {
    // console.log(event.target.value);
    onSaveExpenseYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={onselectedYearHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
