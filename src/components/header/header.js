import React, { Component } from 'react';
import '../header/header.css';
import {navItems} from './headerItems/headerItems';
import {Link} from 'react-router-dom';


class Header extends Component{
    state = {
        isLoggedIn : false
    }

    render(){
        return (
            <header>
                <nav className="navbar">
                    <span className="navbar-brand">
                        <img src="/logo.png" alt="" className="navbar-logo"/>Mundackal Stores
                    </span>
                    <ul className="navbar-nav">
                            {   
                                navItems.homeNavs.map((item,index) => {
                                    return (
                                        <li key={index.toString()} className={item.clsName}>
                                            <Link to={item.href}>{item.Label}</Link>
                                        </li>
                                    )
                                })}
                        </ul>
                </nav>
            </header>
        );
    }
}

export default Header;