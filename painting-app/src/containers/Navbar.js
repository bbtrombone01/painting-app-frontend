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
                    Profile
                </Link>
                <Link to='/gallery' className='ui-button'>
                All Paintings Gallery
                </Link>
                <Link to='/userpaintings' className='ui-button'>
                Your Paintings
                </Link>
                <Link to='/about' className='ui-button'>
                About Us
                </Link>
            </div>
        )
    }
}