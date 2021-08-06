/** @format */

import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import teamImg from "../../assets/images/teamImg.png";
import { Col, Row } from "reactstrap";

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

          loop: true,
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

          nav: true,

          loop: false,
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
      <div className='carBlk'>
        {/* <div className='teamBody'>
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
          </div> */}

        {/* <div className='teamBodySec1'>
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
        </div> */}
        <div className='carBlk'>
          <OwlCarousel
            className='owl-theme'
            margin={10}
            // nav
            items={2}
            responsive={this.state.responsive}>
            <div class='item'>
              <div className='teamBodySec1'>
                <img src={teamImg} alt='teamImg' className='teamImg' />
                <div className='sec2'>
                  <p className='name'>Name</p>
                  <p className='des'>Designation</p>
                  <p className='body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='teamBodySec1'>
                <img src={teamImg} alt='teamImg' className='teamImg' />
                <div className='sec2'>
                  <p className='name'>Name</p>
                  <p className='des'>Designation</p>
                  <p className='body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='teamBodySec1'>
                <img src={teamImg} alt='teamImg' className='teamImg' />
                <div className='sec2'>
                  <p className='name'>Name</p>
                  <p className='des'>Designation</p>
                  <p className='body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='teamBodySec1'>
                <img src={teamImg} alt='teamImg' className='teamImg' />
                <div className='sec2'>
                  <p className='name'>Name</p>
                  <p className='des'>Designation</p>
                  <p className='body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            {/* <div class='item'>
              <div className='teamBodySec1'>
                <img src={teamImg} alt='teamImg' className='teamImg' />
                <div className='sec2'>
                  <p className='name'>Name</p>
                  <p className='des'>Designation</p>
                  <p className='body'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div> */}
          </OwlCarousel>
        </div>
        {/* <Row className='justify-content-center align-items-center'>
          <Col md={7} sm={12}>
            <OwlCarousel
              className='owl-theme'
              loop={false}
              margin={30}
              nav={true}
              items={2}
              dots={false}
              responsive={this.state.responsive}
              nav>
              <div className='fitness-element'>
                <div className='item'>
                  <div className='img-blk'></div>
                  <div className='hover-show'>
                    <div className=' d-flex align-items-center justify-content-end flex-column h-100'>
                      <div className='text-center mb-3'>
                        <img src={teamImg} alt='teamImg' className='teamImg' />
                        <h4 className='text-white f-bold mb-2'>
                          Alpha Academy Training Center
                        </h4>
                        <button className='btn btn-yellow'>View Gym</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fitness-element'>
                <div className='item'>
                  <div className='img-blk'></div>
                  <div className='hover-show'>
                    <div className=' d-flex align-items-center justify-content-end flex-column h-100'>
                      <div className='text-center mb-3'>
                        <img src={teamImg} alt='teamImg' className='teamImg' />
                        <h4 className='text-white f-bold mb-2'>
                          Alpha Academy Training Center
                        </h4>
                        <button className='btn btn-yellow'>View Gym</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fitness-element'>
                <div className='item'>
                  <div className='img-blk'></div>
                  <div className='hover-show'>
                    <div className=' d-flex align-items-center justify-content-end flex-column h-100'>
                      <div className='text-center mb-3'>
                        <img src={teamImg} alt='teamImg' className='teamImg' />
                        <h4 className='text-white f-bold mb-2'>
                          Alpha Academy Training Center
                        </h4>
                        <button className='btn btn-yellow'>View Gym</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fitness-element'>
                <div className='item'>
                  <div className='img-blk'></div>
                  <div className='hover-show'>
                    <div className=' d-flex align-items-center justify-content-end flex-column h-100'>
                      <div className='text-center mb-3'>
                        <img src={teamImg} alt='teamImg' className='teamImg' />
                        <h4 className='text-white f-bold mb-2'>
                          Alpha Academy Training Center
                        </h4>
                        <button className='btn btn-yellow'>View Gym</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </Col>
        </Row> */}
      </div>
    );
  }
}
