import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import MessageUpdater from './components/MessageUpdater/MessageUpdater';
import Input from './components/Input/Input';
import SignUpForm from './components/SignUpForm/SignUpForm';

export default class App extends Component {
  state = {};

  handleSignUp = credentials => {
    console.log(credentials);
  };

  render() {
    return (
      <div className="App">
        <Counter step={1} initialValue={5} />
        <Dropdown isOpen={false} />
        <MessageUpdater />
        <Input />
        <SignUpForm onSignUp={this.handleSignUp} />

        {/* <Route exact path="/" component={Header} /> */}
        {/* <Switch /> */}
      </div>
    );
  }
}

App.propTypes = {};
