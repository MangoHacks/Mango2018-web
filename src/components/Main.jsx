import React, { Component } from 'react';

import logo from "../public/img/mangos/green-mango.svg"

 class Main extends React.Component {
   
  render() {
    return (
      <div>
        <div className="macbook">
          <div className="hero">
            <img className="mango" src={logo} alt="mangologo"/>
              <h1 className="innovate">Innovate.</h1>
              </div>
          </div>
          <div className=" hero">
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
  
            <div className="orange-gradient content">
                  <header> What is <br></br>a Hackathon?</header>
                  <p>MangoHacks is a chance to meet new people, learn something, make something, dream along, and have fun.</p>
                  <p>Everyone is welcomed - from the most experienced hackers, designers, and builders to the thinkers and the curious who have never heard of a hackathon. Regardless of your experience, there is something for you at MangoHacks.</p>
                  <p> We’d love for you to come learn something new, take the things you love (sports, art, traveling, dogs!) or care about (poverty, sea level rise, hunger) and combine them with techonology to make something different, something cool, or something to improve the world.</p>
                  <p>It'll be sweet. We Promise.</p>
              </div>

              <div className="content">
                     <header>FAQ</header>
                     <div className="faq">
                            <div className="content-sm">
                                  <h4>When and where?</h4>
                                  <p>MangoHacks ’17 will take place at Florida International University’s PG6 Tech Station from February 24th to 26th. Get Directions</p>
                            </div>
                            <div className="content-sm">
                                  <h4>How much does it cost?</h4>
                                  <p>ZERO! FREE! Nada. Zip. $0. Everything we provide will be free, so you only need to worry about what you’ll achieve during the weekend.</p>
                            </div>
                            <div className="content-sm">
                                  <h4>How long is it?</h4>
                                  <p>People will arrive between 6pm and 8pm on Friday, February 24th. Hacking will start at 10pm on Friday and go until 8am on Sunday, February 26th. Closing ceremony will end by 1pm on Sunday</p>
                            </div>

                            <div className="content-sm">
                                  <h4>Who can come?</h4>
                                  <p>Anyone who is currently a college student or who graduated in the past year is welcome to participate. If it has been a while since you were a student you can 
                                    still participate as a mentor for the attendees. Sign up to be a mentor</p>
                            </div>
                            <div className="content-sm">
                                  <h4>Food? Oh yeah</h4>
                                  <p>Lots of it. Free, too! We’ll make you feel right at home. Enough food to keep you going for the entire 36 hours and then some. Caffeine, energy drinks,
                                     snacks and all. We’ve got you. If you have special needs, it’s all good too. Did we mention there’ll be lots of food?</p>
                            </div>
                            <div className="content-sm">
                                  <h4>How much experience do I need?</h4>
                                  <p>Don’t be afraid if you don’t think you have enough experience, a team or an idea. A hackathon is a great place for learning. We’ll have great mentors and tools to help you with development, 
                                    ideas, and everything in between as well as tons of workshops where you can pick up all kinds of skills.</p>
                            </div>
                            <div className="content-sm">
                                  <h4>What do I need to bring?</h4>
                                  <p>You’ll need an ID and the stuff you’ll need throughout the weekend. Laptop, chargers, phone, the basics. You’ll probably also want to bring some basic hygiene products (toothbrush/toothpase, 
                                    deodorant, a change of clothes) and anything to keep you fresh through the weekend. A sleeping bag might be cool, too, if you plan on getting some sleep.</p>
                            </div>
                            <div className="content-sm">
                                  <h4>What’s the deal with teams?</h4>
                                  <p>It’s no biggie. You can hack solo, but the more the merrier. You can join a team of up to four people. You don’t need to have a team ready before the event - there will be amazing people who you can join at the event. If you have some friends in mind though, you’re more than welcome to stay together.</p>
                            </div>
                            <div className="content-sm">
                                  <h4>Can I submit an older project?</h4>
                                  <p>We want MangoHacks to be a fair opportunity for everyone, so we ask that no code that will be part of a project is written before the event. You’re are welcome to come with an idea and a plan, though. Plus, making something completely new is pretty sweet.</p>
                            </div>
                            <div className="content-sm">
                                  <h4>How do I get there?</h4>
                                  <p>Driving, Flying, Swimming… however you can! We’d love to have anyone who really wants to come, and if you need help figuring out a way that works, let us know at team@mangohacks.com.
                                    Unfortunately, we will not be able provide individual travel reimbursements this year.</p>
                            </div>
                     </div>
                </div>
      </div>
      
    );
  }
}

export default Main;