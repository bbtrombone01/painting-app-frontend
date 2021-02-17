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
        e.preventDefault() 
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
        .then(user => { 
            console.log(user)
            this.props.handleUserSession(user)})
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