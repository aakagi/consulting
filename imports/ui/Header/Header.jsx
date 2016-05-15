// Core Dependencies
import React, { Component } from 'react'
import classNames from 'classnames';
import {Grid, Row, Col} from 'react-bootstrap';

import s from './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <Grid fluid={true} componentClass={'header'} className={s.black_bg} id="page-top">
        <Row>
          <iframe className={s.video_container}
            src="http://www.youtube.com/embed/e5XTyXMy9B4?autoplay=0">
          </iframe>
        </Row>


        {/* <YoutubeVideo /> */}
        
        {/* <NextSectionArrow /> */}
        
      </Grid>
    )
  }
}