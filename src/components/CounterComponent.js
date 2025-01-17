import "../styles/styles.css";
import { useState } from "react";

const CounterComponent = () => {
  const [number, setNumber] = useState(0);
  const [error, setError] = useState(null);

  const handleReset = () => {
    setNumber(0);
    setError(null);
  };

  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
      setError(null);
    } else {
      setError("Number needs to be lower than 10");
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
      setError(null);
    } else {
      setError("Number needs to be greater than 0");
    }
  };

  return (
    <div className="card">
      <h3 className="card-title">Number: {number}</h3>
      <div className="card-content">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default CounterComponent;
