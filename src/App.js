import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    loading: true,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Header} />
          <Switch />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {};

export default App;
