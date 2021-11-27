import React from "react";
import logo from "../images/pumphauslogo.png"
// import Auth from '../../utils/auth';
import "materialize-css";
import "./header.css"
import { NavItem, Navbar, Icon} from "react-materialize";

const Header = () => {
  return (
    <Navbar
    className="deep-orange darken-2 head-bar"
    alignLinks="right"
    brand={<a className="brand-logo center" href="/"><img className="responsive-img" id="logo" src={logo}/></a>}
    id="mobile-nav"
    menuIcon={<Icon id="nav-menu">menu</Icon>}
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
    <h4>Home</h4>
  </NavItem>
  <NavItem href="">
  <h4>Products</h4>
  </NavItem>
  <NavItem href="">
  <h4>Login</h4>
  </NavItem>
  <NavItem href="">
  <h4>Cart</h4>
  </NavItem>
  
</Navbar>
  );
};

export default Header;
