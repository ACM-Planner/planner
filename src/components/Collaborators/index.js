import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

export class Collaborators extends Component {
  render() {
    return (
      <div className={classnames('Collaborators', this.props.className)} style={this.props.style}>
        <h1 className="Collaborators-title">
          Collaborators
        </h1>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collaborators);
