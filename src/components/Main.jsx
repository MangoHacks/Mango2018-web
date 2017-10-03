import React, { Component } from 'react';

import logo from "../public/img/mangos/green-mango.svg"

 class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="macbook">
          <div className="hero">
            <img className="mango" src={logo} alt="mangologo"/>
              <h1>Innovate.</h1>
              <div className="header-info">
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
          </div>

  
            <div className="orange-gradient content">
                  <header> What is <br></br>a Hackathon?</header>
                  <p>MangoHacks is a chance to meet new people, learn something, make something, dream along, and have fun.</p>
                  <p>Everyone is welcomed - from the most experienced hackers, designers, and builders to the thinkers and the curious who have never heard of a hackathon. Regardless of your experience, there is something for you at MangoHacks.</p>
                  <p> We’d love for you to come learn something new, take the things you love (sports, art, traveling, dogs!) or care about (poverty, sea level rise, hunger) and combine them with techonology to make something different, something cool, or something to improve the world.</p>
                  <p>It'll be sweet. We Promise.</p>
              </div>

              <div className="content">
               <p>something lit here</p>
              </div>
      </div>
    );
  }
}

export default Main;