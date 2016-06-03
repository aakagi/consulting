import React, { Component } from 'react'
import {Grid, Row, Col}  from 'react-bootstrap';

import s from './WorkType.scss'

export default class WorkType extends Component {

  render() {
    let workName = this.props.workName || 'Work';
    return (
      <Col componentClass={'a'} xs={12} sm={6} md={4} className={s.work_type_container}>
        <div className={s.work_type}>
          <div className={s.work_img}>
            
          </div>
          <div className={s.work_name}>
            {workName}
          </div>
        </div>
      </Col>
    )
  }
}