import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import firebase from "../../containers/Firebase/Firebase";
import '../../containers/Main/Main.css';

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        isOpen: false
    };
    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                return <Redirect to="/login" />;
            })
            .catch((error) => {
                this.setState({ error: error });
            });
    };

    render() {
        return (
            <div className='App'>
                <div className='navBar'>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">SAASY</NavbarBrand>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/login">Sign In</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <article className="br2 shadow-1 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={this.onNameChange} />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={this.onEmailChange} />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={this.onPasswordChange} />
                                </div>
                            </fieldset>
                            <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={this.handleSubmit} />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}
export default Register;