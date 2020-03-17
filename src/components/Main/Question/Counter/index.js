// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import : local


// == Composant
const Counter = ({ count, increment, decrement }) => (
  <div className="counter">
    <button type="button" onClick={increment}>⇧</button>
    <div className="value">{count}</div>
    <button type="button" onClick={decrement}>⇩</button>
  </div>
);
Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
Counter.defaultProps = {
  count: 0,
};
// == Export
export default Counter;
