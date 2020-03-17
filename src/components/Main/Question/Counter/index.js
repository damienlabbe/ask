// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import : local
import CounterStyled from './CounterStyled';

// == Composant
const Counter = ({ count, increment, decrement }) => (
  <CounterStyled>
    <button className="button" type="button" onClick={increment}>⇧</button>
    <div className="value">{count}</div>
    <button className="button" type="button" onClick={decrement}>⇩</button>
  </CounterStyled>
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
