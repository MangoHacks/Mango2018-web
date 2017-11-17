import React, { Component } from 'react';
import { ReactDOM, mountNode } from 'react-dom'
import { Tooltip, Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap'

class SignupModal extends Component {
  constructor(){
    super();
    this.state = {
    showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
}

close() {
    this.setState ({ showModal: false });
}
open() {
    this.setState ({ showModal: true });
}
  render() {
    return (
      <div className="signup-modal">
          <Button className="modal-btn" onClick={this.open}>Register</Button>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header >
                  <Modal.Title>MangoHacks Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                            {/* <form className="attendee-input-form" action="/form" onSubmit={this.signup}>
                                <input type="name" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.handleInputChange}/>
                                <input type="email" name="email" required value={this.state.email} onChange={this.handleInputChange} id="email" placeholder="Email"/>     
                                <input type="radio" name="gender" required value={this.state.gender} onChange={this.handleInputChange} id="gender" placeholder=""/>                         
                                <input type="text" name="school" id="school" placeholder="School" required value={this.state.school} onChange={this.handleInputChange}/>
                                <input type="text" name="major" id="major" placeholder="Major" required value={this.state.major} onChange={this.handleInputChange}/>
                                <input type="radio" name="year" id="year" placeholder="" required value={this.state.year} onChange={this.handleInputChange}/>                            
                                <input type="text" name="diet" id="diet" placeholder="Dietary Restrictions" required value={this.state.diet} onChange={this.handleInputChange}/> 
                                <input type="text" name="github" id="github" placeholder="https://github.com/bobhope" required value={this.state.github} onChange={this.handleInputChange}/>                            
                                <input type="text" name="resume" id="resume" placeholder="" required value={this.state.resume} onChange={this.handleInputChange}/>                          
                                <input type="text" name="time" id="time" placeholder="" required value={this.state.time} onChange={this.handleInputChange}/>      
                                <input type="text" name="mlh" id="mlh" placeholder="" label="MLH Code of Conduct" required value={this.state.mlh} onChange={this.handleInputChange}/>                                                                                                                        
                                <button className="btn btn-default" type="submit" onClick={this.registered}>✓ Register</button> 
                            </form> */}
            </Modal.Body>
            <Modal.Footer>
            <Button className="modal-close" onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
}


export default SignupModal;


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