import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './style.css';

const ScheduleTableRow = (props) => {
  return (
    <tr>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
      <th className={classnames('ScheduleFilterItem', props.className)} style={props.style}/>
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
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
        <ScheduleTableRow props={this.props}/>
      </table>
    )
  }
}
