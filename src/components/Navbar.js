import React from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/hambMenu.svg';
import LogoSvg from '../images/retroLogoNav.svg'

/*S Styled Components*/

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: black;
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    } 
`;

const Logo = styled.i`
    display: block;
    background-image: url(${LogoSvg});
    background-size: contain;
    height: 60px;
    width: 60px;
    cursor: pointer;
    position: absolute;
    transform: translate(-30%, 15%);
    z-index: 100;
    position: fixed;
    top: 0%;
    left: 5%;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        left: 15%;
    } 
`;

const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-70%, 25%);
        background-repeat: no-repeat;
    } 

`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        display: none;
    } 
`;
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

/*E Styled Components*/

const Navbar = () => {
    return (
        <Nav>
           <Logo to="/"></Logo>
           <MenuBars></MenuBars>
           <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
           </NavMenu>
           <NavBtn>
               <Button to="/contact">Get in touch</Button>
           </NavBtn>
        </Nav>
    )
}

export default Navbar
