import React, { Component } from 'react';
// import shortid from 'shortid';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import SignUpForm from './components/SignUpForm/SignUpForm';

// import Priority from './utils/Priority';
// import * as PostAPI from '../';
// import classes from './App.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header>
          <button type="button" onClick={this.openCreatePostModal}>
            Add post
          </button>
        </Header>
      </div>
    );
  }
}
