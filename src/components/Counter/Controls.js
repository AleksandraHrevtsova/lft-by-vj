import React from 'react';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Increcemt by {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Decrement by {step}
    </button>
  </>
);

export default Controls;
