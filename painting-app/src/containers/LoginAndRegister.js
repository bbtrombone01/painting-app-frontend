import React from 'react' 
import Login from '../components/Login.js'
import SignUpForm from '../components/SignUpForm.js'


export default class LoginAndRegister extends React.Component {

    state = {
        toggle: false
    }

    showRegisterForm = () => {
        this.setState(prevState => {
            return {
                toggle: !prevState.toggle
            }
        })
    }
    
    render() {
        return(
            <div>
                <div>
                    <h1>Welcome to Draw It Out!</h1>
                </div>
            {this.state.toggle === false ? <Login showRegisterForm={this.showRegisterForm} handleUserSession={this.props.handleUserSession} /> : <SignUpForm showRegisterForm={this.showRegisterForm} handleUserSession={this.props.handleUserSession}/> }
            </div> 
        )
    }
}