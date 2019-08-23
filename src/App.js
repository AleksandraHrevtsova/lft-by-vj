import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import MessageUpdater from './components/MessageUpdater/MessageUpdater';
// import Input from './components/Input/Input';
// import SignUpForm from './components/SignUpForm/SignUpForm';
// import Post from './components/Posts/Post';
import PostEditor from './components/Posts/PostEditor';
import PostFilter from './components/Posts/PostFilter';
import PostsList from './components/Posts/PostsList';
import classes from './App.css';

export default class App extends Component {
  state = {
    posts: [],
  };

  // handleSignUp = credentials => {
  //   console.log(credentials);
  // };

  render() {
    const { posts } = this.state;

    return (
      <div className={classes.app}>
        {/* <Counter step={1} initialValue={5} />
        <Dropdown isOpen={false} />
        <MessageUpdater />
        <Input />
        <SignUpForm onSignUp={this.handleSignUp} /> */}
        <PostEditor />
        <hr />
        <PostFilter />
        <PostsList items={posts} />
        {/* <Route exact path="/" component={Header} /> */}
        {/* <Switch /> */}
      </div>
    );
  }
}

App.propTypes = {};
