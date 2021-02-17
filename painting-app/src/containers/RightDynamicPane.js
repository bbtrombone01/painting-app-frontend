
import React from 'react' 
import Canvas from '../components/Canvas.js'
import Profile from '../components/Profile.js'
import Topics from '../components/Topics.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'

export default class RightDynamicPane extends React.Component{
   state = {
       allTopics: []
   }

    componentDidMount(){ 
        let token = sessionStorage.getItem('token')
        fetch('http://127.0.0.1:3000/topics', {
            method: "GET",
            headers: {
              Authorization: `bearer ${token}`,
            }
        })
        .then(resp => resp.json())
        .then(topics => {
            this.setState({
                allTopics: topics
            })
        })

        fetch('http://127.0.0.1:3000/paintings', {
            method: "GET",
            headers: {
              Authorization: `bearer ${token}`,
            }
        })
        .then(resp => resp.json())
        .then(console.log)
        
 
    }
    render(){
      return (
      <div  id="right-pane" className="right-dynamic-pane">
        <Route exact path="/profile" render={() => {
          return <Profile userData={this.props.userData} updateUser={this.props.updateUser} /> 
        }} />
        <Route exact path="/paintings/new" render={() => {
            return <Topics userData={this.props.userData} allTopics={this.state.allTopics}/>}
        }/>
      </div>
    );
    }
  }

  //routes to add
  //my paintings
  //profile
  //should gallery be home?