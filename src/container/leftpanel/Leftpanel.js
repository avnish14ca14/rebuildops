import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import {Tables, FetchTable} from '../../ApiCall'
import  Header  from '../../header/Header'
// import  AutogenClientidRef  from '../../Tables/AutogenClientidRef'
// import AzureStorageCounts  from '../../Tables/AzureStorageCounts'
// import CannedQueries from '../../Tables/CannedQueries'
// import ContactList from '../../Tables/ContactList'
import CustomerMetadata from '../../Tables/CustomerMetadata'
// import DatabaseInformation from '../../Tables/DatabaseInformation'



class Leftpanel extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         tables: [],
         table_name_n: '',
         result: [],
      }
    }
    
    componentDidMount(){
        Tables().then(res => {
            if(res){
                // console.log(res.data)
                this.setState({
                    tables:res.data
                })
            }
    })
    }

    onClickHandler = (e) =>{
        // console.log(e.target.id)
        this.setState({
              table_name_n: e.target.id,
              
            })
    }


    render(){
        const {tables, result, table_name_n} = this.state
        // console.log(result)

        return(

            <div>
            <div className='Container'>
            <div className="sidenav">
            <ul>
            {
            tables.map((table,id) =>   
            <li  key={id} className="nav-link">
                <Link  id={table.table_name} onClick={this.onClickHandler.bind(this)}  to={`/homepage/${table.table_name}`}>{table.table_name}</Link>
            </li>
            )
            }
            </ul>
                    </div>
                    </div>

             {/* <Container result={result} res_colum={res_colum} /> : ''} */}
            < Header table_name={table_name_n} />
            </div>
            
        )
    }
}

export default Leftpanel;