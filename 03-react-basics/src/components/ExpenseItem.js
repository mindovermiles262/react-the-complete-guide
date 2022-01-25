import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Expense from './Expense'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate datetime={props.date} />
      <Expense 
        title={props.title}
        amount={props.amount}
      />
    </div>
  );
}

export default ExpenseItem;
