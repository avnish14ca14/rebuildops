import React, { Component } from 'react'
import Rightpanel from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/rightpanel/Rightpanel'
import Container from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/Container'
import { FetchTable } from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'

class AutogenClientidRef extends Component {
constructor(props) {
      super(props)
    
      this.state = {
         result: '',

      }
}

componentDidMount(){
    
    this.setState(() => {
        
        FetchTable('autogen_clientid_ref').then(res => {
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
}
  
    
  render() {
    const { result } = this.state
    // console.log(result)

    return (
      <div>
       {result ? <Rightpanel result={ result } isServer ={true}  />  : ''}
      </div>
    )
  }
}

export default AutogenClientidRef;
