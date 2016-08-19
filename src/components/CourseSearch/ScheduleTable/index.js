import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

class ScheduleTableRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: [false, false, false, false, false, false],
    };
  }

  getItemStyle(position) {
    if (this.state.selected[position]) {
      return classnames('ScheduleFilterItemSelected', this.props.className);
    } else {
      return classnames('ScheduleFilterItem', this.props.className);
    }
  }

  handleCellClick(day) {
    var selected = this.state.selected.slice();
    selected[day] = !selected[day];
    this.setState({ selected: selected} );
    this.props.onClick(day);
  }

  render() {
    return (
      <tr>
        <td> {this.props.module} </td>
        <td onClick={() => this.handleCellClick(0)} className={this.getItemStyle(0)} style={this.props.style}/>
        <td onClick={() => this.handleCellClick(1)} className={this.getItemStyle(1)} style={this.props.style}/>
        <td onClick={() => this.handleCellClick(2)} className={this.getItemStyle(2)} style={this.props.style}/>
        <td onClick={() => this.handleCellClick(3)} className={this.getItemStyle(3)} style={this.props.style}/>
        <td onClick={() => this.handleCellClick(4)} className={this.getItemStyle(4)} style={this.props.style}/>
        <td onClick={() => this.handleCellClick(5)} className={this.getItemStyle(5)} style={this.props.style}/>
      </tr>
    );
  }

}

const ScheduleTableTopRow = (props) => {
  return (
    <tr>
      <th />
      <th className={'ScheduleFilterItem'} style={props.style}> Lunes </th>
      <th className={'ScheduleFilterItem'} style={props.style}> Martes </th>
      <th className={'ScheduleFilterItem'} style={props.style}> Miercoles </th>
      <th className={'ScheduleFilterItem'} style={props.style}> Jueves </th>
      <th className={'ScheduleFilterItem'} style={props.style}> Viernes </th>
      <th className={'ScheduleFilterItem'} style={props.style}> Sabado </th>
    </tr>
  );
}

export default class ScheduleTable extends Component {

  render() {
    return (
      <table className={classnames('SchedulerGrid', this.props.className)} style={this.props.style}>
        <ScheduleTableTopRow props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 1)} module={1} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 2)} module={2} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 3)} module={3} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 4)} module={4} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 5)} module={5} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 6)} module={6} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 7)} module={7} props={this.props}/>
        <ScheduleTableRow onClick={(day) => this.props.onClick(day, 8)} module={8} props={this.props}/>
      </table>
    )
  }
}
