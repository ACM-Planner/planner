import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';
import CurriculumItem from './CurriculumItem/';

export class Curriculum extends Component {
  render() {
    return (
      <div className={classnames('Curriculum', this.props.className)} style={this.props.style}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Cursos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1º
              </td>
              <td>
                <CurriculumItem />
              </td>
              <td>
                <CurriculumItem />
              </td>
            </tr>
            <tr>
              <td>
                2º
              </td>
              <td>
                <CurriculumItem />
              </td>
              <td>
                <CurriculumItem />
              </td>
              <td>
                <CurriculumItem />
              </td>
            </tr>
          </tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
