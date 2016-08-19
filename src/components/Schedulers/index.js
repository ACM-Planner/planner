import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';


import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';


// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';


import './style.css';

export class Schedulers extends Component {
  render() {
    return (
      <div className={classnames('Schedulers', this.props.className)} style={this.props.style}>
        <code>src/components/Schedulers/index.js</code>
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


// SwipeableViews

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      tabs: ['oneTabExamp'],
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

addTab(e){
      const tabs = this.state.tabs
      tabs.push('newtab')
      this.setState({tabs: tabs})
}

eraseTab(e){
      //erase a tab
}
//edit a tab name?


  render() {
    return (
      <div>
       <button type="button" onClick={this.addTab.bind(this)}> ADD </button>

        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
            {this.state.tabs.map((tab, i) => (
                  <Tab label={tab} value={i} />
            ))}
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >

        {this.state.tabs.map((tab, i) => (
            <div >
                        <table>
                               <tr>
                                       <th>block</th>
                                       <th> block</th>
                                       <th> block</th>
                                </tr>
                               <tr>
                                       <td>block</td>
                                       <td> block</td>
                                       <td>block</td>
                               </tr>
                               <tr>
                                       <td> block</td>
                                       <td>block</td>
                                       <td>block</td>
                               </tr>
                      </table>



            </div>

        ))}

        </SwipeableViews>
      </div>
    );
  }
}



//
//
// const FloatingActionButtonExampleSimple = () => (
//   <div>
//
//     <FloatingActionButton mini={true} disabled={true}>
//       <ContentAdd />
//     </FloatingActionButton>
//   </div>
// );
//
// export default FloatingActionButtonExampleSimple;
