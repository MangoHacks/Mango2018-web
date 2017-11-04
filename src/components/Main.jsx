// Dependencies
import React, { Component } from 'react';

import $ from'jquery';

import logo from "../public/img/mangos/green-mango.svg";

// CSS
import pill from '../public/css/pill.css';

// Images
import vr from '../public/img/misc/vr2.png';

// Components
import Faq from './Faq';
import Footer from './Footer';
import Prospectus from './Prospectus';
import Team from './Team';
import Sponsors from './Sponsors';
import SignupModal from './SignupModal';
import WhatLike from './WhatLike';


class Main extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

 _onButtonClick() {
  window.location = "/Prospectus";
  }

  render() {
    // Jquery
    $(document).ready(function() {
      var colors = ["linear-gradient(233deg, #ffc400, #c1f523)","linear-gradient(233deg, #6800ff, #f52376)", "linear-gradient(233deg, #efff92, #d2fcf9)"];
      var rand = Math.floor(Math.random() * colors.length);
      $('.change').css("background", colors[rand]);
  });

  $(document).ready(function(){$("div").hide().fadeIn(1000);});

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

        <div className="macbook">
          <div className="hero">
            <img className="mango" src={logo} alt="mangologo"/>
              <h1 className="innovate">Imagine.</h1>
              </div>
          </div>
          <div className="hero">
            <div className="content">
                  <h2>2018</h2>
                  <header>MangoHacks</header>
                  <p className="slogan">"A celebration with Hackathon elements"</p>
                  <div className="info-2">
                      <p>MangoHacks is a place for discovery.</p>
                      <p>Its a 36 hour hackathon that encourages learning, collaboration, growth, innovation, and fun.<br></br>
                        We will welcome 250+ students from Florida and accross the country<br></br>
                        with amazing mentors, and wonderful sponsors to create amazing things.
                      </p>
                      <p><i>MangoHacks is organized by students for students.</i></p>
                   </div>
            </div>
          </div>
  
          <div className="whatis">
              <div className="content change">
                      <header> What is <br></br>a Hackathon?</header>
                      <p>MangoHacks is a chance to meet new people, learn something, make something, dream along, and have fun.</p>
                      <p>Everyone is welcomed - from the most experienced hackers, designers, and builders to the thinkers and the curious who have never heard of a hackathon. Regardless of your experience, there is something for you at MangoHacks.</p>
                      <p> We’d love for you to come learn something new, take the things you love (sports, art, traveling, dogs!) or care about (poverty, sea level rise, hunger) and combine them with techonology to make something different, something cool, or something to improve the world.</p>
                      <p>It'll be sweet. We Promise.</p>
                      <SignupModal />                    
              </div>
          </div>
          <div className="vr-img">
            {/* <img src={vr} className="vr" alt="Virtual Reality"/>    */}
          </div>
          <Faq />
          <WhatLike />
          <Sponsors />
          <Team /> 
          <Footer />
      </div>
      
    );
  }
}

export default Main;