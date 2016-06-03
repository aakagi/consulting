import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { render } from 'react-dom';
import {mount} from 'react-mounter';

import App from '../imports/ui/App';

import Consulting from './ui/Consulting/Consulting';
import MeetingSection from './ui/MeetingSection/MeetingSection';
import IntroBlog from './ui/IntroBlog/IntroBlog';

import BookingCalendar from './ui/BookingCalendar/BookingCalendar';

FlowRouter.route('/', {
  action() {
    mount(App, {
      yield: (
        <div>
          <Consulting />
        </div>
      )
    });
          // <MeetingSection />
          // <IntroBlog />
  }
});

FlowRouter.route('/meet', {
  action() {
    mount(App, {
      yield: <BookingCalendar />,
      scrollToYield: true
    });
  }
});