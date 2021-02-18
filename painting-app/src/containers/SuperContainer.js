import React from 'react' 
import RightDynamicPane from './RightDynamicPane.js'
import LeftSideBox from './LeftSideBox.js'
import 'bootstrap/dist/css/bootstrap.min.css'



export default class SuperContainer extends React.Component {

    render(){
        return (
        <div className="super-container">
        <h1>Fun title aligned to the left</h1>
        <LeftSideBox />
        <RightDynamicPane deleteUser={this.props.deleteUser} logout={this.props.logout} userData={this.props.userData} />
        </div>
    );
    }
}