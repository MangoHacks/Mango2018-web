import React, { Component } from 'react';
import $ from 'jquery';
import Modal from 'react-modal';

const modalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '15%',
        left: '15%',
        right: '15%',
        bottom: '15%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '7%',
        textalign: 'center',

      }

    }

    let modalIsOpen = false;



class Faq extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
              list: [],
              full_description: "",
              modalIsOpen: false,
              modalTitle: 'title',
              modalDesc: 'desc'
            };
            //Modals
            this.openModal = this.openModal.bind(this);
            this.afterOpenModal = this.afterOpenModal.bind(this);
            this.closeModal = this.closeModal.bind(this);
            //FAQs
            this.faqone = this.faqone.bind(this);
            this.faqtwo = this.faqtwo.bind(this);
            this.faqthree = this.faqthree.bind(this);
            this.faqfour = this.faqfour.bind(this);
            this.faqfive = this.faqfive.bind(this);

          }
      openModal() {
            this.setState({ modalIsOpen: true });
      }

      afterOpenModal() {
        // references are now sync'd and can be accessed.

      }

      closeModal() {
        this.setState({ modalIsOpen: false });
      }

      faqone(){
        this.setState({
          modalTitle: 'Where Is The Hackathon?',
          modalDesc: 'MangoHacks ’17 will take place at Florida International University’s PG6 Tech Station from February 24th to 26th. Get Directions'
        });
        this.openModal();
      }

      faqtwo(){
        this.setState({
          modalTitle: 'Is It Free To Join?',
          modalDesc: 'ZERO! FREE! Nada. Zip. $0. Everything we provide will be free, so you only need to worry about what you’ll achieve during the weekend.'
        });
        this.openModal();
      }

      faqthree(){
        this.setState({
          modalTitle: 'Do You Need Coding Experience?',
          modalDesc: 'Don’t be afraid if you don’t think you have enough experience, a team or an idea. A hackathon is a great place for learning. We’ll have great mentors and tools to help you with development, ideas, and everything in between as well as tons of workshops where you can pick up all kinds of skills.'
        });
        this.openModal();
      }

      faqfour(){
        this.setState({
          modalTitle: 'What Should I Bring?',
          modalDesc: 'You’ll need an ID and the stuff you’ll need throughout the weekend. Laptop, chargers, phone, the basics. You’ll probably also want to bring some basic hygiene products (toothbrush/toothpase, deodorant, a change of clothes) and anything to keep you fresh through the weekend. A sleeping bag might be cool, too, if you plan on getting some sleep.'
        });
        this.openModal();
      }

      faqfive(){
        this.setState({
          modalTitle: 'What If I Don\'t Have A Team?',
          modalDesc: 'It’s no biggie. You can hack solo, but the more the merrier. You can join a team of up to four people. You don’t need to have a team ready before the event - there will be amazing people who you can join at the event. If you have some friends in mind though, you’re more than welcome to stay togethe'
        });
        this.openModal();
      }

      render() {

            $(document).ready(function () {
                  
            })
            return (
                  <div className="faq">
                  <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  aria={{
                    labelledby: "heading",
                    describedby: "full_description"
                  }}
                  style={modalStyle}
                  className="dashboard-modal">
                  <h2>{this.state.modalTitle}</h2>
                  <p align="center">{this.state.modalDesc}</p>
                  </Modal>
                        <div className="content">

                              <div className="class-row-wrapper">
                              <header>FAQ</header>
                                    <div className="row">
                                          <div className="col">
                                                <button className="card style" id="card-one" onClick={this.faqone}>
                                                  <h3 className="cardContainer">Where Is The Hackathon?</h3>
                                                </button>
                                          </div>
                                          <div className="col">
                                                <button className="card style" id="card-two" onClick={this.faqtwo}>
                                                  <h3 className="cardContainer">Is It Free To Join?</h3>
                                                </button>
                                          </div>
                                          <div className="col">
                                                <button className="card style" id="card-three" onClick={this.faqthree}>
                                                  <h3 className="cardContainer">Do You Need Coding Experience?</h3>
                                                </button>
                                          </div>
                                          <div className="col">
                                                <button className="card style" id="card-four" onClick={this.faqfour}>
                                                  <h3 className="cardContainer">What Should I Bring?</h3>
                                                </button>
                                          </div>
                                          <div className="col">
                                                <button className="card style" id="card-five" onClick={this.faqfive}>
                                                  <h3 className="cardContainer">What If I Don't Have A Team?</h3>
                                                </button>
                                          </div>
                                    </div>
                              </div >
                        </div >
                  </div>
            );
      }
}

export default Faq;

