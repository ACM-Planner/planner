import React, { Component } from 'react';
import classnames from 'classnames';
import './style.css';

class CurriculumItem extends Component {

  render() {
    return (
      <div className={classnames('CurriculumItem', this.props.className)} style={this.props.style}>

      </div>
    );
  }

}

export default CurriculumItem;
