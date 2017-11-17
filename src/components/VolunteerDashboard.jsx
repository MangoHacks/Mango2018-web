
import React, { Component } from 'react';
import Modal from 'react-modal';


let DOMPurify = require('../dist/purify.js');

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '20%',
    right                      : '20%',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

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
    };
    this.signup = this.signup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editUser = this.editUser.bind(this);
    this.checkIn= this.checkIn.bind(this);
    this.renderVolunteerDashboard = this.renderVolunteerDashboard.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleYearChange = this.handleYearChange .bind(this);
    this.handleGenderChange = this.handleGenderChange .bind(this);
    this.handleSizeChange = this.handleSizeChange .bind(this);
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
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  signup(event) {
    event.preventDefault();

    let cleanName = DOMPurify.sanitize(this.state.name);
    let cleanEmail = DOMPurify.sanitize(this.state.email);
    let cleanSchool = DOMPurify.sanitize(this.state.school);
    let cleanMajor = DOMPurify.sanitize(this.state.major);
    let cleanYear = DOMPurify.sanitize(this.state.year);
    let cleanGender = DOMPurify.sanitize(this.state.gender);
    let cleanSize = DOMPurify.sanitize(this.state.size);

    fetch('http://localhost:8050/form/', {
      method: 'POST',
      "headers": {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: cleanName,
        email: cleanEmail,
        school: cleanSchool,
        major: cleanMajor,
        year: cleanYear,
        gender: cleanGender,
        size: cleanSize,
      })

    })
    .then(response => {
      this.renderVolunteerDashboard();
      this.setState({
        list: [],
        name: "",
        email: '',
        school: '',
        major: '',
        year: 'Freshman',
        gender: 'Male',
        size: '',
      });
    })

    // window.location.href = "http://localhost:3000/signup";
      this.closeModal();

    }
  // renderVolunteerDashboard() {
  //   fetch('http://localhost:8050/users',
  //     {
  //       method: 'GET'
  //     })
  //     .then(results => { //results is a an object
  //       results.json() //results.json is a Promise Object
  //         .then((data) => {  //Once you get the Promise done you can extract the data
  //           this.setState({
  //             list: data
  //           })
  //           console.log(data)
  //         })
  //    })
  // }
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

  checkIn(event){
    event.preventDefault();
    const target = event.target;
    const id = target.id;
    let checkin = 'Yes';
    fetch('http://localhost:8050/users/' + id,
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
    })
  }
  downloadResume(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.id;

    fetch('http://localhost:8050/users/' + id,
      {
        method: 'GET'
      })
      .then(response => {
        this.renderVolunteerDashboard();
      })
  }
  renderVolunteerDashboard() {
    fetch('http://localhost:8050/users',
      {
        method: 'GET'
      })
      .then(results => { //results is a an object
        results.json() //results.json is a Promise Object
          .then((data) => {  //Once you get the Promise done you can extract the data
            this.setState({
              list: data
            })
            console.log(data)
          })
     })
  }
  getInitialState() {
    return {
      editing: null
    };
  }
toggleEditing( itemId ) {
    this.setState( { editing: itemId } );
  }
editUser(event){
  event.preventDefault();
  const target = event.target;
  const id = target.id;
  console.log('yay' + id)
}
  render() {

    return (
      <div className="dashboard-body" align="center">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}
          style = {modalStyle}
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
            <datalist id="majors">
              <option value="Computer Science" />
              <option value="Computer Engineering" />
              <option value="Information Technology" />
              <option value="Business" />
              <option value="Electrical Engineering" />
            </datalist>
            <div className="row">
                <div className="col">
                  <label htmlFor="">Grade Level</label>
                  <div class="form-group">
                    <select name="year" onChange={this.handleYearChange}>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophmore">Sophmore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="">Super Senior</option>
                      <option value="">DAMN</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="">Gender</label>
                  <div className="form-group">
                    <select value="gender" onChange={this.handleGenderChange}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="col">
                  <label htmlFor="">Shirt Size</label>
                  <div class="form-group">
                    <select name="size" onChange={this.handleSizeChange}>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                      <option value="X-Large">X-Large</option>
                    </select>
                  </div>
                </div>
                </div>



            <br />
            <button className="btn btn-default" type="submit" >✓ Register</button>
          </form>
          </div>
          </div>
        </Modal>


        <div className="dashboard-menu" align="left">
          <p>MangoHacks Dashboard</p>
        </div>
        <div className="dashboard-header">
        <p>Volunteer Dashboard</p>
        <p></p>
        <button onClick={this.openModal}>Add User</button>
        </div>
        <table>
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
                this.state.list.map((item,index) => {
                  return(
                  <tr key={item._id}>
                      <td><p>{index+1}</p></td>
                      <td><p>{item.name}</p></td>
                      <td><p>{item.email}</p></td>
                      <td><p>{item.school}</p></td>
                      <td><p>{item.size}</p></td>
                      <td><p>{item.checkin}</p></td>

                      <td>
                      <button id={item._id} onClick={this.checkIn} className="btn btn-default">Check In</button>
                      {/* <a href={"http://localhost:8050/dlresume/"+item.resume.filename}><button id={item._id} className="btn btn-success">Resume</button></a> */}
                      </td>
                  </tr>

                  )}
                )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default VolunteerDashboard;
// <div className="table-responsive dash">
// <table className="table table-striped table-responsive">
//   <thead className="thead-inverse">
//     <tr>
//       <th>#</th>
//       <th>Name</th>
//       <th>Email</th>
//       <th>School</th>
//         <th>Check In</th>
//       <th>Edit</th>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//       {
//         this.state.list.map((item,index) => {
//           return(
//           <tr key={item._id}>
//               <td >{index+1}</td>
//               <td >{item.name}</td>
//               <td >{item.email}</td>
//               <td >{item.school}</td>
//               <td >{item.checkin}</td>
//               <td>
//               <button id={item._id} onClick={this.editUser} className="btn btn-primary">Edit User</button>
//               <button id={item._id} onClick={this.checkIn} className="btn btn-default">Check In</button>
//               {/* <a href={"http://localhost:8050/dlresume/"+item.resume.filename}><button id={item._id} className="btn btn-success">Resume</button></a> */}
//               </td>
//           </tr>
//           )}
//         )}
//   </tbody>
// </table>
// </div>
