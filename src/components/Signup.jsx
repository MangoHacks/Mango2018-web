import React, { Component } from 'react';
import Main from './Main'
let DOMPurify = require('../dist/purify.js');

 class Signup extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       name:'',
       email:'',
       major:'',
       size:'',
       diet:'',
       travel:'',
       school:'' 
     }
     this.signup = this.signup.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
   }    
   signup(event) {
    event.preventDefault();
    let cleanEmail = DOMPurify.sanitize(this.state.email);
    let cleanName = DOMPurify.sanitize(this.state.name);
    let cleanMajor = DOMPurify.sanitize(this.state.major);
    let cleanDiet = DOMPurify.sanitize(this.state.diet);
    let cleanSize = DOMPurify.sanitize(this.state.size);
    let cleanTravel = DOMPurify.sanitize(this.state.travel);
    let cleanSchool = DOMPurify.sanitize(this.state.school);
    
    fetch('http://localhost:8050/form', {
        method: 'POST',
        "headers": {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email: cleanEmail,
            name: cleanName,
            major: cleanMajor,
            travel: cleanTravel,
            size: cleanSize,
            diet: cleanDiet,
            school: cleanSchool,      
        })
    })
    alert('Thanks for registering to MangoHacks')
    window.location.href = "http://localhost:3000/";
}
handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  let name = target.name;
  let email = target.email;

  this.setState({
      [name]: value,
      [email]: value
  });
}
// SIGNUP 
// name
// email
// gender
// school
// year
// resume
// github
// first time?
// MLH CODE OF CONDUCT

  render() {
    return (
      <div className="">
        <h3>Signup</h3>
        <form className="attendee-input-form" action="/form" onSubmit={this.signup}>
          <input type="name" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange}/>
          <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>     
          <input type="radio" name="gender" required value={this.state.gender} onChange={this.handleInputChange} id="gender" placeholder=""/>                         
          <input type="text" name="school" id="school" placeholder="School" required value={this.state.school} onChange={this.handleInputChange}/>
          <input type="text" name="major" id="major" placeholder="Major" required value={this.state.major} onChange={this.handleInputChange}/>
          <input type="text" name="diet" id="diet" placeholder="Dietary Restrictions" required value={this.state.diet} onChange={this.handleInputChange}/>          
          <input type="text" name="travel" id="travel" placeholder="Travel Reimbursement" required value={this.state.travel} onChange={this.handleInputChange}/>
          <button className="btn btn-default" type="submit" onClick={this.registered}>✓ Register</button>  
        </form>
      </div>
    );
  }
}


export default Signup;