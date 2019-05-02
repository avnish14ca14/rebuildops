import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Rightpanel from '/Users/sayedali/Pictures/login_reg/rebuildops/src/container/rightpanel/Rightpanel'
import { FetchTable } from '/Users/sayedali/Pictures/login_reg/rebuildops/src/ApiCall'
import Table, {Thead, Tbody, Tr, Th, Td} from "react-row-select-table"
// import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from 'mdbreact';



export default function CustomerMetadata(props) {
  // Setting initial state
  const initialUserState = {
    result: {},
    loading: true,
  }

  // Getter and setter for user state
  const [result, setUser] = useState(initialUserState)
  

  // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
  useEffect(() => {
    
    const getUser = async () => {
      // console.log(props.match.params.tablename)
      // Pass our param (:id) to the API call
      const { data } = await axios(`/api/v1/${props.match.params.tablename}`)
      

      // Update state
      setUser(data)
    }

    // Invoke the async function
    getUser()
  }, [props.match.params.tablename]) // Don't forget the `[]`, which will prevent useEffect from running in an infinite loop

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
        console.log(v)

         let tableHeaders = (<Thead>
        <Tr>
            {res_colum.map((column, id)  => 
             <Th className="text" key={id}>{column}</Th>)}
        </Tr>
        </Thead>)

        let tableBody = res_data.map((row, i) => 
            <Tr key={i}>
            {res_colum.map((column, id) => 
             <Td key={id}>{row[column]}</Td>)}
            </Tr>);

  // Return a table with some data from the API.
  return (
          <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-4'>
              <div id='table-wrapper'>
              <div id='table-scroll'>
              {/* <table id="to-table" className="table table-striped"> */}
              <Table onCheck={value => console.log(value)} id="to-table" >
              { tableHeaders}
              <Tbody>
              {tableBody}
              </Tbody>
              </Table>

    
              </div> 
              </div>
              </div>
              <div className="col-lg-4">
              <h1>hello</h1>
              </div>
            </div>
)
}




// class CustomerMetadata extends PureComponent {


//     constructor(props) {
//       super(props)
    
//       this.state = {
//          result: [],
//          results: [],

//       }
//     }


// // componentWillUpdate(nextProps, nextState) {
// //      if(this.state.result == nextState.result) {
// //           return FetchTable(this.props.match.params.tablename).then(res => {
// //                 // console.log(res)
// //                 if (res){
// //                    this.setState({
// //                      result: res.data
// //                    }
// //               )}
                  
// //                 })
// //      }
// //      return true
// // }
//     // componentWillUpdate(){
//     //   FetchTable(this.props.match.params.tablename).then(res => {
//     //             // console.log(res)
//     //             if (res){
//     //                this.setState({
//     //                  result: res.data
//     //                }
//     //           )}
                  
//     //             })
//     // }

// componentDidMount = () =>{
//   console.log(this.state.result);
//   // console.log(prevState)
//   // if(prevState.result === this.state.result){
//       return FetchTable(this.props.match.params.tablename).then(res => {
//                 // console.log(res)
//                 if (res){
//                    this.setState({
//                      result: res.data
//                    }
//               )}
                  
//                 })
//   // }

// }
    
// render() {
//       const {result} = this.state
//       console.log(this.props)
       
//         // const {match : {params}} = this.props
//         var res_data = []
//         var res_colum = []
//         var v  = Object.values(result)[0]
//         for(var key in v) {
//         res_colum.push(key);
//         }
        
//         for(var i=0; i < result.length; i++){
//         var s = Object.values(result)[i]
//         res_data.push(s)

//         }
//         console.log(v)

//         // const res_colum = this.props.res_colum;

//         // console.log(selectQuery)
//         let tableHeaders = (<thead>
//         <tr>
//             {res_colum.map((column, id)  => 
//              <th className="text" key={id}>{column}</th>)}
//         </tr>
//         </thead>);

//         let tableBody = result.map((row, i) => 
//             <tr key={i}>
//             {res_colum.map((column, id) => 
//              <td key={id}>{row[column]}</td>)}
//             </tr>);
//         console.log(this.props.value)

//     return (
//           <div className='row'>
//           <div className='col-lg-3'></div>
//            <div className='col-lg-4'>
//             <div id='table-wrapper'>
//             <div id='table-scroll'>
            
//               <table id="to-table">
//               { tableHeaders}
//               <tbody>
//               {tableBody}
//               </tbody>
//               </table>
              

//               </div> 
//               </div>
//               </div>
//             </div>
//     )
//   }
// }

// export default CustomerMetadata
