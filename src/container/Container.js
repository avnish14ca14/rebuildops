import React, { Component } from 'react';
import Leftpanel from '../container/leftpanel/Leftpanel';
import Rightpanel from '../container/rightpanel/Rightpanel';

class Container extends Component{
    render(){
        return(
            <div className='row'>
                <Leftpanel />
                <Rightpanel />
            </div>
        )
    }
}

export default Container;