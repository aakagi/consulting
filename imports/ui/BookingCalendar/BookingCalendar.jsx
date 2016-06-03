import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor';

import s from './BookingCalendar.scss';

export default class BookingCalendar extends Component {
  componentDidMount() {
    var widgetFunc = function() {
      var widget = new TimekitBooking();
      widget.init({
        name: 'Alex Akagi',
        email:    'alexanderakagi@gmail.com',
        apiToken: 'u00J838jIGfHuDaamBOtTC1NMjhf10Td',
        calendar: 'e56f5664-e2f4-4a46-8091-1c940c5db3c4',
        bookingGraph: "confirm_decline",
        timekitFindTime: {
          start: '2 days',
          future: '2 weeks',
          length: '30 min',
          ignore_all_day_events: true,
          filters: {
            and: [
              {
                exclude_weekend: { }
              }
            ],
            or: [
              {
                specific_time: {
                  start: '12:00',
                  end: '12:30'
                }
              },
              {
                specific_time: {
                  start: '13:00',
                  end: '13:30'
                }
              },
              {
                specific_time: {
                  start: '14:00',
                  end: '14:30'
                }
              },
              {
                specific_time: {
                  start: '15:00',
                  end: '15:30'
                }
              },
              {
                specific_time: {
                  start: '16:00',
                  end: '16:30'
                }
              },
              {
                specific_time: {
                  start: '17:00',
                  end: '17:30'
                }
              },
              {
                specific_time: {
                  start: '18:00',
                  end: '18:30'
                }
              },
              {
                specific_time: {
                  start: '19:00',
                  end: '19:30'
                }
              }
            ]
          }
        },      
        localization:             {
          strings: {
            submitText: "Submit",
            successMessageTitle: "Request Sent!",
            successMessageBody: "I'm looking into your request now, I'll get back to you ASAP!"
          }
        },
        // FullCalendar options
        fullCalendar:             {
          scrollTime: '10:00:00'
        },
        bookingFields: {
          name: {
            placeholder: 'Name',
            prefilled: false,
            locked: false
          },
          comment: {
            enabled: true,
            placeholder: 'Add a Note',
            prefilled: false,
            required: false,
            locked: false
          },
          phone: {
            enabled: false,
            placeholder: 'Phone Number',
            prefilled: false,
            required: false,
            locked: false
          }
        }
      });
    }
    var bookingjs = $('#bookingjs');
    var rawHTML = '<script type="text/javascript" src="http://cdn.timekit.io/booking-js/v1/booking.min.js"></script>'
    var waitHTML = '' // Variable only gets called once external js is loaded
                  +'<script type="text/javascript">'
                  + '(' +widgetFunc + ')()' // Widget inline defines and calls widgetFunc
                  +'</script>'
  
    bookingjs.append(rawHTML);

    var testInterval = Meteor.setInterval(function() {
      if(TimekitBooking) {
        bookingjs.append(waitHTML);
        Meteor.clearInterval(testInterval);
      }
    }, 500);
  }
  render() {
    return (
      <div className={s.calendar}>
        <div id="bookingjs"></div>
      </div>
    )
  }

}
