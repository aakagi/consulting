import React, { Component } from 'react'
import {Grid, Row, Col, Modal, Button}  from 'react-bootstrap';

import s from './Consulting.scss'

import WorkType from './WorkType/WorkType';

import BookingCalendar from '../BookingCalendar/BookingCalendar';

var scrim = function(component) {
  var scrimOn = false;
  var testFunc = function() {

  }
  if(scrimOn) {
    
  }
  <a onClick={() => this.handleClick()}>
    Schedule a Meeting
  </a>
  return (
    <ScrimFilter>
      {component}
    </ScrimFilter>
  );
}

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    let title = this.props.title || 'Web Consulting & Development';
    let closeModal = () => this.setState({ showModal: false });
    return (
      <Grid fluid={true} componentClass={'section'} className={s.blog_container} id="consulting">
        <Row className={s.blog_field}>
          <div className={s.title_field}>
            <h1 className={s.title}>{title}</h1>
            <h5 className={s.author}>By Alex Akagi</h5>
          </div>

          <div className={s.description}>

            
          <p>
          ~ Hey There ~
          </p>
          <p>
          I&#39;m Alex, nice to meet you!
          </p>
          <p>
          I guess we may not have met yet, but click <a onClick={() => this.setState({ showModal: true })}>here</a> and we&#39;ll set up a time to meet regardless! I&#39;m always up for taking 15 minutes out of my day to talk, as long as there&#39;s an opening on my calender.
          </p>
          <p>
          If you&#39;re reading this now, that means you&#39;re an early visitor, so thanks for coming! 
          </p>
          <p>
          This site still has a long way to go from here, with many more stylish components to come, but for now I&#39;m just sticking to writing out a simple blog post with <a onClick={() => this.setState({ showModal: true })}>links</a> for practicality.
          </p>
          <p>
          The purpose of this post is to describe what kinds of clients I&#39;m looking for.
          </p>
          <p>
          I&#39;m primarily looking for medium and large projects with a 3 to 9 month completion window. I&#39;m looking for ideas with high growth potential. What I&#39;m looking for isn&#39;t necessarily about how big your company is, but rather the type of client I&#39;m working with.
          </p>
          <p>
          I&#39;m looking to work with contrarians who look at the world from a unique perspective and want that to reflect in their work.
          </p>
          <p>
          Perhaps you&#39;re a retailer looking to build a highly scalable online presence. We&#39;ll work together to figure out a strategic site layout and build a robust analytics infrastructure so that you can sell your product by using data-driven marketing.
          </p>
          <p>
          Or maybe you&#39;re an ex-consultant with a brilliant startup idea and need a handful of developers to help you out. Well Meteor/Node.js and React.js are two of the hottest frameworks in Silicon Valley right now, and that&#39;s what I use. I can also recruit the rest of your dev team, plus I also have experience writing mobile apps so we can definitely work together towards hooking up our web api to a mobile interface in phase two!
          </p>
          <p>
          If you work at a major corporation and you&#39;re managing a major project with a web-based component, let&#39;s schedule a meeting and we can talk things over. I can manage your development team and create a strategically sound timeline for getting the project done.
          </p>
          <p>
          I&#39;ll put up my updated portfolio once I get the chance to, but until then, you can see my past projects on my old site <a href="http://alex.akagi.co" target="_blank">here</a>.
          </p>
          <p>
          I&#39;d also appreciate any comments or feedback on the site from you guys, and you can do so by either shooting me an email at <a href="mailto:alexanderakagi@gmail.com?Subject=Saying%20Hey%20From%20Your%20New%20Website">alexanderakagi@gmail.com</a>, or, as I&#39;ve said several times by now, let&#39;s set up a <a onClick={() => this.setState({ showModal: true })}>quick chat</a>!
          </p>
          <p>
          Thanks for stopping by, I really appreciate it.
          </p>
          </div>
        </Row>

        <Modal show={this.state.showModal} onHide={closeModal} bsSize="large">
          <BookingCalendar />
        </Modal>


      </Grid>
    )
  }

}
