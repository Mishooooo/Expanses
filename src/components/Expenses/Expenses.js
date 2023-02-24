import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList.js";

const Expenses = (props) => {
  // props.onDrop();
  // console.log(props.onDrop());

  const [filteredYear, setFilteredYear] = useState("2023");

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };
 

  console.log(props.items.filter(exp => exp.date.getFullYear().toString() === filteredYear ));

  const filteredYearData = props.items.filter(
    (exp) => exp.date.getFullYear().toString() === filteredYear
  );
  console.log(filteredYearData);



  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={filteredYearHandler}
      />
      <ExpensesChart expenses={filteredYearData}/>
      {/* { <ExpensesItem
        key={filteredYearData.id}
        title={filteredYearData.title}
        amount={filteredYearData.amount}
        date={filteredYearData.date}
      />} */}
      {/* {filteredYearData.map((expense) => (
        <ExpensesItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        } */}

        <ExpensesList items={filteredYearData} />

      </Card>
    </div>
  );
};

export default Expenses;
