// Core Dependencies
import React, { Component } from 'react'
import classNames from 'classnames';
// * Also requires bootstrap

// Custom Dependencies
import s from './Navbar.scss'
import NavButton from './NavButton/NavButton'

// Third Party Dependencies
import easing from 'jquery-easing'


export default class Navbar extends Component {
  componentDidMount() {
    // Creates a sexy nav collapsing effect
    function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass(s.top_nav_collapse);
      } else {
        $(".navbar-fixed-top").removeClass(s.top_nav_collapse);
      }
    }
    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);

    // jQuery page scrolling - requires jQuery Easing plugin
    $(function() {
      $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    });
  }


  render() {
    return (
      <nav className={classNames(s.navbar_custom, 'navbar', 'navbar-fixed-top')} role="navigation">
        <div className="container">

          <div className="navbar-header">
            <button type="button" className={classNames(s.navbar_toggle, 'navbar-toggle')} data-toggle="collapse" data-target=".navbar-main-collapse">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <span className={s.light}>Akagi</span> Co.
            </a>
          </div>

          <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul className={classNames('nav', s.nav, 'navbar-nav')}>
              <li className="hidden">
                <a href="#page-top"></a>
              </li>

              <li>
                <a className="page-scroll" href="">Blog</a>
              </li>
              <li>
                <a className="page-scroll" href="">Meeting</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
