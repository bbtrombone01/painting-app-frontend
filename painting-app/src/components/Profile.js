import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Profile extends React.Component {

    state = {
       user: {
           username: "",
            tagline: ""
       }
    }

    handleChangeUsername = (e) => {
        this.setState({
            user: {
                ...this.state.user, 
                username: e.target.value
            }
        })
    }

    handleChangeTagline = (e) => {
        this.setState({
            user: {
                ...this.state.user, 
                tagline: e.target.value
            }
        })
    }

    handleUpdate = (e) => {
        e.preventDefault() 
        let updatedUser = this.state.user 
        //this.props.updateUser(updatedUser) 
    }

    // handleUpdate =(e) => {

    //     e.preventDefault()
    //     let user_token = sessionStorage.getItem('token')
    //     fetch(`http://localhost:3000/users/${this.props.userData.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             Authorization: `bearer ${user_token}`,           
    //         }, 
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             tagline: this.state.tagline
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(updated => console.log(updated))
    // }

    render() {
        return(
            <div>
                
            <h2>This is your profile</h2>
            {/* <h3>{this.props.userData.username}</h3> 
            <h3>{this.props.userData.tagline}</h3>  */}
            <div>
            <form onSubmit={(e) => this.handleUpdate(e)}>
                <div className="form-group">
                    <label>Username</label>
                    <input onChange={(e) => this.handleChangeUsername(e)} type="text" className="form-control" placeholder={this.props.userData} />
                </div>

                <div className="form-group">
                    <label>Tag Line</label>
                    <input onChange={(e) => this.handleChangeTagline(e)} type="tag" className="form-control" placeholder={this.props.userData} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Update Profile</button>
                
            </form>
            
            </div> 
            
            </div>
        )
    }
}
