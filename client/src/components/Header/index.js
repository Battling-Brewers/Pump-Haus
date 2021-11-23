import React from "react";
import logo from "../images/pumphauslogo.png"
import "./header.css"
// import Auth from '../../utils/auth';
import "materialize-css";
import { NavItem, Navbar, Icon} from "react-materialize";
const Header = () => {
  return (
    <Navbar
    className="deep-orange darken-2 head-bar"
    alignLinks="right"
    brand={<a className="brand-logo" href="/"><img className="responsive-img" id="logo" src={logo}/></a>}
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
    draggable: true,
    edge: 'right',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    Home
  </NavItem>
  <NavItem href="">
    Products
  </NavItem>
  <NavItem href="">
    Login
  </NavItem>
  <NavItem href="">
    Cart
  </NavItem>
  
</Navbar>
  );
};

export default Header;
