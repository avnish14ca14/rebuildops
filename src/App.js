import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './loginpage/Login';
import Homepage from '../src/Homepage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Login}></Route>
          <Route path='/homepage' component={Homepage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
