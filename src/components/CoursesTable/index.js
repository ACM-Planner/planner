/* eslint no-use-before-define:0 */

import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import renderIf from 'render-if';
import {Icon} from 'react-fa';

import './style.css';

// Fake data
const tableData = [
  {
    nrc: 2,
    sigla: 'iic2523',
    retiro: 'si',
    ingles: 'no',
    aprobacionEspecial: 'si',
    categoria: 'nose',
    nombre: 'bla bla',
    profesor: 'fdsfdsa',
    campus: 'fdsa',
    creditos: 10,
    vacantesTotal: 1,
    vacantesDisponibles: 1,
    vacantesReservadas: 1,
    horario: 'fdsafsd'
  },
  {
    nrc: 3,
    sigla: 'iic1111',
    retiro: 'si',
    ingles: 'no',
    aprobacionEspecial: 'si',
    categoria: 'nose',
    nombre: 'bla bla',
    profesor: 'fdsfdsa',
    campus: 'fdsa',
    creditos: 10,
    vacantesTotal: 1,
    vacantesDisponibles: 1,
    vacantesReservadas: 1,
    horario: 'fdsafsd'
  },
  {
    nrc: 3,
    sigla: 'iic6000',
    retiro: 'si',
    ingles: 'no',
    aprobacionEspecial: 'si',
    categoria: 'nose',
    nombre: 'bla bla',
    profesor: 'fdsfdsa',
    campus: 'fdsa',
    creditos: 10,
    vacantesTotal: 1,
    vacantesDisponibles: 1,
    vacantesReservadas: 1,
    horario: 'fdsafsd'
  },
  {
    nrc: 1,
    sigla: 'iic0101',
    retiro: 'si',
    ingles: 'no',
    aprobacionEspecial: 'si',
    categoria: 'nose',
    nombre: 'bla bla',
    profesor: 'fdsfdsa',
    campus: 'fdsa',
    creditos: 10,
    vacantesTotal: 1,
    vacantesDisponibles: 1,
    vacantesReservadas: 1,
    horario: 'fdsafsd'
  }
];

export class CoursesTable extends Component {
  render() {
    return (
      <div className={classnames('CoursesTable', this.props.className)} style={this.props.style}>
        <CourseTable></CourseTable>
      </div>
    );
  }
}

// Este es el style para el header, hay que hacer uno para el body sin la propiedad 'cursor'
const styles = {
  bodyRow: {
    padding: 0,
    textAlign: 'center'
  },
  headerRow: {
    padding: 0,
    textAlign: 'center',
    cursor: 'pointer'
  }
}

const tableHeaders = [
  'NRC',
  'Sigla',
  'Retirable',
  'Inglés',
  'Sec.',
  'Aprob. Esp.',
  'Categoría',
  'Nombre',
  'Profesor',
  'Campus',
  'Créd.',
  'Total',
  'Disponibles',
  'Reservadas',
  'Horario'
]

// Map every column number to a response key
const columnKeyMapping = [
  'nrc',
  'sigla',
  'retiro',
  'ingles',
  'aprobacionEspecial',
  'categoria',
  'nombre',
  'profesor',
  'campus',
  'creditos',
  'vacantesTotal',
  'vacantesDisponibles',
  'vacantesReservadas',
  'horario'
];

class CourseTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
      tableData: tableData,
      order: [null, null] // [columnId, ascending/descending(0/1)]
    };
  }

  // Order data by clicked header cell
  headerClick = (proxyObj, rowNumber, columnId) => {
    this.setState({
      tableData: tableData.sort((a, b) => {
        if (this.state.order[0] === columnId && this.state.order[1] === 0) {
          return a[columnKeyMapping[columnId-1]] < b[columnKeyMapping[columnId-1]];
        }
        else {
          return a[columnKeyMapping[columnId-1]] > b[columnKeyMapping[columnId-1]];
        }
      })
    });

    if (this.state.order[0] === columnId) {
      if (this.state.order[1] === 0) {
        this.setState({
          order: [columnId, 1]
        });
      }
      else {
        this.setState({
          order: [columnId, 0]
        });
      }
    }
    else {
      this.setState({
        order: [columnId, 0]
      });
    }
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="16" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow onCellClick={this.headerClick}>
              {tableHeaders.map((name, i) => (
                <TableHeaderColumn key={i} id='a' style={styles.headerRow} onClick={() => this.headerClick(i)}>
                  {name}
                  {renderIf(this.state.order[0] === i+1 && this.state.order[1] === 0)(
                    <Icon name="arrow-up" />
                  )}
                  {renderIf(this.state.order[0] === i+1 && this.state.order[1] === 1)(
                    <Icon name="arrow-down" />
                  )}
                </TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn style={styles.bodyRow}>{row.nrc}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.sigla}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.retiro}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.ingles}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.seccion}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.aprobacionEspecial}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.categoria}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.nombre}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.profesor}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.campus}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.creditos}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.vacantesTotal}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.vacantesDisponibles}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.vacantesReservadas}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}>{row.horario}</TableRowColumn>
                <TableRowColumn style={styles.bodyRow}></TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          {/* <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter> */}
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesTable);
