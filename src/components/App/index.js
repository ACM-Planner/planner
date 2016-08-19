import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Header from '../Header/';
import CurriculumPanel from '../CurriculumPanel/';
import CourseBrowser from '../CourseBrowser/';
import Footer from '../Footer/';

import './style.css';

export class Main extends Component {
  render() {
    return (
      <div className={classnames('App', this.props.className)} style={this.props.style}>
        <Header />
        <div className="App-content">
          <CurriculumPanel />
          <CourseBrowser />
        </div>
        <Footer />
      </div>
    );
  }
}

const App = (props) => (
  <MuiThemeProvider>
    <Main {...props} />
  </MuiThemeProvider>
);

export const mapStateToProps = (state, ownProps) => {
  return state;
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
