import React, { Component } from 'react';
import Main from './Main';
import Dropzone from 'react-dropzone'


let DOMPurify = require('../dist/purify.js');

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: '',
      school: '',
      major: '',
      year: '',
      firsttime: '',
      gender: '',
      size: '',
      github: '',
      resume: [],
      diet: '',
      mlh: ''
    }
    this.signup = this.signup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleFirstTimeChange = this.handleFirstTimeChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleMLHChange = this.handleMLHChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }
  onDrop(resume) {
    this.setState({
      resume
    });
  }

  handleYearChange(event) {
    this.setState({ year: event.target.value });
  }
  handleFirstTimeChange(event) {
    this.setState({ firsttime: event.target.value });
  }
  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }
  handleSizeChange(event) {
    this.setState({ size: event.target.value });
  }
  handleMLHChange(event) {
    this.setState({ mlh: event.target.value });
  }
  handleFileChange(event) {
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
    let cleanMLH = DOMPurify.sanitize(this.state.mlh);

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
        mlh: cleanMLH
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
    let github = target.githubl;
    let resume = target.resume;
    let diet = target.diet;
    let mlh = target.mlh;

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
      [mlh]: value
    });
  }

  render() {
    return (
      <div class="signup-bg-color">
        <div className="signup">
          <form action="/form" onSubmit={this.signup} encType="multipart/form-data">

            <div className="form-group">
              <input type="name" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" list="schools" name="school" required value={this.state.school} onChange={this.handleInputChange} id="school" placeholder="School" />
            </div>
            <datalist id="schools">
              <option value="Florida International University" />
            </datalist>
            <div className="form-group">
              <input type="text" list="majors" name="major" required value={this.state.major} onChange={this.handleInputChange} id="major" placeholder="Major" />
            </div>
            <datalist id="majors">
              <option value="Computer Science" />
              <option value="Computer Engineering" />
              <option value="Information Technology" />
              <option value="Business" />
              <option value="Electrical Engineering" />
            </datalist>

            <div className="form-group">
              <label htmlFor="">Freshman</label>
              <input type="checkbox" value="Freshman" checked={this.state.year === 'Freshman'} onChange={this.handleYearChange} />
              <label htmlFor="">Sophmore</label>
              <input type="checkbox" value="Sophmore" checked={this.state.year === 'Sophmore'} onChange={this.handleYearChange} />
              <label htmlFor="">Junior</label>
              <input type="checkbox" value="Junior" checked={this.state.year === 'Junior'} onChange={this.handleYearChange} />
              <label htmlFor="">Senior</label>
              <input type="checkbox" value="Senior" checked={this.state.year === 'Senior'} onChange={this.handleYearChange} />
            </div>

            <label htmlFor="">First Time?</label>
            <div className="form-group">
              <label htmlFor="">Yes</label>
              <input type="radio" value="Yes" checked={this.state.firsttime === 'Yes'} onChange={this.handleFirstTimeChange} />
              <label htmlFor="">No</label>
              <input type="radio" value="No" checked={this.state.firsttime === 'No'} onChange={this.handleFirstTimeChange} />
            </div>

            <label htmlFor="">Gender</label>
            <div className="form-group">
              <label htmlFor="">Male</label>
              <input type="radio" value="Male" checked={this.state.gender === 'Male'} onChange={this.handleGenderChange} />
              <label htmlFor="">Female</label>
              <input type="radio" value="Female" checked={this.state.gender === 'Female'} onChange={this.handleGenderChange} />
              <label htmlFor="">Other</label>
              <input type="radio" value="Other" checked={this.state.gender === 'Other'} onChange={this.handleGenderChange} />
            </div>

            <label htmlFor="">Shirt Size</label>
            <div className="form-group">
              <label htmlFor="">Small</label>
              <input type="checkbox" value="Small" checked={this.state.size === 'Small'} onChange={this.handleSizeChange} />
              <label htmlFor="">Medium</label>
              <input type="checkbox" value="Medium" checked={this.state.size === 'Medium'} onChange={this.handleSizeChange} />
              <label htmlFor="">Large</label>
              <input type="checkbox" value="Large" checked={this.state.size === 'Large'} onChange={this.handleSizeChange} />
              <label htmlFor="">X-Large</label>
              <input type="checkbox" value="X-Large" checked={this.state.size === 'X-Large'} onChange={this.handleSizeChange} />
            </div>
            <div className="github">
              http://
              <input type="url" name="github" required value={this.state.github} onChange={this.handleInputChange} id="github" placeholder="github.com/octocat" />
            </div>
            <br />
            <div className="resume">
              <input type="file" name="resume" value={this.state.resume} onChange={this.handleFileChange} />
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
            <div className="form-group">
              <input type="text" name="diet" placeholder="" required value={this.state.diet} onChange={this.handleInputChange} />
            </div>

            <div className="form-group">
              <input type="checkbox" value="Agreed" required checked={this.state.mlh === 'Agreed'} onChange={this.handleMLHChange} />I agree to <a href=""> MLH Code of Conduct </a>
            </div>

            <button className="btn btn-default" type="submit">✓ Register</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Signup;