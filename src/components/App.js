import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../assets/logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  return { courses: state.courses }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
