import React, { Component } from 'react';
import Main from './Main';
import Dropzone from 'react-dropzone'


let DOMPurify = require('../dist/purify.js');

 class Signup extends React.Component {
   constructor(props){
     super(props);
     this.state = {
      // value:'',
      name:"",
      email: '',
      school: '',      
      major: '',
      year: 'Freshman',      
      firsttime: 'Yes',
      gender: 'Male',
      size: '',
      github: '',
      resume: [],
      diet: '',     
      // mlh: ''
     }
     this.signup = this.signup.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleYearChange = this.handleYearChange.bind(this);
     this.handleFirstTimeChange = this.handleFirstTimeChange.bind(this);
     this.handleGenderChange = this.handleGenderChange.bind(this);
     this.handleSizeChange = this.handleSizeChange.bind(this);
     this.handleFileChange = this.handleFileChange.bind(this);
   }    
   onDrop(resume) {
    this.setState({
      resume
    });
  }

   handleYearChange(event) {
    this.setState({year: event.target.value});
  }
  handleFirstTimeChange(event) {
    this.setState({firsttime: event.target.value});
  }
  handleGenderChange(event) {
    this.setState({gender: event.target.value});
  }
  handleSizeChange (event) {
    this.setState({
      size: event.target.value
    });
  }
  handleFileChange (event) {
    this.setState({
      resume: event.target.value
    });
  }
   signup(event) {
    event.preventDefault();

    let cleanName = DOMPurify.sanitize(this.state.name);    
    let cleanEmail = DOMPurify.sanitize(this.state.email);
    let cleanSchool = DOMPurify.sanitize(this.state.school);
    let cleanMajor = DOMPurify.sanitize(this.state.major);
    let cleanYear = DOMPurify.sanitize(this.state.year);
    let cleanFirstTime = DOMPurify.sanitize(this.state.firsttime);
    let cleanGender = DOMPurify.sanitize(this.state.gender);
    let cleanSize = DOMPurify.sanitize(this.state.size);
    let cleanGithub = DOMPurify.sanitize(this.state.github);
    // let cleanResume = DOMPurify.sanitize(this.state.resume);    
    let resume = (this.state.resume);    
    
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
            major: cleanMajor,
            year: cleanYear,      
            firsttime: cleanFirstTime,
            gender: cleanGender,
            size: cleanSize,
            github: cleanGithub,
            resume: resume,
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
  let major = target.major;
  let year = target.year;
  let firsttime = target.firsttime;
  let gender = target.gender;
  let size = target.size;
  let github= target.githubl;
  let resume= target.resume;
  let diet= target.diet;
  // let mlh = target.mlh;
  
  this.setState({
      [name]: value,
      [email]: value,
      [school]: value,
      [major]: value,
      [year]: value,
      [firsttime]: value,
      [gender]: value,
      [size]: value,
      [github]: value,
      [resume]: value,
      [diet]: value,
      // [mlh]: value
  });
}

  render() {
    return (
      <div className="signup">
        <h3>Signup</h3>

        <form action="/form" onSubmit={this.signup} encType="multipart/form-data">
          <input type="name" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange}/>
          <br/>
          <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>
          <br/>

          <input type="text" list="schools" name="school" required value={this.state.school} onChange={this.handleInputChange} id="school" placeholder="School"/>
          <datalist id="schools">
            <option value="Florida International University" />
          </datalist>
          <br/>
          <input type="text" list="majors" name="major" required value={this.state.major} onChange={this.handleInputChange} id="major" placeholder="Major"/>
          <datalist id="majors">
            <option value="Computer Science" />
            <option value="Computer Engineering" />
            <option value="Information Technology" />
            <option value="Business" />
            <option value="Electrical Engineering" />
          </datalist>
           <br/>
           <select name="year" onChange={this.handleYearChange}>
              <option value="Freshman" >Freshman</option>
              <option value="Sophmore" >Sophmore</option>
              <option value="Junior" >Junior</option>
              <option value="Senior">Senior</option>
           </select>
           <br/>
           <select name="firsttime" onChange={this.handleFirstTimeChange}>
              <option value="Yes" >Yes</option>
              <option value="No" >No</option>
           </select>
           <br/>
           <select name="gender" onChange={this.handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
           </select>
           <br/>
              <label htmlFor="">Shirt Sizes</label>
              <br/>
            <div className="size">
              <label htmlFor="">Small</label>
              <input type="checkbox" value="Small" checked={this.state.size === 'Small'}  onChange={this.handleSizeChange} />
              <br/>
              <label htmlFor="">Medium</label>              
              <input type="checkbox" value="Medium" checked={this.state.size === 'Medium'} onChange={this.handleSizeChange} />
              <br/>
              <label htmlFor="">Large</label>
              <input type="checkbox" value="Large" checked={this.state.size === 'Large'} onChange={this.handleSizeChange} />
              <br/>
              <label htmlFor="">X-Large</label>              
              <input type="checkbox" value="X-Large" checked={this.state.size === 'X-Large'} onChange={this.handleSizeChange} />
            </div>
            <div className="github">
              http://
              <input type="url" name="github" required value={this.state.github} onChange={this.handleInputChange} id="github" placeholder="github.com/octocat"/>
            </div>
           <br/>
           <div className="resume">
            <input type="file" name="resume" value={this.state.resume} onChange={this.handleFileChange}/>
           </div>
           {/* <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.resume.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section> */}
          <input type="text" name="diet" id="diet" placeholder="diet" required value={this.state.diet} onChange={this.handleInputChange}/>
          <br/>
          <button className="btn btn-default" type="submit" onClick={this.registered}>✓ Register</button>  
        </form>
      </div>
    );
  }
}


export default Signup;