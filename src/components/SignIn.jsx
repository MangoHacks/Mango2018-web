import React, { Component } from 'react';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p: 'mango2018',
            value: '',
            component: false
        }
        this.handlelogin = this.handlelogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({ value: e.target.value.toLowerCase() });
    }

    handlelogin(e) {
        e.preventDefault();
        if (this.state.value == '') {
            alert('Please enter a password');
        }
        else {
            if (this.state.value != this.state.p) {
                alert("Wrong password!");
            }
            else {
                if (this.state.value == this.state.p) {
                    this.setState({
                        component: true
                    });
                }
            }
        }
    }
    render() {
        return (
            <div className="login-container">
                <div className="form-group">
                    <form onSubmit={this.handlelogin}>
                        <input type="password" align="center" className="login form-control" placeholder="Password" onChange={this.handleChange} />
                    </form>
                </div>
            </div>
        )
    }
} 