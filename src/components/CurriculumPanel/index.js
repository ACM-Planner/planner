import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Curriculum from '../Curriculum/';

import './style.css';

export class CurriculumPanel extends Component {
  render() {
    return (
      <div className={classnames('CurriculumPanel', this.props.className)} style={this.props.style}>
        <div className="CurriculumPanel-content">
          <Curriculum />
        </div>
        <div className="CurriculumPanel-button CurriculumPanel-text">
          <FlatButton label="^" primary={true} />
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
