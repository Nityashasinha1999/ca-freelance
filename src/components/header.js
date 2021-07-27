/** @format */

import React, { Fragment, useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavItem, Input, Container } from "reactstrap";
import openIcon from "../assets/images/icons/hamburger.png";
import logo from "../assets/images/logo.png";
import close from "../assets/images/icons/close.svg";
import Fade from "react-reveal/Fade";

const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (event) => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };

  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Navbar className='d-none-mob'>
          <Container>
            <NavItem href='/'>
              <img src={logo} alt='logo' />
            </NavItem>

            <div className='searchBarWrap'>
              <Input type='text' placeholder='Search' className='searchBar' />
            </div>
            <div className='navFlex'>
              <NavItem>
                <NavLink
                  exact
                  to='/'
                  className='headerLink'
                  activeClassName='active'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/work'
                  className='headerLink'
                  activeClassName='active'>
                  Works
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/gallery'
                  className='headerLink'
                  activeClassName='active'>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  exact
                  to='/login'
                  className='headerLink'
                  activeClassName='active'>
                  Contact Us
                </NavLink>
              </NavItem>
            </div>
          </Container>
        </Navbar>
      </div>
      <div
        className={`d-none-desk sticky-wrapper${isSticky ? " sticky" : ""}`}
        ref={ref}>
        <div className='mobNav'>
          <div className='wrapNav'>
            <div className='logoMobBlk'>
              <NavItem href='/'>
                <img src={logo} alt='logo' className='logo' />
              </NavItem>
            </div>
            <div className='searchBarWrap'>
              <Input type='text' placeholder='Search' className='searchBar' />
            </div>
            <img
              src={openIcon}
              alt='nav'
              onClick={toggle}
              className={isOpen ? "d-none ham" : "d-block"}
            />
            <img
              src={close}
              alt='nav'
              onClick={toggle}
              className={!isOpen ? "d-none ham" : "d-block"}
            />
          </div>
          <div className={isOpen ? "overlay-nav" : ""}></div>
          {!isOpen ? (
            <p></p>
          ) : (
            <Fade left>
              <div className={isOpen ? "nav-menu active" : "nav-menu"}>
                <div className='closeWrapNav'>
                  <img
                    src={close}
                    alt='nav'
                    className='iconClose'
                    onClick={toggle}
                  />
                </div>
                <Fade left>
                  <div className='navbarMobWrap'>
                    <NavItem>
                      <NavLink
                        exact
                        to='/'
                        className='headerLink'
                        activeClassName='active'>
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        exact
                        to='/work'
                        className='headerLink'
                        activeClassName='active'>
                        Works
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        exact
                        to='/gallery'
                        className='headerLink'
                        activeClassName='active'>
                        Gallery
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        exact
                        to='/login'
                        className='headerLink'
                        activeClassName='active'>
                        Contact Us
                      </NavLink>
                    </NavItem>
                  </div>
                </Fade>
              </div>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
