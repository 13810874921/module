import React from 'react';
import {Navlink} from 'react-router-dom';
const NavBar = ()=>{
    <div>
        <div>
            <Navlink exact to='/'>app page</Navlink>
            <Navlink to='/Home'>home page</Navlink>
            <Navlink to='/Nav'>nav page</Navlink>
        </div>
    </div>
}

export default NavBar;