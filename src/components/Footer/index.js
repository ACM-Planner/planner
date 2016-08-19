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
            DCC working day and night for UC
          </div>
        </div>
        <div className="Footer-box">
        <div>
          <a className="Footer-link" href='/posts/'><Icon size="1x" name="heart" />  Colaboradores</a>
        </div>
        <div>
          <a className="Footer-link" href='/posts/'><Icon size="1x" name="github" />  Proyecto</a>
        </div>
        <div>
          <a className="Footer-link" href='/posts/'>Capítulo estudiantil ACM</a>
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
