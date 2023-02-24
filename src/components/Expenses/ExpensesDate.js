import './ExpensesDate.css';

 const ExpensesDate = function (props){

const month = props.date.toLocaleString("ka-GE", { month: "long" });
const day = props.date.toLocaleString("ka-GE", { day: "2-digit" });
const year = props.date.getFullYear();
// console.log(props.date.toLocaleString("ka-GE", { year: year, month: month}))

return (
  <div className="expense-date">
    <div className='expense-date__month'>{month}</div>
    <div className="expense-date__year">{day}</div>
    <div className="expense-date__day">{year}</div>
  </div>
);


}

export default ExpensesDate;