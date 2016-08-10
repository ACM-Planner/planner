import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

export class CoursesTable extends Component {
  render() {
    return (
      <div className={classnames('CoursesTable', this.props.className)} style={this.props.style}>
        <code>src/components/CoursesTable/index.js</code>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesTable);
