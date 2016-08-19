import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { ActionButtons } from './ActionButtons'
import { Tabs, Tab } from 'material-ui/Tabs';


import './style.css';

export class Schedulers extends Component {

  render() {
    return (
      <div className={classnames('Schedulers', this.props.className)} style={this.props.style}>
        <ScheduleTabs />
        <ActionButtons />
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedulers);



class ScheduleTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      tabs: ['Horario 1', 'Horario 2'],
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  addTab(e) {
    const tabs = [...this.state.tabs]
    tabs.push('NewTab')
    this.setState({
      tabs: tabs
    })
  }

  deleteTab(e) {
    //TODO: delete a tab
  }

  render() {

    const tabs = this.state.tabs.map((tab, i) => (<Tab key={i} label={tab} value={i} />))
    const grids = this.state.tabs.map((tab, i) => (<ScheduleGrid key={i}/>))

    return (
      <div>
       <button type="button" onClick={this.addTab.bind(this)}> ADD (FIX)</button>
       <Tabs onChange={this.handleChange} value={this.state.slideIndex} >
         { tabs }
       </Tabs>

       <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
         { grids }
        </SwipeableViews>
      </div>
      );
  }
}


class ScheduleGrid extends Component {

  render() {
    return (
      <table className={classnames('Schedulers-table',this.props.className)} style={this.props.style}>
      <thead>

      </thead>
      <tbody>
        { Array(8).fill(null).map((_, module) => <ScheduleRow module={module} />) }
      </tbody>
    </table>)
  }
}

class ScheduleRow extends Component {

  render() {
    const makeNode = day => <ScheduleNode {...{
        day: day + 1,
        module: this.props.module + 1,
        schedule: []
      }}/>

    return (
      <tr>
        { Array(6).fill(null).map(makeNode) }
      </tr>
    )
  }
}


class ScheduleNode extends Component {

  render() {
    return (
      <td>
      Block
    </td>)
  }
}
