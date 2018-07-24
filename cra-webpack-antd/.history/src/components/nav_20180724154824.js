import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = ()=>(
    <div>
        <div>
            <NavLink exact to='/'>home page</NavLink>&nbsp;|
            <NavLink to='/One'>one page</NavLink>&nbsp;|
            <NavLink to='/Two'>two page</NavLink>
        </div>
    </div>
)
export default NavBar;
