import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Collapse from 'react-collapse';

import Curriculum from '../Curriculum/';

import './style.css';

export class CurriculumPanel extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className={classnames('CurriculumPanel', this.props.className)} style={this.props.style}>
        <Collapse isOpened={!this.state.collapsed}>
          <div className="CurriculumPanel-content">
            <Curriculum />
          </div>
        </Collapse>
        <div className="CurriculumPanel-button CurriculumPanel-text" onClick={this.toggleCollapse}>
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
