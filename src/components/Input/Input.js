import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    inputValue: 'qweqwe',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
