import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Leftpanel extends Component{
    render(){
        return(
            <div className='col-md-4'>
                <div class="sidenav">
                    
                        <Link className="nav-link">Customer Metadata</Link>
                        <Link className="nav-link">Database Information</Link>
                        <Link className="nav-link">History Information</Link>
                        <Link className="nav-link">Monitoring Template</Link>
                        <Link className="nav-link">Software Information</Link>
                        <Link className="nav-link">VM Information</Link>
               
                </div>

            </div>
        )
    }
}

export default Leftpanel;