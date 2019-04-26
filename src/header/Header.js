import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '/Users/sayedali/Pictures/login_reg/rebuildops/src/images/hp_logo.png'
class Header extends Component{
    render(){
        return(
            <div className='row'>
                <div className='col-lg'>
                    <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <a className="navbar-brand" href="/homepage"><img src={logo} className='headerimg' /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
         
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav navbar-nav navbar-center">
                            <li className="nav-item active">
                            <a className="nav-link" href="/homepage">Dashboard <span className="sr-only">(current)</span></a>
                            {/* <Link className="nav-link" to='/homepage'>Dashboard</Link> */}
                            </li>
                            </ul>
                        </div>
                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to='/' onClick="{this.logOut.bind(this)}">Logout</Link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;