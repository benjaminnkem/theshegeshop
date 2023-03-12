import {useState} from "react";

const Test = () => {
  const [simpleCounter, setSimpleCounter] = useState(0);

  function incrementCounter() {
    setSimpleCounter(simpleCounter + 1);
  }

  function subtractCounter() {
    if (simpleCounter > 0)
      setSimpleCounter(simpleCounter - 1);
  }

  return (
    <div>
      <h1>This is the test page</h1>
      <p>Count - {simpleCounter}</p>
      <button onClick={incrementCounter}>Add</button>
      <button onClick={subtractCounter}>Remove</button>
    </div>
  )
}

export default Test;
