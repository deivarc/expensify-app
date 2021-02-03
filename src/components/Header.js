import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create</NavLink></li>
        </ul>
    </header>
);

export default Header;