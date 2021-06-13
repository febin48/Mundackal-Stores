import React, { Component } from 'react';
import {regItems} from './regInputItems/Item';
import '../register/register.css';

class Register extends Component {
    state = {  }

    register = () =>{
        
    }

    render() { 
        return (
            <form className="regSection"> 
            <h2>Register</h2>
            {
                regItems.map((item, index)=>{
                    return (
                    <input key={index} className="form-control" autoComplete = {item.autoComplete} type={item.type} name={item.name} placeholder={item.label}/>
                    )
                }) 
            }
            <input type="button" className="btn btn-primary" value="Submit" onClick={this.register} />
            </form>             
        )
    }
}
 
export default Register;