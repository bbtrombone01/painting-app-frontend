
import React from 'react' 
import Canvas from '../components/Canvas.js'
import Profile from '../components/Profile.js'
import Topics from '../components/Topics.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'

export default class RightDynamicPane extends React.Component{

    render(){
      return (
      <div  id="right-pane" className="right-dynamic-pane">
        <Route exact path="/paintings/new" component={Topics}/>
        <Route exact path="/profile" render={() => {
          return <Profile userData={this.props.userData} updateUser={this.props.updateUser} /> 
        }} />
       {/* <Canvas /> */}
      </div>
    );
    }
  }

  //routes to add
  //my paintings
  //profile
  //should gallery be home?