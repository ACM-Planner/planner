/* eslint no-use-before-define:0 */

import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

import './style.css';

// Fake data
const tableData = [
  {
    nrc: 1,
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
    nrc: 4,
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
  row: {
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
      tableData: tableData
    };
  }

  headerClick = (i) => {
    // Esta función debería ordenar el objeto tableData
    // Tiene que haber una forma de saber a que 'i' correponde cada columna
    console.log('headerClick llamada');
    this.setState({
      tableData: tableData.sort((a, b) => {
        return a.nrc > b.nrc
      })
    });
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
            <TableRow>
              {tableHeaders.map((name, i) => (
                // Problema con evento onClick, no se está llamando
                <TableHeaderColumn key={i} style={styles.row} onClick={() => this.headerClick(i)}>{name}</TableHeaderColumn>
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
                <TableRowColumn style={styles.row}>{row.nrc}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.sigla}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.retiro}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.ingles}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.seccion}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.aprobacionEspecial}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.categoria}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.nombre}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.profesor}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.campus}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.creditos}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.vacantesTotal}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.vacantesDisponibles}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.vacantesReservadas}</TableRowColumn>
                <TableRowColumn style={styles.row}>{row.horario}</TableRowColumn>
                <TableRowColumn style={styles.row}></TableRowColumn>
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
