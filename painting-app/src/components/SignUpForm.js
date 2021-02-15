import React, { Component } from "react";

export default class SignUpForm extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <button  onClick={this.props.showRegisterForm} className="btn btn-primary btn-block">Already registered?</button>
            </form>
        );
    }
}