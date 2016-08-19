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
          name: "CIWS",
          github: "",
          url: "http://ciws.cl",
        }
        {
          name: "Nicolás Gebauer",
          github: "negebauer",
          url: "http://negebauer.github.io/",
        },
        {
          name: "Gustavo Antunes",
          github: "gantunesr",
          url: "http://thisisguto.com",
        },
        {
          name: "Andrés Matte",
          github: "aamatte",
          url: "",
        },
        {
          name: "Anders Skog",
          github: "andersskog",
          url: "",
        },
        {
          name: "Andres Espinosa",
          github: "andresespinosapc",
          url: "",
        },
        {
          name: "",
          github: "Faturan",
          url: "",
        },
        {
          name: "Fernando Florenzano",
          github: "fdflorenzano",
          url: "",
        },
        {
          name: "Guillermo Figueroa",
          github: "gafigueroa",
          url: "",
        },
        {
          name: "Geraldine Monsalve",
          github: "gnmonsalve",
          url: "",
        },
        {
          name: "Matías Junemann",
          github: "mjjunemann",
          url: "",
        },
        {
          name: "Jaime Castro",
          github: "jcastro1",
          url: "",
        },
        {
          name: "Jurgen Heysen",
          github: "jheysen",
          url: "",
        },
        {
          name: "Loreto Prieto",
          github: "LorePrieto",
          url: "",
        },
        {
          name: "María Fernanda",
          github: "mf222",
          url: "",
        },
        {
          name: "",
          github: "mofadic",
          url: "",
        },
        {
          name: "Patricio López Juri",
          github: "mrpatiwi",
          url: "",
        },
        {
          name: "Oscar Estay",
          github: "oaestay",
          url: "",
        },
        {
          name: "Rodrigo Goméz",
          github: "rkoco",
          url: "",
        },
        {
          name: "Tamara Covacevich",
          github: "tamycova",
        },
        {
          name: "Tomas",
          github: "tegaete",
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
