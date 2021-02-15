import './App.css';
import React from 'react'
import Canvas from './components/Canvas.js'
import SuperContainer from './containers/SuperContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './containers/Navbar.js'
import Login from './components/Login.js'
import LoginAndRegister from './containers/LoginAndRegister.js'


export default class App extends React.Component{

  state = {
    userSession: false
}

handleUserSession = (token) => {
  this.setState({
    userSession: true
  })
  sessionStorage.setItem('token', token)
}

  render(){
    return (
    <div className="App">
      
     {/* how to toggle on the SuperContainer after a user logs in? */}
     
     {/* {sessionStorage.getItem('token') == null ? <LoginAndRegister handleUserSession={this.handleUserSession} /> : <SuperContainer />}  */}

     {this.state.userSession === true? <SuperContainer /> : <LoginAndRegister handleUserSession={this.handleUserSession} /> } 
    </div>
  );
  }
}


