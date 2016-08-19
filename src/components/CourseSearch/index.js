import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';

import './style.css';

export class CourseSearch extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }
  
  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value 
      ],
    });
  };
    
  render() {
    return (
      <div className={classnames('CourseSearch', this.props.className)} style={this.props.style}>
        
        <AutoComplete
          hintText="Ingresa tu curso"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
          />
          
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
