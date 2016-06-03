// Core Dependencies
import React, { Component } from 'react'
import classNames from 'classnames';
import {Grid, Row, Col, Button, Modal} from 'react-bootstrap';

import s from './Header.scss';

import BookingCalendar from '../BookingCalendar/BookingCalendar'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    let closeModal = () => this.setState({ showModal: false });
    return (
      <Grid fluid={true} componentClass={'header'} className={s.black_bg} id="page-top">
        <Row>
          <iframe className={s.video_container}
            src="http://www.youtube.com/embed/W25ZgG33xTU?autoplay=0">
          </iframe>
        </Row>

        <Row>
          <div className={s.meeting_btn}>
            <Button bsSize="large" block={true} onClick={()=>this.setState({ showModal: true })}>
              Let&#39;s Meet!
            </Button>
            <Modal show={this.state.showModal} onHide={closeModal} bsSize="large">
              <BookingCalendar />
            </Modal>
          </div>
        </Row>
        
      </Grid>
    )
  }
}