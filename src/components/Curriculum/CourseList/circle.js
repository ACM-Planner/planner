import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

export default class Circle extends Component {
  render() {
      var xCoordinate = this.props.radius + this.props.strokeWidth;
      var yCoordinate = this.props.radius + this.props.strokeWidth;
      return (
        <svg width={xCoordinate*2} height={yCoordinate*2}>
          <circle cx={xCoordinate} cy={yCoordinate}
                  r= {this.props.radius} fill={this.props.color}
                  stroke="black" strokeWidth={this.props.strokeWidth}
                  onClick={this.props.onClick}  />
        </svg>
      )
  }
}

Circle.defaultProps = {
  color: 'green',
  stroke: 'black',
  strokeWidth: 0.5 ,
  radius: 5
}

Circle.propTypes = {
  radius: React.PropTypes.number,
  color: React.PropTypes.string
}
