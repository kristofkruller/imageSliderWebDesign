import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';

/*S Styled Components*/
const Nav = styled.nav`
    height: 60px;
    background: red;
`;
const Logo = styled(Link)`
    color: #fff;
`;
const MenuBars = styled.i``;
const NavMenu = styled.div``;
const NavMenuLinks = styled(Link)``;
/*E Styled Components*/

const Navbar = () => {
    return (
        <Nav>
           <Logo to="/">logoPLCHLDR</Logo>
           <MenuBars></MenuBars>
           <NavMenu>
            {menuData.map((item, index) => {
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            })}
           </NavMenu>
           <h1>Navbar</h1> 
        </Nav>
    )
}

export default Navbar
