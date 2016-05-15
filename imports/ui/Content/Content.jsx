import React, { Component } from 'react'
import {Grid, Row, Col}  from 'react-bootstrap';

import s from './Content.scss'

export default class Content extends Component {

  render() {
    return (
      <Grid fluid={true} componentClass={'section'} className={s.intro_container} id="intro">
        <h1 className={s.title}>
          Custom Automation Programming
        </h1>
        <p style={{height: 1000 + 'px'}}>

        </p>
      </Grid>
    )
  }

}