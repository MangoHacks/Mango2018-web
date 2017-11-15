
import React, { Component } from 'react';

class VolunteerDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editUser = this.editUser.bind(this);
    this.checkIn= this.checkIn.bind(this);

    this.renderVolunteerDashboard = this.renderVolunteerDashboard.bind(this);
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
        <div className="dashboard-menu" align="left">
          <p>MangoHacks</p>
        </div>
        <div className="dashboard-header">
        <p>Volunteer Dashboard</p>
        <button>Add User</button>
        </div>
        <table>
          <thead>
            <tr>
              <th><p>#</p></th>
              <th><p>Name</p></th>
              <th><p>Email</p></th>
              <th><p>School</p></th>
              <th><p>Check In</p></th>
              <th><p>Edit</p></th>
              <th></th>
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
                      <td><p>{item.checkin}</p></td>
                      <td>
                      <button id={item._id} onClick={this.editUser} className="btn btn-primary">Edit User</button>
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
