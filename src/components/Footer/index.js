import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {Icon} from 'react-fa';

import './style.css';

export class Footer extends Component {
  render() {
    return (
      <footer className={classnames('Footer', this.props.className)} style={this.props.style}>
        {/* <code>src/components/Footer/index.js</code> */}
        <div className="Footer-box">
          <div>
          Hecho con mucho amor carino y dedicacion por
          </div>
        </div>
        <div className="Footer-box">
        <div>
          Link a colaboradores
        </div>
        <div>
          Link al github <Icon size="1x" name="github" />
        </div>
        <div>
          Link al capitulo
        </div>
        </div>
      </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
