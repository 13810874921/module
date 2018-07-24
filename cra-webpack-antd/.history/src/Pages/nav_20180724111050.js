import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = ()=>{
    <div>
        <div>
            <NavLink exact to='/'>app page</NavLink>
            <NavLink to='/Nav'>home page</NavLink>
            <NavLink to='/One'>nav page</NavLink>
            <NavLink to='/Two'>nav page</NavLink>
        </div>
    </div>
}

export default NavBar;