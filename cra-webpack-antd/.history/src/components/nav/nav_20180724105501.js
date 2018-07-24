import React from 'react';
import {NavLink} from 'react-router-dom';
const NavBar = ()=>{
    <div>
        
            <NavLink exact to='/'>app page</NavLink>
            <NavLink to='/Home'>home page</NavLink>
            <NavLink to='/Nav'>nav page</NavLink>
       
    </div>
}

export default NavBar;