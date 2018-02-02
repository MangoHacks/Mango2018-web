import React, { Component } from 'react';
import Modal from 'react-modal';

import Mango from '../public/img/mangos/signup-mango.svg'

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
    top: '40px',
    left: '20%',
    right: '20%',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'

  }
}

let modalIsOpen = false;

class VolunteerDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: "",
      email: '',
      school: '',
      major: '',
      year: 'Freshman',
      gender: 'Male',
      size: 'Small',
      count: 0,
      search: '',
      p: 'mangohype',
      value: '',
      component: false
    };

    this.handlelogin = this.handlelogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
    this.signup = this.signup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editUser = this.editUser.bind(this);
    this.checkIn = this.checkIn.bind(this);
    this.renderVolunteerDashboard = this.renderVolunteerDashboard.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ value: e.target.value.toLowerCase() });
  }

  handlelogin(e) {
    e.preventDefault();
    if (this.state.value == '') {
      alert('Please enter a password');
    }
    else {
      if (this.state.value != this.state.p) {
        alert("Wrong password!");
      }
      else {
        if (this.state.value == this.state.p) {
          this.setState({
            component: true
          });
        }
      }
    }
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
  }
  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  handleSizeChange(event) {
    this.setState({ size: event.target.value });
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

  signup(event) {
    event.preventDefault();

    let cleanName = this.state.name;
    let cleanEmail = this.state.email;
    let cleanSchool = this.state.school;

    fetch('http://mangohacks.com:8050/form/', {
      method: 'POST',
      "headers": {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: cleanName,
        email: cleanEmail,
        school: cleanSchool,
      })

    })
      .then(response => {
        // this.renderVolunteerDashboard();
        this.setState({
          list: [],
          name: "",
          email: '',
          school: '',
          count: this.state.count + 1
        });
      })
    this.closeModal();
    // this.renderVolunteerDashboard();
  }
  componentDidMount() {
    this.renderVolunteerDashboard();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSearch(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      search: value,
    });
  }

  checkIn(value, event) {
    event.preventDefault();
    const target = event.target;
    const id = target.id;
    if (value == 'Yes') {
      alert('Hacker is already checked in!')
    }
    else {
      let checkin = 'Yes';
      fetch('http://mangohacks.com:8050/users/' + id,
        {
          method: 'PUT',
          "headers": {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            checkin: checkin,
          })
        })
        .then(response => {
          this.renderVolunteerDashboard();
        });
    }
  }

  downloadResume(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.id;

    fetch('http://mangohacks.com:8050/users/' + id,
      {
        method: 'GET'
      })
      .then(response => {
        this.renderVolunteerDashboard();
      })
  }
  renderVolunteerDashboard() {
    fetch('http://mangohacks.com:8050/users',
      {
        method: 'GET'
      })
      .then(results => { //results is a an object
        results.json() //results.json is a Promise Object
          .then((data) => {  //Once you get the Promise done you can extract the data
            let count = 0;
            for (var i = 0; i < data.length; i++) {
              if (data[i].checkin == 'Yes')
                count = count + 1;
            }
            this.setState({
              list: data,
              count: count
            })
          })
      })
  }
  getInitialState() {
    return {
      editing: null
    };
  }
  toggleEditing(itemId) {
    this.setState({ editing: itemId });
  }
  editUser(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.id;
  }
  render() {


    let component;
    if (this.state.component == true) {
      component = (
        <div className="dashboard-body" align="center">
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
            <div align="center">
              <h4 id="heading">Add Hacker</h4>
              <div id="full_description" align="center">
              </div>
              <div className="volunteersignup">
                <form action="/form" className="" onSubmit={this.signup} encType="multipart/form-data">
                  <div className="form-group">
                    <input type="name" name="name" className="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" list="schools" name="school" className="school" required value={this.state.school} onChange={this.handleInputChange} id="school" placeholder="School" />
                  </div>
                  <datalist id="schools">
                    <option value="Florida International University" />
                  </datalist>

                  <div className="form-group">
                    <input type="text" list="majors" name="major" className="major" required value={this.state.major} onChange={this.handleInputChange} id="major" placeholder="Major" />
                  </div>
                  <br />
                  <button className="btn btn-default" type="submit" >✓ Register</button>
                </form>
              </div>
            </div>
          </Modal>


          <div className="dashboard-menu" align="left">
            <p>MangoHacks Volunteer</p>
          </div>
          <div className="dashboard-header">
            <p>Volunteer Dashboard</p>
            <div className="count">
              <h3>
                {this.state.count}/
              {this.state.list.length}
              </h3>
            </div>
            <button onClick={this.openModal}>Add Hacker</button>
          </div>
          <div>
            {/* <div className="form-group">
            <input type="text" className="form-control search-db" placeholder="Search Hacker" onChange={this.handleSearch} />
          </div> */}
          </div>
          <table >
            <thead>
              <tr>
                <th><p>#</p></th>
                <th><p>Name</p></th>
                <th><p>Email</p></th>
                <th><p>School</p></th>
                <th><p>Shirt Size</p></th>
                <th><p>Checked In</p></th>
                <th><p>Options</p></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.list.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td><p>{index + 1}</p></td>
                      <td><p>{item.name}</p></td>
                      <td><p>{item.email}</p></td>
                      <td><p>{item.school}</p></td>
                      <td><p>{item.size}</p></td>
                      <td><p>{item.checkin}</p></td>
                      <td>
                        <button id={item._id} onClick={this.checkIn.bind(this, item.checkin)} value={item.checkin} className="btn btn-default">Check In</button>
                      </td>
                    </tr>
                  )
                }
                )}

            </tbody>
          </table>
        </div>
      )
    } else {
      component = (
        <div className="bg-color">
          <div className="login-container">
            <img src={Mango} className="mango-login" />
            <form onSubmit={this.handlelogin}>
              <input type="password" style={{ width: 400, margin: "auto", color: '#fff' }} className="login " placeholder="Password" onChange={this.handleChange} />
            </form>
            <p style={{marginTop:110, opacity: 0.95}} ><b>Volunteer dashboard</b></p>

          </div>
          <div className="phone-message">
            <p align="center" style={{ marginTop: 200, opacity: 0.8 }}>App is not available on mobile devices..</p>
          </div>
        </div>
      )
    }

    return (
      <div>
        {component}
      </div>
    )
  }
}

export default VolunteerDashboard;
