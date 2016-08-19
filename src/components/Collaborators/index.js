import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Footer from '../Footer/';

import './style.css';

export class Collaborators extends Component {
  constructor() {
    super();
    this.state = {
      collaborators: [
        {
          name: "Nicolás Gebauer",
          github: "negebauer",
        },
        {
          name: "Gustavo Antunes",
          github: "gantunesr",
        },
      ]
    };
  }

  render() {
    return (
      <div className={classnames('Collaborators', this.props.className)} style={this.props.style}>
        <h1 className="Collaborators-title">
          Colaboradores
        </h1>
        <div className="Collaborators-content">
        {this.state.collaborators.map((collaborator) => (
          <div>
            <a href={`http://github.com/${collaborator.github}`}>{collaborator.name}</a>
          </div>
        ))}
        </div>
        <Footer />
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
