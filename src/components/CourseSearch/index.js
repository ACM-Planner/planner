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

const semesters = [
  <MenuItem value={20162} primaryText='2016-2' />,
  <MenuItem value={20161} primaryText='2016-1' />,
  <MenuItem value={20152} primaryText='2015-2' />,
  <MenuItem value={20151} primaryText='2015-1' />
];

const schools = [
  <MenuItem value={1} primaryText='Ingenieria' />,
  <MenuItem value={2} primaryText='Enfermeria' />,
  <MenuItem value={3} primaryText='Ingenieria Comercial' />,
  <MenuItem value={4} primaryText='Psicologia' />,
  <MenuItem value={5} primaryText='Construccion Civil' />
];

const campuses = [
  <MenuItem value={1} primaryText='San Joaquin' />,
  <MenuItem value={2} primaryText='Campus Oriente' />,
  <MenuItem value={3} primaryText='Casa Central' />,
  <MenuItem value={4} primaryText='Villarrica' />,
  <MenuItem value={5} primaryText='Lo Contador' />
];

const categories = [
  <MenuItem value={1} primaryText='OFG' />,
  <MenuItem value={2} primaryText='OPR' />
];

export class CourseSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autocompleteSource: [],
      semester: 20162,
      campus: 1,
      school: 1,
      category: 1,
    };
  }

  handleUpdateSearchInput = (value) => {
    this.setState({
      autocompleteSource: [
        value,
        value + value,
      ],
    });
  }

  handleSemesterChange = (event, index, value) => this.setState({ semester: value });

  handleCampusChange = (event, index, value) => this.setState({ campus: value });

  handleSchoolChange = (event, index, value) => this.setState({ school: value });

  handleCategoryChange = (event, index, value) => this.setState({ category: value });

  render() {
    return (

      <div className={classnames('CourseSearch', this.props.className)} style={this.props.style}>

        <DropDownMenu value={this.state.semester} onChange={this.handleSemesterChange}>
          {semesters}
        </DropDownMenu>

        <AutoComplete
          hintText='Ingresa tu curso'
          dataSource={this.state.autocompleteSource}
          onUpdateInput={this.handleUpdateSearchInput}
          fullWidth={true}
        />

        <div>
          <SelectField autoWidth={false} value={this.state.campus} onChange={this.handleCampusChange}>
            {campuses}
          </SelectField>
        </div>
        <div>
          <SelectField autoWidth={false} value={this.state.school} onChange={this.handleSchoolChange}>
            {schools}
          </SelectField>
        </div>
        <div>
          <SelectField autoWidth={false} value={this.state.category} onChange={this.handleCategoryChange}>
            {categories}
          </SelectField>
        </div>

        <hr/>
        <hr/>
        <hr/>

        <div className={classnames('ScheduleFilterContainer', this.props.className)} style={this.props.style}>
          <ScheduleTable />
        </div>

        <RaisedButton label='Buscar' fullWidth={true} />

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
