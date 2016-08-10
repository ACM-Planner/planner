import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={classnames('Footer', this.props.className)} style={this.props.style}>
        <code>src/components/Footer/index.js</code>
      </footer>
    );
  }
}

export const mapStateToProps = (state, ownProps) => {
  return state;
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
