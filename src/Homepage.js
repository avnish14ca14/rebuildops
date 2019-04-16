import React, { Component } from 'react';
import Header from '../src/header/Header';
import Container from '../src/container/Container';
import Footer from '../src/footer/Footer';

class Homepage extends Component{
    render(){
        return(
            <div className='container'>
                <Header />
                <Container />
                <Footer />
            </div>
        )
    }
}

export default Homepage;