/** @format */

import React from "react";
import footer from "../assets/images/footer.png";
import fb from "../assets/images/icons/fb.png";
import twitter from "../assets/images/icons/twitter.png";
import instagram from "../assets/images/icons/instagram.png";
import { Input } from "reactstrap";

function Footer() {
  return (
    <div className='footerWrap'>
      <div className='container'>
        <div className='fstart d-none-mob'>
          <div className='fs1'>
            <p className='title'>About</p>
            <div className='fbwrap mt-3'>
              <p className='aboutText'>
                We are prominent Chartered Accountants in India. We offer
                accounting services India.
              </p>
              <p className='copyright mt-5'>
                © 2021 Suryashtakam . All rights reserved.
              </p>
            </div>
          </div>
          <div className='fs1'>
            <p className='title text-center'>Services</p>
            <p className='aboutText mt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className='fs1'>
            <p className='title text-center'>Gallery</p>
            <img src={footer} alt='footer' className='mt-3' />
          </div>
          <div className='fs1'>
            {/* <p className='title text-center'>Search</p>
            <div className='searchBarWrap'>
              <Input type='text' placeholder='Search' className='searchBar' />
            </div> */}
            <div>
              <p className='followUs mt-3 text-center'>Follow Us</p>
              <div className='social-links mt-3'>
                <img src={fb} alt='fb' />
                <img src={twitter} alt='fb' />
                <img src={instagram} alt='fb' />
              </div>
            </div>
          </div>
        </div>
        <div className='fstart d-none-desk'>
          <div className='mob-footer'>
            <div className='fs1'>
              <p className='title'>About</p>
              <div className='fbwrap'>
                <p className='aboutText'>
                  We are prominent Chartered Accountants in India. We offer
                  accounting services India.
                </p>
              </div>
            </div>
            {/* <div className='fs1'>
              <p className='title text-center'>Search</p>
              <div className='searchBarWrap'>
                <Input type='text' placeholder='Search' className='searchBar' />
              </div>
            </div> */}
          </div>
          <div className='mob-footer'>
            <div className='fs1'>
              <p className='title text-center'>Gallery</p>
              <img src={footer} alt='footer' className='galFooter' />
            </div>
          </div>
          <div className='mob-footer'>
            <div className='fs1'>
              <p className='title text-center'>Services</p>
              <p className='aboutText'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className='title'>Follow Us</p>
              <div className='social-links'>
                <img src={fb} alt='fb' />
                <img src={twitter} alt='fb' />
                <img src={instagram} alt='fb' />
              </div>
              <p className='copyright'>
                © 2021 Suryashtakam . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
