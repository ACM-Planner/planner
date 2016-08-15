import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

export class NotFound extends Component {
  render() {
    return (
      <div className={classnames('NotFound', this.props.className)} style={this.props.style}>
        <h1 className="NotFound-title">
          Not Found
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

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
