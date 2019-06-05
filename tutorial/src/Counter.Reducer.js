import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 1:
    case true:
    case "INCREMENT":
      return { value: state.value + 1 };

    case -1:
    case false:
    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h2>Counter with useReducer : {state.value}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      &nbsp;
      <button onClick={() => dispatch({ type: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: -1 })}>-1</button>
      &nbsp;
      <button onClick={() => dispatch({ type: true })}>+1</button>
      <button onClick={() => dispatch({ type: false })}>-1</button>
    </div>
  );
};

export default CounterReducer;
