import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Login extends React.Component {
    render() {
        return (
            <div className="form-container"> 
            <form>
                <h3>Please Sign In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <button  onClick={this.props.showRegisterForm} className="btn btn-primary btn-block">Create an Account?</button>
            </form>
            </div>
        );
    }
}