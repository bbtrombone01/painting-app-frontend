import React from 'react' 
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Navbar extends React.Component {


    render () {
        return (
            <div>
                <Link to='/paintings/new' className='ui-button'>
                Create New Painting
                </Link>
                <Link to='/profile' className='ui-button'>
                    Edit Profile
                </Link>
                <Link to='/gallery' className='ui-button'>
                All Paintings Gallery
                </Link>
                <Link to='/userpaintings' className='ui-button'>
                Your Paintings
                </Link>
            </div>
        )
    }
}