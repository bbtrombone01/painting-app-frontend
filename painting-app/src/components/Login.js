import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Login extends React.Component {

    // state = {
    //     user: {
    //         username: "", 
    //         password: ""
    //     }
    // }

    // handleChangeUsername = (e) => {
    //     this.setState({
    //         user: {
    //             ...this.state.user, 
    //             username: e.target.value
    //         }
    //     })
    // }

    // handleChangePassword = (e) => {
    //     this.setState({
    //         user: {
    //             ...this.state.user, 
    //             password: e.target.value
    //         }
    //     })
    // }


    state = {
            username: "", 
            password: ""
    }

    handleChangeUsername = (e) => {
        this.setState({
           username: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = (e) => {
        // need to figure out how to pass the token or be able to grab it from the backend 
        e.preventDefault() 
        //let login_user = this.state.user 
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password

            })
        })
        .then(resp => resp.json())
        // Able to grab token from loggedInUser.jwt and can set it to state or sessionStorage
        .then(loggedInUser => console.log(loggedInUser.jwt, loggedInUser.user.username))
    }

    render() {
        return (
            <div className="form-container"> 
            <form onSubmit={(e) => this.handleLogin(e)}>
                <h3>Please Sign In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e) => this.handleChangeUsername(e)} type="username" className="form-control" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e) => this.handleChangePassword(e)} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                
            </form>

            <button  onClick={this.props.showRegisterForm} className="btn btn-primary btn-block">Create an Account?</button>
            </div>
        );
    }
}