import React, { Component } from 'react';

 class Signin extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
          if(this.state.value !== 'rip'){
            alert('The password "' + this.state.value + '" is incorrect.');
          }
        else{
            window.location.href = "http://localhost:3000/AdminDashboard";
        }
      }
  render() {
    return (
      <div className="">
        <h3>Signup</h3>
        <form  className="search" onSubmit={this.handleSubmit}>
        <input  type="text" value={this.state.value} onChange={this.handleChange} placeholder="Password"/>
        <input type="submit" value="✓ Brew"  className="button"/>
            </form>  
          
      </div>
    );
  }
}

export default Signin;