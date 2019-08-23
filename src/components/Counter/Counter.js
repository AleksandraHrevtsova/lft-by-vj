import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Counter.module.css';
import Controls from './Controls';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      value: state.value - this.props.step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.counter}>
        <span>{value}</span>

        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
