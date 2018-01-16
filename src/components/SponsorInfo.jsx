import React, { Component } from 'react';
let DOMPurify = require('../dist/purify.js');


 class SponsorInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name:"",
      email:"",
      amount:"",
      // confirmed:'',
      // contacted: ''
    };
    this.signup = this.signup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.renderAdminDashboard = this.renderAdminDashboard.bind(this);
    this.updateConfirmation = this.updateConfirmation.bind(this);
    this.updateContacted= this.updateContacted.bind(this);

  }
  componentDidMount() {
    this.renderAdminDashboard();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const amount = target.amount;
    const confirmed = target.confirmed;
    const email = target.email;
    const contacted = target.contacted;

    this.setState({
      [name]: value,
      [contacted]:value,
      [confirmed]:confirmed
    });
  }
  deleteUser(event) {
    event.preventDefault();
    const target = event.target;
    const id = target.id;

    fetch('http://localhost:8050/sponsors/' + id,
      {
        method: 'DELETE'
      })
      .then(response => {
        this.renderAdminDashboard();
      })
  }

  renderAdminDashboard() {
    fetch('http://localhost:8050/sponsors',
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

updateConfirmation(event){
  event.preventDefault();
  const target = event.target;
  const id = target.id;
  let cleanConfirmed = 'Confirmed';
  fetch('http://localhost:8050/sponsors/' + id,
  {
    method: 'PUT',
    "headers": {
      "content-type": "application/json",
  },
  body: JSON.stringify({
      confirmed: cleanConfirmed,
    })
  })
  .then(response => {
    this.renderAdminDashboard();
  })
}

updateContacted(event){
  event.preventDefault();
  const target = event.target;
  const id = target.id;
  let cleanContacted = 'Contacted';
  fetch('http://localhost:8050/sponsors/' + id,
  {
    method: 'PUT',
    "headers": {
      "content-type": "application/json",
  },
  body: JSON.stringify({
      contacted: cleanContacted,
    })
  })
  .then(response => {
    this.renderAdminDashboard();
  })
}

signup(event) {
    event.preventDefault();
    let cleanEmail = DOMPurify.sanitize(this.state.email);
    let cleanName = DOMPurify.sanitize(this.state.name);
    let cleanAmount = DOMPurify.sanitize(this.state.amount);
    let cleanConfirmed = DOMPurify.sanitize(this.state.confirmed);
    let cleanContacted = DOMPurify.sanitize(this.state.contacted);

    fetch('http://localhost:8050/sponsor', {
        method: 'POST',
        "headers": {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email: cleanEmail,
            name: cleanName,
            amount: cleanAmount ,
            confirmed: cleanConfirmed

        })

    })
    .then(response => {
      this.renderAdminDashboard();
    })
}


  render() {
    return (


      <div className="sponsor-info-dash">

        <div className="dashboard-body" align="center">



          <div className="dashboard-menu" align="left">
            <p>MangoHacks Sponsor Info</p>
          </div>
          <div className="dashboard-header">
            <p>Sponsor Dashboard</p>
              {
                  this.state.list.map((item, index) => {
                    this.setState({
                      count: index +1
                    });
                  })
                }
            //   <h3>{this.state.count}</h3>
            // <button onClick={this.openModal}>Add Sponsor</button>
          </div>

          <form className="sponsor-info-form" action="/sponsorform" onSubmit={this.signup}>
              <input type="name" name="name" id="name" placeholder="Sponsor Name" required value={this.state.name} onChange={this.handleInputChange}/>
              <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>
              <input type="number" name="amount" required value={this.state.amount} onChange={this.handleInputChange} id="amount" placeholder="Amount"/>
              <button className="btn btn-primary" type="submit" onClick={this.registered}>Confirm</button>
          </form>

              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Sponsor</th>
                    <th>Contact Email</th>
                    <th>Contacted</th>
                    <th>Amount</th>
                    <th>Confirmed</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {
                      this.state.list.map((item,index) => {
                        return(
                        <tr key={item._id}>
                            <td >{index+1}</td>
                            <td >{item.name}</td>
                            <td >{item.email}</td>
                            <td >{item.contacted}</td>
                            <td >{item.amount}</td>
                            <td >{item.confirmed}</td>
                            <td>
                            <button id={item._id} onClick={this.deleteUser} className="btn btn-danger">Delete Sponsor</button>
                            </td>
                        </tr>
                        )}
                      )}
                </tbody>
              </table>
        </div>

      </div>
    );
  }
}

