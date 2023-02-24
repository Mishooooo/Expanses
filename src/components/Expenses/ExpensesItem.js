import "./ExpensesItem.css";
import ExpensesDate from "./ExpensesDate.js";



function ExpensesItem(props) {

  
// const [title, setTitle] = useState(props.title)
// const clickHandler = () => setTitle('Updated');

  return (
    <li>
    <div className="expense-item">
      <ExpensesDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        {/* <button onClick={clickHandler}>Update!</button> */}
      </div>
    </div>
    </li>
  );
}
export default ExpensesItem;
