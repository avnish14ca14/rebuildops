import React, { Component } from 'react';
import Header from '../src/header/Header';
import Container from '../src/container/Container';
import Footer from '../src/footer/Footer';

class Homepage extends Component{
    

    render(){
        // const {match : {params}} = this.props
        // // // const results = this.props.result;
        // console.log(params.tablename);
        
        
        return(
            <div className='container-fluid'>
                <Header />
                <Container />
                <Footer />
            </div>
        )
    }
}

export default Homepage;