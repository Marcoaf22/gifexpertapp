import React, { useState } from "react";
// import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);
  const onChanged = (e) => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <p>El valor es: {counter}</p>
      <button onClick={onChanged}>Add</button>
    </div>
  );
};

// CounterApp.propTypes = {
// value: PropTypes.string.isRequired,
// };

export default CounterApp;
