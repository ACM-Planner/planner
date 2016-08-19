import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ScheduleTable from './ScheduleTable'

import './style.css';

export class CourseSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autocompleteSource: [],
      semester: 20162,
      campus: 1,
    };
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
      ],
    });
  }

  handleSemesterChange = (event, index, value) => this.setState({ semester: value });

  handleCampusChange = (event, index, value) => this.setState({ campus: value });

  render() {
    return (

      <div className={classnames('CourseSearch', this.props.className)} style={this.props.style}>

        <DropDownMenu value={this.state.semester} onChange={this.handleSemesterChange}>
          <MenuItem value={20162} primaryText="2016-2" />
          <MenuItem value={20161} primaryText="2016-1" />
          <MenuItem value={20152} primaryText="2015-2" />
          <MenuItem value={20151} primaryText="2015-1" />
        </DropDownMenu>

        <AutoComplete
          hintText="Ingresa tu curso"
          dataSource={this.state.autocompleteSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          />

        <div>
          <SelectField value={this.state.campus} onChange={this.handleCampusChange}>
            <MenuItem value={1} primaryText="San Joaquin" />
            <MenuItem value={2} primaryText="Campus Oriente" />
            <MenuItem value={3} primaryText="Casa Central" />
            <MenuItem value={5} primaryText="Lo Contador" />
            <MenuItem value={4} primaryText="Villarrica" />
          </SelectField>
        </div>


        <div className={classnames('ScheduleFilterContainer', this.props.className)} style={this.props.style}>
          <ScheduleTable />
        </div>

        <RaisedButton label="Buscar" fullWidth={true} />

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

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
