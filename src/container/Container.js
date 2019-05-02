import React, { Component } from 'react';
import Leftpanel from '../container/leftpanel/Leftpanel';
import Rightpanel from '../container/rightpanel/Rightpanel';

class Container extends Component{
render(){
        return(
            <div className='row'>
                <div className='col-lg-2'>
                    <Leftpanel />
                </div>
                <div className='col-lg-3'>
                    <Rightpanel />
                </div>
            </div>
        )
    
}
}
export default Container;