import React, { Component } from 'react'
import Rightpanel from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/rightpanel/Rightpanel'
import { FetchTable } from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'

class DatabaseInformation extends Component {
constructor(props) {
      super(props)
    
      this.state = {
         result: [],

      }
    }

componentDidMount(){
    
    this.setState(() => {
        
        FetchTable('database_information').then(res => {
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
    const { result } = this.state
    // console.log(result)

    return (
      <div>
       {result ? <Rightpanel result={result} />  : ''}
      </div>
    )
  }
}

export default DatabaseInformation;
