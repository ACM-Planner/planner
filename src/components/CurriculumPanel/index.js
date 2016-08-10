import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Curriculum from '../Curriculum/';

import './style.css';

export class CurriculumPanel extends Component {
  render() {
    return (
      <div className={classnames('CurriculumPanel', this.props.className)} style={this.props.style}>
        <code className="CurriculumPanel-text">src/components/CurriculumPanel/index.js</code>
        <div className="CurriculumPanel-content">
          <Curriculum />
        </div>
        <div className="CurriculumPanel-button CurriculumPanel-text">
          Button
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumPanel);
