import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = ()=>{
    <div>
        <div>
            <NavLink exact to='/'>home page</NavLink>
            <NavLink to='/Nav'>nav page</NavLink>
            <NavLink to='/One'>one page</NavLink>
            <NavLink to='/Two'>two page</NavLink>
        </div>
    </div>
}

export default NavBar;