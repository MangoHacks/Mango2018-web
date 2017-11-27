import React, { Component } from 'react';
import Main from './Main';
import Files from 'react-files'
import imaginemango from "../public/img/mangos/signup-mango.svg";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import $ from 'jquery'

let DOMPurify = require('../dist/purify.js');

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: '',
      school: '',
      major: '',
      year: 'Freshman',
      firsttime: '',
      gender: 'Male',
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
  onFilesChange(files) {
    this.setState({ resume: files });
    console.log(files)
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
    let cleanResume = this.state.resume;
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
        resume: cleanResume,
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

    $(document).ready(function () {
      var $emailinput = $('#email');
      var $emaillabel = $('#email-label');
      var $nameinput = $('#name');
      var $namelabel = $('#name-label');
      var $schoolinput = $('#school');
      var $schoollabel = $('#school-label');
      var $majorinput = $('#major');
      var $majorlabel = $('#major-label');
      var $dietinput = $('#diet');
      var $dietlabel = $('#diet-label');
      var $githubinput = $('#github');
      var $githublabel = $('#github-label');

      $emailinput.on('focus', function (event) {
        $emaillabel.addClass('active');
      });
      $emailinput.on('blur', function (event) {
        if ($emailinput.val().trim() == "") {
          $emaillabel.removeClass('active');
        }
      });
      $nameinput.on('focus', function (event) {
        $namelabel.addClass('active');
      });
      $nameinput.on('blur', function (event) {
        if ($nameinput.val().trim() == "") {
          $namelabel.removeClass('active');
        }
      });

      $schoolinput.on('focus', function (event) {
        $schoollabel.addClass('active');
      });
      $schoolinput.on('blur', function (event) {
        if ($schoolinput.val().trim() == "") {
          $schoollabel.removeClass('active');
        }
      });

      $majorinput.on('focus', function (event) {
        $majorlabel.addClass('active');
      });
      $majorinput.on('blur', function (event) {
        if ($majorinput.val().trim() == "") {
          $majorlabel.removeClass('active');
        }
      });

      $dietinput.on('focus', function (event) {
        $dietlabel.addClass('active');
      });
      $dietinput.on('blur', function (event) {
        if ($dietinput.val().trim() == "") {
          $dietlabel.removeClass('active');
        }
      });

      $githubinput.on('focus', function (event) {
        $githublabel.addClass('active');
      });
      $githubinput.on('blur', function (event) {
        if ($githubinput.val().trim() == "") {
          $githublabel.removeClass('active');
        }
      });
    });

    return (
      <div className="signup-bg-color">
        <img src={imaginemango} id="signup-mango"alt=""/>
        <div className="signup">
          <h1>MANGOHACKS</h1>
          <h2>Register for Florida's sweetest Hackathon</h2>

          <form action="/form" onSubmit={this.signup} encType="multipart/form-data">

            <div className="form-group">
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <label id="name-label" for="name">Name</label>
                <input type="text" name="name" id="name" className="name" required value={this.state.name} onChange={this.handleInputChange} />
              </div>
            </div>

            <div className="form-group">
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <label id="email-label" for="email">Email</label>
                <input type="email" id="email" name="email" className="email" required value={this.state.email} onChange={this.handleInputChange} />
              </div>
            </div>

            <div className="form-group">
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <label id="school-label" for="school">School</label>
                <input type="text" list="schools" name="school" className="school" required value={this.state.school} onChange={this.handleInputChange} id="school" />
              </div>
            </div>

            <datalist id="schools">
              <option value="Florida International University" />
            </datalist>

            <div className="form-group">
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <label id="major-label" for="major">Major</label>
                <input type="text" list="majors" name="major" className="major" required value={this.state.major} onChange={this.handleInputChange} id="major" />
              </div>
            </div>

            <datalist id="majors">
              <option value="Computer Science" />
              <option value="Computer Engineering" />
              <option value="Information Technology" />
              <option value="Business" />
              <option value="Electrical Engineering" />
            </datalist>


            <MuiThemeProvider>
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <SelectField
                  floatingLabelText="Grade Level"
                  onChange={this.handleYearChange}>
                  <MenuItem value="Frehsman" primaryText="Freshman" />
                  <MenuItem value="Sophmore" primaryText="Sophmore" />
                  <MenuItem value="Junior" primaryText="Junior" />
                  <MenuItem value="Senior" primaryText="Senior" />
                </SelectField>
              </div>
            </MuiThemeProvider>

            <div className="form-group">
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <label id="diet-label" for="diet">Dietary Restrictions</label>
                <input type="text" name="major" className="diet" required value={this.state.diet} onChange={this.handleInputChange} id="diet" />
              </div>
            </div>

            <MuiThemeProvider>
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <SelectField
                  floatingLabelText="Gender"
                  onChange={this.handleGenderChange}>
                  <MenuItem value="Male" primaryText="Male" />
                  <MenuItem value="Female" primaryText="Female" />
                  <MenuItem value="Other" primaryText="Other" />
                </SelectField>
              </div>
            </MuiThemeProvider>


            {/* <label htmlFor="">First Time?</label>
            <div className="form-group">
              <label htmlFor="">Yes</label>
              <input type="checkbox" value="Yes" checked={this.state.firsttime === 'Yes'} onChange={this.handleFirstTimeChange} />
              <label htmlFor="">No</label>
              <input type="checkbox" value="No" checked={this.state.firsttime === 'No'} onChange={this.handleFirstTimeChange} />
            </div> */}

            <MuiThemeProvider>
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <SelectField
                  floatingLabelText="Shirt Size"
                  onChange={this.handleSizeChange}>
                  <MenuItem value="Small" primaryText="Small" />
                  <MenuItem value="Medium" primaryText="Medium" />
                  <MenuItem value="Large" primaryText="Large" />
                  <MenuItem value="X-Large" primaryText="X-Large" />
                </SelectField>
              </div>
            </MuiThemeProvider>


            <div className="form-group">
              <div class="input-field inline col s12" type="text" tabindex="-1" >
                <label id="github-label" for="github">GitHub Link</label>
                <input type="url" name="github" className="github" required value={this.state.github} onChange={this.handleInputChange} id="github" />
              </div>
            </div>
            
            {/* <div className="resume">
              <Files
                name="resume"
                type="file"
                className='files-dropzone'
                onChange={this.onFilesChange}
                accepts={['pdf', 'image/png', 'text/plain', 'audio/*']}
                maxFiles={1}
                maxFileSize={10000000}
                minFileSize={0}
                clickable
              >
                <button>Upload Resume</button>
              </Files>
              <input type='file' ref="file" name="file" fileTypes={'.pdf'} value={this.state.resume} />
            </div>
            <div className="form-group">
              <input type="checkbox" value="Agreed" required checked={this.state.mlh === 'Agreed'} onChange={this.handleMLHChange} />I agree to <a href=""> MLH Code of Conduct </a>
            </div>
            <div className="">

            </div> */}
            <button className="btn btn-default" className="btn signup-btn" type="submit">Register</button>

          </form>
        </div>
      </div>
      // </div>

    );
  }
}


export default Signup;
