import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo
    // NavIcon,
    // MobileIcon,
    // NavMenu,
    // NavItem,
    // NavItemBtn,
    // NavLinks,
    // NavBtnLink
  } from './NavbarElements';
const Navbar = () => {
    return (
        <>
            <Nav>
                
                    <NavbarContainer>
                    <NavLogo to= '/'>
                    bucci
                    </NavLogo>
                    </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
