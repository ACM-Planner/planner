import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import renderIf from 'render-if';

import './style.css';

export class Header extends Component {
  state = {
    career: null,
    year: null,
    major: null,
    minor: null,
  }

  static propTypes = {
    careers: PropTypes.array,
    years: PropTypes.array,
    majors: PropTypes.array,
    minors: PropTypes.array,
  }

  static defaultProps = {
    careers: ['Ingeniería', 'Enfermería'],
    years: [2001, 2002, 2012],
    majors:['Computación', 'Robótica', 'Eléctrica', 'Civil'],
    minors: ['Profundización'],
  }

  handleChange = (type) => {
    return (event, index, value) => this.setState({ [type]: value });
  }

  render() {
    return (
      <div className={classnames('Header', this.props.className)} style={this.props.style}>
        <div className="Header-Dropdowns">
          <SelectField hintText="Currículum" className="Header-Dropdown" value={this.state.career} onChange={this.handleChange('career')}>
            {this.props.careers.map((c, i) => {
              return <MenuItem key={i} value={i} primaryText={c} />;
            })}
          </SelectField>
          <SelectField hintText="Año" className="Header-Dropdown" value={this.state.year} onChange={this.handleChange('year')}>
            {this.props.years.map((c, i) => {
              return <MenuItem key={i} value={i} primaryText={c} />;
            })}
          </SelectField>
          {renderIf(true)(
            <SelectField hintText="Major" className="Header-Dropdown" value={this.state.major} onChange={this.handleChange('major')}>
            {this.props.majors.map((c, i) => {
              return <MenuItem key={i} value={i} primaryText={c} />;
            })}
            </SelectField>
          )}
          {renderIf(true)(
            <SelectField hintText="Minor" className="Header-Dropdown" value={this.state.minor} onChange={this.handleChange('minor')}>
              {this.props.minors.map((c, i) => {
                return <MenuItem key={i} value={i} primaryText={c} />;
              })}
            </SelectField>
          )}
        </div>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
