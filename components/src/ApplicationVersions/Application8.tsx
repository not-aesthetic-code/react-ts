
import {  ChangeEvent } from "react";
import {  useReducer } from 'react';



export default function Counter() {
  const [count, dispatch] = useReducer(reducer, {count: 0});
  

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count.count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={ decrement}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" onChange={setCount} />

          <input type="submit" />
        </form>
      </section>
    </main>
  );

  function increment() {
    dispatch({type: 'INCREMENT_COUNT'});
  }
  function decrement() {
    dispatch({type: 'DECREMENT_COUNT'});

  }
  function reset() {
    dispatch({type: 'RESET_COUNT'});

  }

  function setCount(event: ChangeEvent<HTMLInputElement>) {
    dispatch({type: 'UPDATE_COUNT', payload :+event.target.value });

  }
}

type CountData = {
  count: number;
};

type CountState = CountData & { count: number };

type BasicCounterAction = {
    type: "DECREMENT_COUNT" | "INCREMENT_COUNT" |  "RESET_COUNT";
  };

type SetCounterAction = {
    type: "UPDATE_COUNT";
    payload: number;
}
  

type CounterAction = BasicCounterAction | SetCounterAction


function reducer(state: CountState, action: CounterAction) {
    switch (action.type) {
      case "INCREMENT_COUNT":
        return {
          count: state.count + 1,
        };
      case "DECREMENT_COUNT":
        return {
          count: state.count - 1,
        };
      case "UPDATE_COUNT":
        return {
          count: action.payload,
        };
        case "RESET_COUNT":
            return {
    
              count: 0,
            };
      default: 
        return state
    }
  
  }
  


