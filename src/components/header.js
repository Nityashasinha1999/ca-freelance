/** @format */

import React, { useEffect, useState } from "react";
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
  Input,
} from "reactstrap";
import openIcon from "../assets/images/icons/hamburger.png";
import logo from "../assets/images/logo.png";
import close from "../assets/images/icons/close.svg";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (event) => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  // const handleScroll = () => {
  //   if (window.scrollY > 200) {
  //     document.querySelector(".headerWrap").className =
  //       "headerWrap headerscroll";
  //   } else {
  //     document.querySelector(".headerWrap").className = "headerWrap";
  //   }
  // };
  // useEffect(() => {
  //   handleScroll();
  // }, []);
  return (
    <div>
      <div className='container'>
        <Navbar className='d-none-mob'>
          <NavItem href='/'>
            <img src={logo} alt='logo' />
          </NavItem>

          <div className='searchBarWrap'>
            <Input type='text' placeholder='Search' className='searchBar' />
          </div>
          <div className='navFlex'>
            <NavItem>
              <NavLink className='headerLink' href='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='headerLink' href='/'>
                Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='headerLink' href='/'>
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='headerLink' href='/'>
                Contact Us
              </NavLink>
            </NavItem>
          </div>
        </Navbar>
      </div>
      <div className='d-none-desk'>
        <div className='mobNav'>
          <div onClick={toggle} className='wrapNav'>
            <div className='logoMobBlk'>
              <img
                src={openIcon}
                alt='nav'
                className={isOpen ? "d-none" : "d-block"}
              />
              <NavItem href='/'>
                <img src={logo} alt='logo' className='logo' />
              </NavItem>
            </div>
            <div className='searchBarWrap'>
              <Input type='text' placeholder='Search' className='searchBar' />
            </div>
            <img
              src={close}
              alt='nav'
              className={!isOpen ? "d-none" : "d-block"}
            />
          </div>
          <div className={isOpen ? "overlay-nav" : ""}></div>
          {!isOpen ? (
            <p></p>
          ) : (
            <div className={isOpen ? "nav-menu active" : "nav-menu"}>
              <div className='closeWrapNav'>
                <img
                  src={close}
                  alt='nav'
                  className='iconClose'
                  onClick={toggle}
                />
              </div>
              <div className='navbarMobWrap'>
                <NavItem>
                  <NavLink className='headerLink' href='/'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='headerLink' href='/'>
                    Works
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='headerLink' href='/'>
                    Gallery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='headerLink' href='/'>
                    Contact Us
                  </NavLink>
                </NavItem>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
