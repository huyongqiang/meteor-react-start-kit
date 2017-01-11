/**
 * Created by wangdi on 9/1/17.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import './styles/header.css';

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="logo">
                    <Link to="/"><img src="/img/logo.png" height={50}/></Link>
                </div>
                <div className="navigation">
                    <ul role="nav">
                        <li><Link to="/news" activeClassName="active-link">News</Link></li>
                        <li><Link to="/about" activeClassName="active-link">About</Link></li>
                        <li><Link to="/admin" activeClassName="active-link">Admin</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}