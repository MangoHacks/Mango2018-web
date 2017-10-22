import React, { Component } from 'react';
let DOMPurify = require('../dist/purify.js');


 class SponsorInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      // name:"",
      // email:"",
      // amount:"",
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
      // [contacted]:value,
      // [confirmed]:confirmed
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
    // let cleanConfirmed = DOMPurify.sanitize(this.state.confirmed);
    // let cleanContacted = DOMPurify.sanitize(this.state.contacted);
        
    fetch('http://localhost:8050/sponsor', {
        method: 'POST',
        "headers": {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email: cleanEmail,
            name: cleanName,
            amount: cleanAmount ,      
            // confirmed: cleanConfirmed

        })
        
    })
    .then(response => {
      this.renderAdminDashboard();
    })
}


  render() {
    return (
    
    
      <div className="sponsor-info-dash">
      <h1>Sponsor Info</h1>


      <form className="sponsor-info-form" action="/sponsorform" onSubmit={this.signup}>
          <input type="name" name="name" id="name" placeholder="Sponsor Name" required value={this.state.name} onChange={this.handleInputChange}/>
          <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>          
          <input type="amount" name="amount" required value={this.state.amount} onChange={this.handleInputChange} id="amount" placeholder="Amount"/>                   
          <button className="btn btn-primary" type="submit" onClick={this.registered}>Confirm</button>  
      </form>

        <div className="table-responsive dash">
          <table className="table table-striped table-responsive">
            <thead className="thead-inverse">
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
                        <button id={item._id} onClick={this.updateConfirmation} className="btn btn-success">Confirm</button>          
                        <button id={item._id} onClick={this.updateContacted} className="btn btn-primary">Contacted</button>                                                                  
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

export default SponsorInfo;