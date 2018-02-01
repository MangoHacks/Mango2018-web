import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import countdown from 'countdown';
import start from 'countdown';
import callback from 'countdown';
import end from 'countdown';
import units from 'countdown';
import max from 'countdown';
import digits from 'countdown';

import schedule from '../data/schedule.js';

//import modal
import Modal from 'react-modal';

// var timespan = countdown(start|callback, end|callback, units, max, digits);

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

countdown.DEFAULTS =
	countdown.YEARS |
	countdown.MONTHS |
	countdown.DAYS |
	countdown.HOURS |
	countdown.MINUTES |
	countdown.SECONDS;

//countdown parameters

function loadDate(){
  var endDate = countdown( new Date(2018, 1, 2, 18, 0, 0) );
  var daysLeft = endDate.days;
  var hoursLeft = endDate.hours;
  var minutesLeft = endDate.minutes;
  var secondsLeft = endDate.seconds;
  var str = daysLeft + ":" + hoursLeft + ":" + minutesLeft + ":" + secondsLeft;
  document.getElementById("todaysDate").innerHTML = str;
}
setInterval(loadDate, 1000);

class Live extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      modalTitle: 'title',
      modalDesc: 'desc'
    };
    //Modals
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render(){
    return (
      <div>
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
        <div className="topmenu">
		<div>
			<h2>MangoHacks <span style={{background: '#F7548B', padding: '3px', fontSize:'0.8em', borderRadius: '5px', fontFamily: 'FuturaLT'}}>Live</span></h2>
		</div>
		<div>

		</div>
		<div>

		</div>
	</div>
  <br/>
  <br/>
	<div>
	<h1 align="center" className="time" style={{fontSize: '5em'}}><span id='todaysDate' style={{fontFamily: 'FuturaLT'}}></span><br/><span style={{fontSize: '0.5em', fontFamily: 'FuturaLT'}}>Hacking Starts!</span>
	</h1>
	</div>
  <br />
		<div className="buttons" align="center">
		<a href="https://mangohacks2018.slack.com/" target="_blank"><button>Request Slack Invite</button></a>
		<a href="https://mangohacks2018.devpost.com" target="_blank"><button>Devpost</button></a>
		<a href="https://www.facebook.com/groups/106690973468947/" target="_blank"><button>Facebook Group</button></a>
		<a href="https://hardware.mlh.io/" target="_blank"><button>MLH Hardware Request</button></a>
	</div>
  <br />
	<div className="tables">
		<div className="schedule">
			<h2 align="center" style={{fontSize: '2em'}}>Schedule</h2>
			<div className="timeline">
        {
          schedule.map((i, index) => {
            function formatDate(date) {
              var monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"
              ];

              var day = date.getDate();
              var monthIndex = date.getMonth();
              var year = date.getFullYear();

              return monthNames[monthIndex] + ' ' + day + ' ' + year;
            }
            return(
            <div className="container right" key={index}>
                <div className="content">
                  <h2>{i.title}<span className="tags">{i.tags}</span><br/><p style={{color: 'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p></h2>
                  <p>Starts:<span style={{fontFamily: 'FuturaLT', color: '#FF4E50'}}>{" " + formatDate(i.startTime)}</span><br/>
                  Ends:<span style={{fontFamily: 'FuturaLT', color: '#FF4E50'}}>{" " + formatDate(i.endTime)}</span><br/>
                Location:<span style={{fontFamily: 'FuturaLT', color: '#FF4E50'}}>{" " + i.location}</span>
                  </p>

                </div>
            </div>
          )
          })
        }
			</div>
		</div>
		<div className="tweets">
			<h2 align="center" style={{fontSize: '2em'}}>Announcements</h2>
        <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'fiumangohacks'
      }}
      options={{
        username: 'fiumangohacks',
        height: '400'
      }}
      onLoad={() => console.log('Timeline is loaded!')}
    />
		</div>
	</div>
      </div>
    )
  }
}

export default Live;
