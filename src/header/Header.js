import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '/Users/sayedali/Pictures/login_reg/rebuildops/src/images/hp_logo.png'



class Header extends Component{
    render(){
        return(
            <div className='row'>
                <div className='col-lg'>
                    <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark fixed-top">
                        <div className='col-lg-3'>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <a className="navbar-brand" href="/homepage"><img src={logo} className='headerimg' alt=""/></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className='container'>
                                <ul className="nav navbar-nav navbar-center">
                                <li className="nav-item active">
                                <a className="nav-link" href="/homepage">OpsConfigDB <span className="sr-only">(current)</span></a>
                                {/* <Link className="nav-link" to='/homepage'>Dashboard</Link> */}
                                </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 centertext'>
                          {this.props.table_name  ?<h1>Selected : {this.props.table_name }</h1> : ''}
                        </div>
                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 col-lg-3">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to='/'>Logout</Link>
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