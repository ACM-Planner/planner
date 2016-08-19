import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Collapse from 'react-collapse';
import {Icon} from 'react-fa';

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
        <div className="CurriculumPanel-text">
          Malla curricular
        </div>
        <Collapse isOpened={!this.state.collapsed}>
          <div className="CurriculumPanel-content">
            <Curriculum />
          </div>
        </Collapse>
        <div className="CurriculumPanel-button" onClick={this.toggleCollapse}>
          <Icon size="2x" name={`angle-double-${this.state.collapsed ? 'down' : 'up'}`} />
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
