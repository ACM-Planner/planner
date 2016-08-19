import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import {Icon} from 'react-fa';
import renderIf from 'render-if';
import './style.css';

export class CurriculumItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }

  static get defaultProps() {
    return {
      color: 'yellow',
      name: 'nombre',
      sigla: 'SIGLA',
      req: [],
    };
  }

  static get propTypes() {
    return {
      color: PropTypes.string,
      name: PropTypes.string,
      req: PropTypes.array,
    };
  }

  render() {
    const req = this.props.req.length ? this.props.req : 'sin requisitos';
    const reqColor = 'yellow';
    return (
      <div
        className={classnames('CurriculumItem', this.props.className)}
        style={this.props.style}
        onClick={() => this.setState({ click: !this.state.click })}
      >
        <div className="CurriculumItem-container">
          <div className="CurriculumItem-left" style={{ backgroundColor: this.props.color }} />
          <div className="CurriculumItem-right">
            <div className="CurriculumItem-main">
              <span className="CurriculumItem-text">{this.props.sigla}</span>
              <span className="CurriculumItem-header">{this.props.name}</span>
            </div>
          <hr style={{ margin: 0 }} />
          <div className="CurriculumItem-req">
            <div className="CurriculumItem-req-circle" style={{ backgroundColor: reqColor }}/>
              <span className="CurriculumItem-text">{req}</span>
            </div>
          </div>
        </div>
        {renderIf(this.state.click)(
          <div className="CurriculumItem-icon">
            <Icon name="check" />
          </div>
        )}
      </div>
    );
  };
}

export default CurriculumItem;
