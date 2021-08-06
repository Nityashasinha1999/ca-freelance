/** @format */

import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import teamImg from "../../assets/images/teamImg.png";

export default class apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modal: false,
      responsive: {
        0: {
          items: 1,
          // stagePadding: 30,
          margin: 0,
        },
        450: {
          items: 1,
          stagePadding: 0,
        },
        600: {
          items: 1,
        },
        768: {
          items: 1,

          loop: false,
        },
        999: {
          items: 1,
        },
        1000: {
          items: 2,
          margin: 0,
        },
        1201: {
          items: 2,

          loop: true,
          dots: true,
        },
        1399: {
          items: 2,

          nav: false,

          loop: true,
          dots: true,
        },
      },
    };
  }
  render() {
    return (
      // <OwlCarousel
      //   className='owl-theme'
      //   margin={10}
      //   nav
      //   responsive={this.state.responsive}>
      //   <div class='item'>
      //     <img src={teamImg} alt='teamImg' className='teamImg' />
      //   </div>
      //   <div class='item'>
      //     <img src={teamImg} alt='teamImg' className='teamImg' />
      //   </div>
      //   <div class='item'>
      //     <img src={teamImg} alt='teamImg' className='teamImg' />
      //   </div>
      //   <div class='item'>
      //     <img src={teamImg} alt='teamImg' className='teamImg' />
      //   </div>
      //   <div class='item'>
      //     <img src={teamImg} alt='teamImg' className='teamImg' />
      //   </div>
      // </OwlCarousel>
      <div className='teamBody'>
        <div className='teamBodySec1'>
          <img src={teamImg} alt='teamImg' className='teamImg' />
          <div className='sec2'>
            <p className='name'>Name</p>
            <p className='des'>Designation</p>
            <p className='body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className='teamBodySec1'>
          <img src={teamImg} alt='teamImg' className='teamImg' />
          <div className='sec2'>
            <p className='name'>Name</p>
            <p className='des'>Designation</p>
            <p className='body'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
