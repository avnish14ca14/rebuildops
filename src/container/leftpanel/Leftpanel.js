import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import {Tables, FetchTable} from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'
// import Homepage from '/Users/sayedali/Pictures/login_reg/rebuildops/src/Homepage'
import Excom from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/Excom'
// import Rightpanel from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/rightpanel/Rightpanel'



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
            //   console.log(res)
            //   console.log(res)
            if(res){
                // console.log(res.data)
                this.setState({
                    tables:res.data
                })
            }
    })
}

    // onClickHandler = (e) =>{
    //     // console.log(e.target.id)
    //     this.setState({
    //           table_name_n: e.target.id,
              
    //         }, () => {
                
    //             const table_name_ops = {
    //                 table_name_n: this.state.table_name_n,
    //             }
    //             // console.log(this.state.table_name)

            // FetchTable(table_name_ops).then(res => {
            //     // console.log(res)
            //     if (res){
            //         this.setState({
            //             result:res.data
            //         })
            //     }
            // })    

    // })
    // }



    render(){
        const {tables, result, table_name_n} = this.state
        // console.log(result)

        var res_data = []
        var res_colum = []
        var v  = Object.values(result)[0]
        for(var key in v) {
        res_colum.push(key);
        }
    
        for(var i=0; i < result.length; i++){
        var s = Object.values(result)[i]
        res_data.push(s)

        }

        return(

            <div className='col-md-4'>
                <div className='Container'>
                
                    <div className="sidenav">
                    
                        <ul>
                        {
                        tables.map((table,id) =>   
                        /* <li className="nav-link" onClick={this.onClickHandler} key={i} id={table.table_name}>{table.table_name}</li> */
                        <li  key={id} className="nav-link"  >
                            <Link  id={table.table_name}  to={`/homepage/${table.table_name}`}>{table.table_name}</Link>
                        </li>
                        )
                        }
                        </ul>
                    </div>
                    
                    <Route exact path={'/homepage/:tablename'} component={Excom} />
                    
                    {/* <Container result={result} res_colum={res_colum} /> : ''} */}
                </div>
                
               {/* < Header table_name={table_name_n} /> */}
            </div>
            
        )
    }
}

export default Leftpanel;