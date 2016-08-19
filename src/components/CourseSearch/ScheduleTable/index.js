import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

const ScheduleTableRow = (props) => {
  return (
    <tr>
      <td> 1 </td>
      <td className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <td className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <td className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <td className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <td className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <td className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
    </tr>
  );
}

const ScheduleTableTopRow = (props) => {
  return (
    <tr>
      <th />
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}> Lunes </th>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}> Martes </th>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}> Miercoles </th>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}> Jueves </th>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}> Viernes </th>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}> Sabado </th>
    </tr>
  );
}

export default class ScheduleTable extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className={classnames('SchedulerGrid', this.props.className)} style={this.props.style}>
        <ScheduleTableTopRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
      </table>
    )
  }
}
