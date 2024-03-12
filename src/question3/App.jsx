// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

/* import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const decreaseNumber = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  const increaseNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const LessButton = () => {
    return <button onClick={decreaseNumber}>Minska</button>;
  };

  const MoreButton = () => {
    return <button onClick={increaseNumber}>Öka</button>;
  };

  return (
    <div>
      <h1>{number}</h1>
      <MoreButton />
      <LessButton />
    </div>
  );
};

export default App; */

import React, { useState } from "react";

const CustomHook = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((count) => count + 1);
  };

  const decrement = () => {
    setValue((count) => count - 1);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <div>
        <br />
        <span>{value}</span>
        <br />
        <div>
          <button className="add" onClick={increment}>
            Increment
          </button>
          <button className="sub" onClick={decrement}>
            Decrement
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomHook;
