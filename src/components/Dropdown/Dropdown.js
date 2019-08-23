import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Dropdown.module.css';

export default class Dropdown extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  handleToggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={classes.dropdown}>
        <button type="button" onClick={this.handleToggle}>
          &#9776;
        </button>

        {isOpen && (
          <div>
            <ul>
              <li>opt1</li>
              <li>opt1</li>
              <li>opt1</li>
              <li>opt1</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
