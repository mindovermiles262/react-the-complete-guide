import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <ExpenseItem 
        title="Expense #1"
        amount="34.99"
        date={new Date()}
      />
    </div>
  );
}

export default App;
