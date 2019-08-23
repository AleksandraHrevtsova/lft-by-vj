import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageUpdater extends Component {
  static defaultProps = {
    message: '',
  };

  static propTypes = {
    message: PropTypes.string,
  };

  state = {
    message: 'origin',
  };

  updateMessage = () => {
    this.setState({ message: `updated at ${Date.now()}` });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <button type="button" onClick={this.updateMessage}>
          Click
        </button>
      </div>
    );
  }
}
