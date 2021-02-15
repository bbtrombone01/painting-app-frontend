import './App.css';
import React from 'react'
import Canvas from './components/Canvas.js'
import SuperContainer from './containers/SuperContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './containers/Navbar.js'
import Login from './components/Login.js'
import LoginAndRegister from './containers/LoginAndRegister.js'


export default class App extends React.Component{

  render(){
    return (
    <div className="App">
      
     <SuperContainer />
     <LoginAndRegister /> 
    </div>
  );
  }
}


