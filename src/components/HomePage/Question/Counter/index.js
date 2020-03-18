// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
// == Import : local
import CounterStyled from './CounterStyled';

// == Composant
const Counter = ({ count, increment, decrement }) => (
  <CounterStyled>
    <Button className="button" type="button" onClick={increment}>
      ^
    </Button>
    <div className="value">{count}</div>
    <Button icon className="button" type="submit" onClick={decrement}>
      <Icon name="angle up" />
    </Button>
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
