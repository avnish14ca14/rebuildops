import React, { Component } from 'react';
import './customlogin.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            'username': '',
            'password': ''
        };
    }
    changeUsername(e){
        this.setState({username: e.target.value}, function(){});
    }

    changePassword(e){
        this.setState({password: e.target.value}, function(){});
    }

    formSubmit(e){
        e.preventDefault();
        this.props.history.push('/homepage');
        console.log(this.state.username, this.state.password);
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <form className='loginlayout' onSubmit={this.formSubmit.bind(this)}>
                            <h3>Login to iManage OpsDB</h3>
                            <div className='form-group'>
                                <label htmlFor='username'></label>
                                <input type='text' placeholder='Enter your username' className='form-control' id='username' value={this.state.username} onChange={this.changeUsername.bind(this)} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'></label>
                                <input type='password' placeholder='Enter your password' className='form-control' id='password' value={this.state.password} onChange={this.changePassword.bind(this)} />
                            </div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        )
    }
}

export default Login;