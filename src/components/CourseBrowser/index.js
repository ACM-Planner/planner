import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import CourseSearch from '../CourseSearch';
import CoursesTable from '../CoursesTable';
import Schedulers from '../Schedulers';

import './style.css';

const styles = {
  table: {
    margin: 15,
  },
}

export class CourseBrowser extends Component {
  render() {
    return (
      <div className={classnames('CourseBrowser', this.props.className)} style={this.props.style}>
        <code>src/components/CourseBrowser/index.js</code>
        <div className="CourseBrowser-content">
          <CourseSearch className="CourseBrowser-panel" />
          <Schedulers className="CourseBrowser-panel" />
        </div>
        <CoursesTable style={styles.table} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseBrowser);
