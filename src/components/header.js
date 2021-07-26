import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input
} from 'reactstrap';
import logo from "../assets/images/logo.png"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
   <Navbar>
       <NavItem href="/"><img src={logo} alt="logo"/></NavItem>
       
     
                    <div className="searchBarWrap">
                        <Input type="text" placeholder="Search" className="searchBar"/>
                    </div>
                    <div className="navFlex">
       <NavItem>
           <NavLink className="headerLink" href="/">Home</NavLink>
       </NavItem>
       <NavItem>
           <NavLink className="headerLink" href="/">Works</NavLink>
       </NavItem>
       <NavItem>
           <NavLink className="headerLink" href="/">Gallery</NavLink>
       </NavItem>
       <NavItem>
           <NavLink className="headerLink" href="/">Contact Us</NavLink>
       </NavItem>
       </div>
   </Navbar>
    </div>
  );
}

export default Header;