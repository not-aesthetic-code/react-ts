import { useState, ChangeEvent } from "react";

function Counter() {
  const [count, setCountState] = useState(0);

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Reset</button>
        <button onClick={reset}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={()=>{}}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" onChange={setCount} />
       
          <input type="submit" />
        </form>
      </section>
    </main>
  );

  function increment() {
    setCountState(count+1);
  }
  function decrement() {
    setCountState( count-1);
  }

  function reset() {
    setCountState(0);
  }

  function setCount(event: ChangeEvent<HTMLInputElement>) {
    
      setCountState( +event.target.value );
  }
}

export default Counter;
