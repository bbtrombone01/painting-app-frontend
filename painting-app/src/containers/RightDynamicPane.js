
import React from 'react' 
import Canvas from '../components/Canvas.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class RightDynamicPain extends React.Component{

    render(){
      return (
      <div  id="right-pane" className="right-dynamic-pane">
        
       <Canvas />
      </div>
    );
    }
  }