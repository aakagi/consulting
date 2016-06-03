import React, { Component } from 'react'
import {Grid, Row, Col, Modal, Button}  from 'react-bootstrap';
import classNames from 'classnames';
import s from './IntroBlog.scss';


export default class IntroBlog extends Component {
  render() {
    return(
      <Grid fluid={true} componentClass={'section'} className={classNames(s.intro_blog_field, s.intro_container)} id="consulting">
        <Row>
          <div className={s.title}>
            Thing
          </div>
        </Row>

      </Grid>
    )
  }
}
