import './App.css';
import React from 'react'
import Canvas from './components/Canvas.js'
import SuperContainer from './containers/SuperContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './containers/Navbar.js'
import Login from './components/Login.js'
import LoginAndRegister from './containers/LoginAndRegister.js'
import {Route} from 'react-router-dom'


export default class App extends React.Component{

  state = {
    userData: null,
}

// this is to grab the same user each time the page refreshes so they don't have to re login
componentDidMount() {
  let token = sessionStorage.getItem('token')
  if (token) {
    fetch('http://localhost:3000/profile', {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      }, 
    })
    .then(resp => resp.json())
    .then(user => this.setState({
      userData: user.user
    }))
  }
}

// if you're using sessionStorage as a conditional in the render, have to set it before setting state to get it to be truthy and re render after state updates.
handleUserSession = (user) => {
  sessionStorage.setItem('token', user.jwt)
  this.setState({
    userData: user,
  })
}

  render(){
    console.log(sessionStorage.getItem('token'))
    return (
    <div className="App">

     {sessionStorage.getItem('token') !== null ? <SuperContainer /> : <LoginAndRegister handleUserSession={this.handleUserSession} /> }    
    </div>
  );
  }
}


