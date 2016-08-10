import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

export class CourseSearch extends Component {
  render() {
    return (
      <div className={classnames('CourseSearch', this.props.className)} style={this.props.style}>
        <code>src/components/CourseSearch/index.js</code>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
