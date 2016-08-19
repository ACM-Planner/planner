import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {Icon} from 'react-fa';
import Circle from './circle'

import './style.css'

export default class Course extends Component {
  constructor(props){
      super(props);
      this.state = {
        isHidden: true
      }
  }
  update(e){
    this.setState({
      isHidden: !this.state.isHidden
    })
    this.props.hiddenItem()
  }
  render() {
      return (
        <div className={classnames('Course', this.props.className)} style={this.props.style} >
          <div className='Course-col'>
            <h3 className='Course-delete-padding' >{this.props.nrc}</h3>
          </div>
          <div className='Course-col'>
            <Circle radius={10} color={this.props.color} onClick={this.props.changeColor}/>
          </div>
          <div className='Course-col' >
            <small>{this.props.initial + ' - ' + this.props.teacher}</small>
            <h4 className='Course-delete-padding' >{this.props.courseName}</h4>
            <div className = 'Course-row' >
              <Circle radius={5} color='orange' />
              <small className='Course-with-margin'> {'CAT: ' +  this.props.classroom }</small>
            </div>
            <div className = 'Course-row' >
              <Circle radius={5} color='green' />
              <small className='Course-with-margin'> {'AYUD: ' + this.props.assitantship}</small>
            </div>
          </div>
          <div className='Course-col Course-left-padding'>
            <Icon size='2x' name={this.state.isHidden ? 'eye' : 'eye-slash'} onClick={this.update.bind(this)}/>
          </div>
          <div className='Course-col'>
            <Icon size='2x' name='remove' onClick={this.props.removeItem}/>
          </div>
        </div>
      )
  }
}

/*
Ejemplo Uso
import Course from './Components/course'

export class Curriculum extends Component {
  constructor(props){
    super(props);
    //this.update = this.update.bind(this);
    this.state = {
      color: "yellow"
    }
  }
  update(){
    console.log("Update");
    this.setState({
      color: "green"
    })
  }
  hidden(){
    console.log("Hidden");
    this.setState({
      color: "blue"
    })
  }
  remove(){
    console.log("Remove");
    this.setState({
      color: "purple"
    })
  }
  render() {
    return (
      <div className={classnames('Curriculum', this.props.className)} style={this.props.style}>
        <Course nrc="123221"
                initial="IIC2233"
                courseName='Programación Avanzado'
                teacher= 'Cristian Ruiz'
                classroom='BC21'
                assitantship='J Pinto'
                changeColor={this.update.bind(this)}
                hiddenItem={this.hidden.bind(this)}
                removeItem={this.remove.bind(this)}
                color ={this.state.color}/>
        <br/>
      </div>
    );
  }
}
*/
