import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas.js'
import SuperContainer from './containers/SuperContainer.js'

export default class App extends React.Component{

  render(){
    return (
    <div className="App">
      
     <Canvas />
    </div>
  );
  }
}

