import React, { Component } from 'react';
import classnames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export class ActionButtons extends Component {

  render(){
    return (
      <div className={classnames('ActionButtons', this.props.className)} style={this.props.style}>
        <RaisedButton label="Calendario de pruebas" style={style} />
        <RaisedButton label="Salas en mapa" primary={true} style={style} />
        <RaisedButton label="Compartir" secondary={true} style={style} />
      </div>
    )
  }
}
