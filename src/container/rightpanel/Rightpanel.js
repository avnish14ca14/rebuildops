import React, { Component } from 'react';
import { FetchTable } from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'

class Rightpanel extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    
    render(){
        const result = this.props.result;
        console.log(result)
       
        // const {match : {params}} = this.props
        // const results = this.props.result;
        // const res_colum = this.props.res_colum;

        // // console.log(selectQuery)
        // let tableHeaders = (<thead>
        // <tr>
        //     {res_colum.map(function(column) {
        //     return <th>{column}</th>; })}
        // </tr>
        // </thead>);

        // let tableBody = results.map(function(row) {
        //     return (
        //     <tr>
        //     {res_colum.map(function(column) {
        //         return <td>{row[column]}</td>; })}
        //     </tr>); });
        // console.log(this.props.value)
        return(
            <div className='row'>
                <div className='col-lg-4'>
                    <div className="excom">
                    {/* <h1>Hello World</h1> */}
                    {/* <div className='table-container'>
                        <table className="table table-bordered table-hover" width="100%" id="to-table">
                            {tableHeaders}
                            <tbody>
                            {tableBody}
                            </tbody>
                        </table>
                    </div> */}
        
                    <h1>{this.props.value}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rightpanel;