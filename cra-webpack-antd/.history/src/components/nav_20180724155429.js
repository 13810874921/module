import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/nav.css';
const NavBar = ()=>(
    <div>
        <div>
            <NavLink exact to='/' className='active'>home page</NavLink>&nbsp;|
            <NavLink to='/One'>one page</NavLink>&nbsp;|
            <NavLink to='/Two'>two page</NavLink>
        </div>
    </div>
)
export default NavBar;
