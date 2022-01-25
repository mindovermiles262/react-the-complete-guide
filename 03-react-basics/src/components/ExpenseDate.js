import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.datetime.toLocaleString('en-US', { month: 'long' })
  const day = props.datetime.toLocaleString('en-US', { day: 'numeric' })
  const year = props.datetime.toLocaleString('en-US', { year: 'numeric' })

  return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
  );
}

export default ExpenseDate;