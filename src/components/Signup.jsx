import React, { Component } from 'react';

 class Signup extends React.Component {
  render() {
    return (
      <div className="hero">
        <h2>Signup</h2>
        <form action="submit">
          <input type="text" name="name" id="name" placeholder="Name"/>
          <input type="text" name="name" id="email" placeholder="Email"/>          
          <input type="text" name="name" id="school" placeholder="School"/>
          <input type="text" name="name" id="major" placeholder="Major"/>
          <input type="text" name="name" id="size" placeholder="Shirt Size"/>
          <input type="text" name="name" id="diet" placeholder="Dietary Restrictions"/>          
          <input type="text" name="name" id="travel" placeholder="Travel Reimbursement"/>
          <button className="btn btn-default">✓ Register</button>
          
          
        </form>
      </div>
    );
  }
}

export default Signup;