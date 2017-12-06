// Dependencies
import React, { Component } from 'react';

import $ from 'jquery';

// Mango's
import imaginemango from "../public/img/mangos/imagine-mango.svg";
import innovatemango from "../public/img/mangos/innovate-mango.svg";
import inspiremango from "../public/img/mangos/inspire-mango.svg";

// Hardware
import macbook from "../public/img/misc/macbook.svg";
import motherboard from "../public/img/misc/motherboard.png";
import submissions from "../public/img/misc/Submissions.svg";


// CSS
import pill from '../public/css/pill.css';

// Images
import vr from '../public/img/misc/vr2.png';
import play from '../public/img/placeholder.jpg';

// Components
import Faq from './Faq';
import Footer from './Footer';
import Prospectus from './Prospectus';
import Team from './Team';
import Sponsors from './Sponsors';
import WhatLike from './WhatLike';
import style from '../public/css/style.css';

//Anime
import Anime from 'react-anime'

var mango;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    window.location = "/Prospectus";
  }

  render() {
    // Cookies Functions
    function setCookie(name, value, expires, path, domain, secure) {
      var curCookie = name + "=" + escape(value) +
          ((expires) ? "; expires=" + expires.toGMTString() : "") +
          ((path) ? "; path=" + path : "") +
          ((domain) ? "; domain=" + domain : "") +
          ((secure) ? "; secure" : "");
      document.cookie = curCookie;
    }

    function getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      } else
        begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1)
        end = dc.length;
      return unescape(dc.substring(begin + prefix.length, end));
    }

    function deleteCookie(name, path, domain) {
      if (getCookie(name)) {
        document.cookie = name + "=" +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        "; expires=Thu, 01-Jan-70 00:00:01 GMT";
      }
    }

    function fixDate(date) {
      var base = new Date(0);
      var skew = base.getTime();
      if (skew > 0)
        date.setTime(date.getTime() - skew);
    }

    // Visit Counter
    var visits = getCookie("counter");
    if (!visits) {
      visits = 1;
    } else {
      visits = parseInt(visits) + 1;
    }
    setCookie("counter", visits);

    // Jquery
    $(document).ready(function() {
      var liststyle = ['inspire','imagine','innovate'];
      var style = liststyle[(visits + 3) % 3];

      if (style == 'imagine') {
        // BG Styles
        $('.style').css('background', 'linear-gradient(to top right, #FE6BBE, #FAD865');
        $('.style').css('color', '#000');
        $('.footer-text').css('color', '#000');
        $('.fa-facebook').css('color', '#000');
        $('.fa-twitter').css('color', '#000');
        $('.fa-slack').css('color', '#000');
        $('.modal-btn').css('color', '#000');
        $('.modal-btn').css('border', '1px solid #000');
        $('.modal-btn').hover(function (e) {
          $(this).css('background', e.type === 'mouseenter' ? "#000" : 'transparent');
          $(this).css('color', e.type === 'mouseenter' ? '#fff' : '#000');
        });

        // Text Style
        $('.title').text('Imagine.');
        $('.title').css('color', '#C8F020')

        // Logo Style
        $('.mango').attr('src', imaginemango)

        //  BG Picture
        $('.bg-hero').attr('src', macbook)
        $('.bg-hero').removeClass('bg-hero').addClass('macbook');

      }

      if (style == 'inspire') {
        $('.style').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('.style').css('color', '#000');
        $('.footer-text').css('color', '#000');
        $('.fa-facebook').css('color', '#000');
        $('.fa-twitter').css('color', '#000');
        $('.fa-slack').css('color', '#000');
        $('.modal-btn').css('color', '#000');
        $('.modal-btn').css('border', '1px solid #000');
        $('.modal-btn').hover(function (e) {
          $(this).css('background', e.type === 'mouseenter' ? "#000" : 'transparent');
          $(this).css('color', e.type === 'mouseenter' ? '#fff' : '#000');
        });


        // Text Style
        $(".title").text('Inspire.');
        $('.title').css('color', '#23F5E9');

        // Logo Style
        $('.mango').attr('src', inspiremango);

        //  BG Picture
        $('.bg-hero').attr('src', submissions);
        $('.bg-hero').removeClass('bg-hero').addClass('submissions');
      }

      if (style == 'innovate') {
        $('.style').css('background', 'linear-gradient(233deg, #6800ff, #f52376');
        $('.style').css('color', '#fff');
        $('.modal-btn').css('color', '#fff');
        $('.modal-btn').css('border', '1px solid #fff');
        $('.modal-btn').hover(function (e) {
          $(this).css('background', e.type === 'mouseenter' ? "#fff" : 'transparent');
          $(this).css('color', e.type === 'mouseenter' ? '#000' : 'white');
        });


        // Text Style
        $('.title').text('Innovate.');
        $('.title').css('color', '#4652F7');


        // Logo Style
        $('.mango').attr('src', innovatemango);

        //  BG Picture
        $('.bg-hero').attr('src', motherboard);
        $('.bg-hero').removeClass('bg-hero').addClass('motherboard');

      }

      $('.video__placeholder, .video__button').on('click', function() {
        if ( !$('#video-player').length ) {
          var video = '<iframe id="video-player" src="' + $('.video__placeholder').attr('data-video') + '" frameborder="0" allowfullscreen wmode="opaque"></iframe>';
          $(video).insertAfter( $('.video__placeholder') );
          $('.video__button').addClass('is-playing');
        } else {
          $('.video__button').removeClass('is-playing');
          $('#video-player').remove();
        }
      });

    });

    $(document).ready(function () { $("div").hide().fadeIn(1000); });

    return (
      <div class="">
        <div className="pill-move">
          <div className="pill" id="pill-1"></div>
           <div className="pill" id="pill-2"></div>
           <div className="pill" id="pill-3"></div>
           <div className="pill" id="pill-4"></div>
        </div>

        <div className="pill-move top-pills">
           <div className="pill" id="pill-5"></div>
           <div className="pill" id="pill-6"></div>
           <div className="pill" id="pill-7"></div>
           <div className="pill" id="pill-8"></div>
        </div>

        <Anime opacity={[0,1]}>
        <div className="page">
          <div className="hero">
            <div className="top-hero">
            <img className="mango" src={imaginemango} alt="mangologo" />
            <h1 className="title"></h1>
            <img className="bg-hero" src={motherboard} alt="bg-picture" />
            </div>
          </div>
        </div>
        </Anime>


        <div className="hero">
          <div className="content">
            <h2>2018</h2>
            <header>MangoHacks</header>
            <p className="slogan">"A celebration with Hackathon elements"</p>
            <div className="info-2">
              <p>MangoHacks is a place for discovery.</p>
              <p>Its a 36 hour hackathon that encourages learning, collaboration, growth, innovation, and fun.<br></br>
                We will welcome 350+ students from Florida and accross the country<br></br>
                with amazing mentors, and wonderful sponsors to create amazing things.</p>
              <p><i>MangoHacks is organized by students for students.</i></p>
            </div>
          </div>
        </div>

        <div className="whatis">
          <div className="content style">
            <header> What is <br></br>a Hackathon?</header>
            <p>MangoHacks is a chance to meet new people, learn something, make something, dream along, and have fun.</p>
            <p>Everyone is welcomed - from the most experienced hackers, designers, and builders to the thinkers and the curious who have never heard of a hackathon. Regardless of your experience, there is something for you at MangoHacks.</p>
            <p> We’d love for you to come learn something new, take the things you love (sports, art, traveling, dogs!) or care about (poverty, sea level rise, hunger) and combine them with techonology to make something different, something cool, or something to improve the world.</p>
            <p>It'll be sweet. We Promise.</p>
          </div>
        </div>
        {/* <img src={vr} className="vr" alt="Virtual Reality"/>    */}
        <Faq />

        <div className="whatlike">
          <div className="content style">
            <header> What is it like?</header>
            <section class="video">
            <img src={play} data-video="https://www.youtube.com/embed/iuPGCi9VEco?autoplay=1" title="Play Video" class="video__placeholder" />
            <button class="video__button"></button>
            </section>
          </div>
        </div>

        <Sponsors />
        {/* <Team /> */}

        <footer className="footer style">
          <div className="footer-link">
            <a href="https://www.facebook.com/mangohacks" className="fa fa-facebook fa-2x" aria-hidden="true"></a>
            <a href="https://www.twitter.com/mangohacks" className="fa fa-twitter fa-2x" aria-hidden="true"></a>
            <a href="https://www.twitter.com/mangohacks" className="fa fa-slack fa-2x" aria-hidden="true"></a>
          </div>
          <span className="footer-text">Made with ❤️ by MangoHacks</span>
        </footer>
      </div>

    );
    }
  }

  // <Anime easing="easeOutElastic"
  //        duration={1000}
  //        direction="alternate"
  //        loop={true}
  //        delay={(el, index) => index * 240}
  //        translateX='13rem'
  //        scale={[.75, .9]}>

  // </Anime>

export default Main;
