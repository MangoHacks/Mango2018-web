import React, { Component } from 'react';
import Main from './Main';
import Autosuggest from 'react-autosuggest';
import school from '../data/schools';

let DOMPurify = require('../dist/purify.js');

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : school.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

 class Signup extends React.Component {
   constructor(props){
     super(props);
     this.state = {
      value:'',
      suggestions: [],
      name:"",
      email: '',
      school: '',      
      // major: '',
      // year: '',      
      // firsttime: '',
      // gender: '',
      // size: '',
      // github: '',
      // resume: '',
      diet: '',     
      // mlh: ''
     }
     this.signup = this.signup.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
   }    
   onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
      school:newValue      
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),      
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
   signup(event) {
  

    event.preventDefault();
    let cleanName = DOMPurify.sanitize(this.state.name);    
    let cleanEmail = DOMPurify.sanitize(this.state.email);
    let cleanSchool = DOMPurify.sanitize(this.state.school);
    // let cleanMajor = DOMPurify.sanitize(this.state.major);
    // let cleanYear = DOMPurify.sanitize(this.state.year);
    // let cleanFirstTime = DOMPurify.sanitize(this.state.firsttime);
    // let cleanGender = DOMPurify.sanitize(this.state.gender);
    // let cleanSize = DOMPurify.sanitize(this.state.size);
    // let cleanGithub = DOMPurify.sanitize(this.state.github);
    // let cleanResume = DOMPurify.sanitize(this.state.resume);    
    let cleanDiet = DOMPurify.sanitize(this.state.diet);
    // let cleanMLH = DOMPurify.sanitize(this.state.mlh);

    fetch('http://localhost:8050/form/', {
        method: 'POST',
        "headers": {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name: cleanName,
            email: cleanEmail,
            school: cleanSchool,      
            // major: cleanMajor,
            // year: cleanYear,      
            // firsttime: cleanFirstTime,
            // gender: cleanGender,
            // size: cleanSize,
            // github: cleanGithub,
            // resume: cleanResume,
            diet: cleanDiet,     
            // mlh: cleanMLH
        })
    });
    alert('Thanks for registering to MangoHacks')
    window.location.href = "http://localhost:3000/signup";
}
handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  let name = target.name;
  let email = target.email;
  let school = target.school;
  // let major = target.major;
  // let year = target.year;
  // let firsttime = target.firsttime;
  // let gender = target.gender;
  // let size = target.size;
  // let github= target.githubl;
  // let resume= target.resume;
  let diet= target.diet;
  // let mlh = target.mlh;
  
  this.setState({
      [name]: value,
      [email]: value,
      [school]: value,
      // [major]: value,
      // [year]: value,
      // [firsttime]: value,
      // [gender]: value,
      // [size]: value,
      // [github]: value,
      // [resume]: value,
      [diet]: value,
      // [mlh]: value
  });
}

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
        placeholder: 'School',
        value,
        onChange: this.onChange
        };

    return (
      <div className="signup">
        <h3>Signup</h3>
        <form action="/form" onSubmit={this.signup} encType="multipart/form-data">
          <input type="name" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange}/>
          <br/>
          <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>
          <br/>
          <Autosuggest 
            className="school"
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
           />

          <input type="text" name="diet" id="diet" placeholder="diet" required value={this.state.diet} onChange={this.handleInputChange}/>
          <br/>
          <button className="btn btn-default" type="submit" onClick={this.registered}>✓ Register</button>  
        </form>
      </div>
    );
  }
}


export default Signup;