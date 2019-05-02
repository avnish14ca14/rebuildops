import React, { Component } from 'react';
import { FetchTable } from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'
import {Link, Route, Switch} from 'react-router-dom'
import CustomerMetadata from '../../Tables/CustomerMetadata'

class Rightpanel extends Component{

render(){
        return(

            <div>
                <Route path={'/homepage/:tablename'} component={CustomerMetadata} />
            </div>
        )
    }

}

export default Rightpanel;