// <h1>Sponsor Info</h1>
//
//
// <form className="sponsor-info-form" action="/sponsorform" onSubmit={this.signup}>
//     <input type="name" name="name" id="name" placeholder="Sponsor Name" required value={this.state.name} onChange={this.handleInputChange}/>
//     <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>
//     <input type="number" name="amount" required value={this.state.amount} onChange={this.handleInputChange} id="amount" placeholder="Amount"/>
//     <button className="btn btn-primary" type="submit" onClick={this.registered}>Confirm</button>
// </form>
//
//   <div className="table-responsive dash">
//     <table className="table table-striped table-responsive">
//       <thead className="thead-inverse">
//         <tr>
//           <th>#</th>
//           <th>Sponsor</th>
//           <th>Contact Email</th>
//           <th>Contacted</th>
//           <th>Amount</th>
//           <th>Confirmed</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//           {
//             this.state.list.map((item,index) => {
//               return(
//               <tr key={item._id}>
//                   <td >{index+1}</td>
//                   <td >{item.name}</td>
//                   <td >{item.email}</td>
//                   <td >{item.contacted}</td>
//                   <td >{item.amount}</td>
//                   <td >{item.confirmed}</td>
//                   <td>
//                   <button id={item._id} onClick={this.deleteUser} className="btn btn-danger">Delete Sponsor</button>
//                   </td>
//               </tr>
//               )}
//             )}
//       </tbody>
//     </table>
//
//
//   </div>

// <Modal
//   isOpen={this.state.modalIsOpen}
//   onAfterOpen={this.afterOpenModal}
//   onRequestClose={this.closeModal}
//   aria={{
//     labelledby: "heading",
//     describedby: "full_description"
//   }}
//   style={modalStyle}
//   className="dashboard-modal">
//   <div align="center">
//     <h4 id="heading">Add Hacker</h4>
//     <div id="full_description" align="center">
//     </div>
//     <div className="volunteersignup">
//       <form action="/form" className="" onSubmit={this.signup} encType="multipart/form-data">
//         <div className="form-group">
//           <input type="name" name="name" className="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
//         </div>
//         <div className="form-group">
//           <input type="email" name="email" className="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email" />
//         </div>
//         <div className="form-group">
//           <input type="text" list="schools" name="school" className="school" required value={this.state.school} onChange={this.handleInputChange} id="school" placeholder="School" />
//         </div>
//         <datalist id="schools">
//           <option value="Florida International University" />
//         </datalist>
//
//         <div className="form-group">
//           <input type="text" list="majors" name="major" className="major" required value={this.state.major} onChange={this.handleInputChange} id="major" placeholder="Major" />
//         </div>
//         <datalist id="majors">
//           <option value="Computer Science" />
//           <option value="Computer Engineering" />
//           <option value="Information Technology" />
//           <option value="Business" />
//           <option value="Electrical Engineering" />
//         </datalist>
//         <div className="row">
//           <div className="col">
//             <label htmlFor="">Grade Level</label>
//             <div class="form-group">
//               <select name="year" onChange={this.handleYearChange}>
//                 <option value="Freshman">Freshman</option>
//                 <option value="Sophmore">Sophmore</option>
//                 <option value="Junior">Junior</option>
//                 <option value="Senior">Senior</option>
//                 <option value="">Super Senior</option>
//                 <option value="">DAMN</option>
//               </select>
//             </div>
//           </div>
//           <div className="col">
//             <label htmlFor="">Gender</label>
//             <div className="form-group">
//               <select value="gender" onChange={this.handleGenderChange}>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//           </div>
//
//           <div className="col">
//             <label htmlFor="">Shirt Size</label>
//             <div class="form-group">
//               <select name="size" onChange={this.handleSizeChange}>
//                 <option value="Small">Small</option>
//                 <option value="Medium">Medium</option>
//                 <option value="Large">Large</option>
//                 <option value="X-Large">X-Large</option>
//               </select>
//             </div>
//           </div>
//         </div>
//
//
//
//         <br />
//         <button className="btn btn-default" type="submit" >✓ Register</button>
//       </form>
//     </div>
//   </div>
// </Modal>


export default SponsorInfo;
