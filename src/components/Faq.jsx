import React, { Component } from 'react';
import $ from 'jquery';

class Faq extends React.Component {

      render() {
            $(document).ready(function () {
                  // Card One
                  // $('#card-one').mouseenter(function () {
                  //       $(this).css("cursor", "pointer");
                  //       $(this).animate({ width: "250px", height: "300px", top: "-25px", position: "absolute" }, 'medium');
                  // });
                  // $('#card-one').mouseleave(function () {
                  //       $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'medium')
                  // });
                  // // Card Two
                  // $('#card-two').mouseenter(function () {
                  //       $(this).css("cursor", "pointer");
                  //       $(this).animate({ width: "250px", height: "300px", top: "-25px", position: "absolute" }, 'medium');
                  // });
                  // $('#card-two').mouseleave(function () {
                  //       $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'medium')
                  // });
                  // // Card Three
                  // $('#card-three').mouseenter(function () {
                  //       $(this).css("cursor", "pointer");
                  //       $(this).animate({ width: "250px", height: "300px", top: "-25px", position: "absolute" }, 'medium');
                  // });
                  // $('#card-three').mouseleave(function () {
                  //       $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'medium')
                  // });
                  // // Card Four
                  // $('#card-four').mouseenter(function () {
                  //       $(this).css("cursor", "pointer");
                  //       $(this).animate({ width: "250px", height: "300px", top: "-25px", position: "absolute" }, 'medium');
                  // });
                  // $('#card-four').mouseleave(function () {
                  //       $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'medium')
                  // });
                  // // CardFive
                  // $('#card-five').mouseenter(function () {
                  //       $(this).css("cursor", "pointer");
                  //       $(this).animate({ width: "250px", height: "300px", top: "-25px", position: "absolute" }, 'medium');
                  // });
                  // $('#card-five').mouseleave(function () {
                  //       $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'medium')
                  // });


                  $('.card').mouseover(function () {

                        $(this).css("cursor", "pointer");
                        // $(this).animate({ width: "250px", height: "300px", top: "-25px"}, 'medium');
                        $(this).animate({ width: "250px", height: "300px", top: "-25px"}, 'fast');
                  });
                  $('.card').mouseleave(function () {
                        // $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'slow')
                        $(this).animate({ width: "220px", height: "250px", top: "0px", position: "absolute" }, 'fast')
                  });
            })
            return (
                  <div className="faq">
                        <div className="content">
                              <div className="class-row-wrapper">
                                    <div className="row">
                                          <div className="col">
                                                <div className="card style" id="card-one">
                                                    <h2 className="cardContainer">Where Is The Hackathon?</h2>
                                                </div>
                                          </div>
                                          <div className="col">
                                                <div className="card style" id="card-two">
                                                  <h2 className="cardContainer">Is It Free To Join?</h2>
                                                </div>
                                          </div>
                                          <div className="col">
                                                <div className="card style" id="card-three">
                                                  <h2 className="cardContainer">Do You Need Coding Experience?</h2>
                                                </div>
                                          </div>
                                          <div className="col">
                                                <div className="card style" id="card-four">
                                                  <h2 className="cardContainer">What Should I Bring?</h2>
                                                </div>
                                          </div>
                                          <div className="col">
                                                <div className="card style" id="card-five">
                                                  <h2 className="cardContainer">What If I Don't Have A Team?</h2>
                                                </div>
                                          </div>
                                    </div>
                              </div >
                        </div >
                  </div>
            );
      }
}

export default Faq;



{/* <div class="faq-section">
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
      </div> */}





// CSS Boxes
{/* <div className="row">
                                    <div className="col">
                                          <div className="card" >
                                                <img className="card-img-top" src="" alt="Card image " />
                                                <div className="card-body">
                                                      <h4 className="card-title">John Doe</h4>
                                                      <p className="card-text">Some example text.</p>
                                                      <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col">
                                          <div className="card" >
                                                <img className="card-img-top" src="" alt="Card image " />
                                                <div className="card-body">
                                                      <h4 className="card-title">John Doe</h4>
                                                      <p className="card-text">Some example text.</p>
                                                      <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col">
                                          <div className="card" >
                                                <img className="card-img-top" src="" alt="Card image " />
                                                <div className="card-body">
                                                      <h4 className="card-title">John Doe</h4>
                                                      <p className="card-text">Some example text.</p>
                                                      <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col">
                                          <div className="card" >
                                                <img className="card-img-top" src="" alt="Card image " />
                                                <div className="card-body">
                                                      <h4 className="card-title">John Doe</h4>
                                                      <p className="card-text">Some example text.</p>
                                                      <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col">
                                          <div className="card" >
                                                <img className="card-img-top" src="" alt="Card image " />
                                                <div className="card-body">
                                                      <h4 className="card-title">John Doe</h4>
                                                      <p className="card-text">Some example text.</p>
                                                      <a href="#" className="btn btn-primary">See Profile</a>
                                                </div>
                                          </div>
                                    </div>
                              </div> */}
