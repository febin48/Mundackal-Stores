import React, { Component } from 'react';
import '../login/login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    state = { 
        username: '',
        password: ''
    }
    
    changeHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    login = () =>{
        //API call goes here
    }


    render() { 
        return (
            <div className="loginSection">
                <h2>Login</h2>
                <form>
                    <input type="text" className="form-control" name="username" onChange={this.changeHandler} autoComplete="off" placeholder="Enter username" required />
                    <input type="password" className="form-control" name="password" onChange={this.changeHandler} placeholder="Password" required />
                    <input type="button" className="btn btn-primary" value="Submit" onClick={this.login} />
                </form>
                <Link className="registerlink" to='/register' >Register</Link>
            </div>
         );
    }
}
 
export default Login;