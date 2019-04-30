import React, { Component } from 'react';
import Leftpanel from '../container/leftpanel/Leftpanel';
import Rightpanel from '../container/rightpanel/Rightpanel';

class Container extends Component{
    render(){
        // const results = this.props.result;
        // const res_colum = this.props.res_colum;
        return(
            <div className='row'>
                <div className='col-lg-3'>
                    <Leftpanel />
                    </div>
                    <div className='col-lg-3'>
                    <Rightpanel/>
                </div>
            </div>
        )
    }
}

export default Container;