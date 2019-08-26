import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from './PrioritySelector';
import Priority from '../../utils/Priority';
import classes from './PostEditor.module.css';

const options = Object.values(Priority);

export default class PostEditor extends Component {
  static propTypes = {
    onAddPost: PropTypes.func.isRequired,
  };

  state = {
    text: '',
    priority: Priority.NORMAL,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddPost({ ...this.state });
    this.setState({
      text: '',
      priority: Priority.NORMAL,
    });
  };

  render() {
    const { text, priority } = this.state;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <input
          className={classes.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter poet content..."
        />
        <label className={classes.label}>
          Select tast priority:
          <PrioritySelector
            options={options}
            value={priority}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    );
  }
}
