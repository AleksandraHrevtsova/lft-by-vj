import React, { Component } from 'react';
import classes from './PostEditor.module.css';

export default class PostEditor extends Component {
  state = {
    text: '',
    priority: 'normal',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { text, priority } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={classes.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter poet content..."
        />
        <label>
          Select tast priority:
          <select name="priority" value={priority} onChange={this.handleChange}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit">Create</button>
      </form>
    );
  }
}
