import React, { Component } from 'react'
import Rightpanel from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/rightpanel/Rightpanel'
import { FetchTable } from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'

class ContactList extends Component {
constructor(props) {
      super(props)
    
      this.state = {
         result: [],
         results: [],
         table_name: ''

      }
    }

componentWillMount(){ 
    this.setState(() => {
        
        FetchTable('contact_list').then(res => {
                // console.log(res)
                if (res){
                    this.setState({
                        result: res.data
                    })
                    // console.log(res.data)
                }
            })
        }
            
                
    )
    return false
}
  
    
  render() {
    // const { result } = this.state
    // console.log(result)

    return (
      <div>
       {this.state.result ? <Rightpanel result={this.state.result} />  : ''}
      </div>
    )
  }
}

export default ContactList;
