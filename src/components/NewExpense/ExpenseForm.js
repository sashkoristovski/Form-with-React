import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     entredTitle: "",
  //     entredAmout: "",
  //     entredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value);
    console.log(event);

    // Alternative 1
    // setUserInput({
    //     ...userInput,
    //     entredTitle:event.target.value
    // });
    //Alternative 2
    // setUserInput((prevState) => {
    //   return { ...prevState, entredTitle: event.target.value };
    // });
    //
  };
  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entredAmout: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredAmout: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   entredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredDate: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entredTitle,
      amount: +entredAmount,
      date: new Date(entredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      {/* Title */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        {/* Amount */}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        {/* Date */}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
