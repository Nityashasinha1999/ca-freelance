/** @format */

import React, { Component, Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import Expand from "react-expand-animated";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ca from "../assets/images/ca.png";
import video from "../assets/images/videos.png";
import teamImg from "../assets/images/teamImg.png";
import close from "../assets/images/icons/close.svg";
import images from "../assets/images/images.png";
import { Container, Row, Col } from "reactstrap";
import about1 from "../assets/images/about1.png";

// ....

// className "owl-theme" is optional
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
          items: 1,
          margin: 0,
        },
        1201: {
          items: 1,

          loop: true,
          dots: true,
        },
        1399: {
          items: 1,

          nav: false,

          loop: true,
          dots: true,
        },
      },
    };
  }
  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };
  render() {
    const styles = {
      open: { background: "#ecf0f1" },
    };
    const transitions = ["height", "opacity", "background"];
    return (
      <div className='home'>
        <div className='floatIcons'>
          <div className='chatBot'>
            <div className='boxToggle'>
              <button
                onClick={this.toggle}
                className={this.state.open ? "d-none " : "d-block"}>
                open
              </button>
            </div>

            {/* <Expand
            open={this.state.open}
            duration={1000}
            styles={styles}
            transitions={transitions}>
            <div className='expandBoxes'>
              <div className='boxExpand'>Hello</div>
            </div>
          </Expand> */}
            <div className={this.state.open ? "chatBotBox" : "d-none"}>
              <div className='cbWrap'>
                <p>
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
                <img
                  src={close}
                  alt='close'
                  onClick={this.toggle}
                  className={this.state.open ? "closeChat " : "d-none"}
                />
              </div>
            </div>
          </div>
          <div className='float-wtsapp'>
            <link
              rel='stylesheet'
              href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'
            />
            <a
              href='https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.'
              class='float'
              target='_blank'>
              <i class='fa fa-whatsapp my-float'></i>
            </a>
          </div>
        </div>
        <OwlCarousel
          className='owl-theme'
          loop
          margin={10}
          //   smartSpeed={750}
          items={1}
          dots={true}
          responsive={this.state.responsive}>
          <div class='itemBanner'>
            {/* <img src={ca} alt="ca"/> */}
            <div className='container'>
              <p className='bannerText'>
                We Got All Your
                <br />
                <span>Accounting Needs Covered</span>
              </p>
              <div className='enquiryWrap'>
                <button className='enquiry'>Enquire Now </button>
              </div>
            </div>
          </div>
          <div class='itemBanner'>
            <div className='container'>
              <p className='bannerText'>
                We Got All Your
                <br />
                <span>Accounting Needs Covered</span>
              </p>
              <div className='enquiryWrap'>
                <button className='enquiry'>Enquire Now </button>
              </div>
            </div>
          </div>
          <div class='itemBanner'>
            <div className='container'>
              <p className='bannerText'>
                We Got All Your
                <br />
                <span>Accounting Needs Covered</span>
              </p>
              <div className='enquiryWrap'>
                <button className='enquiry'>Enquire Now </button>
              </div>
            </div>
          </div>
        </OwlCarousel>
        {/* //about us */}

        <div className='aboutWrap'>
          <Container>
            <div className='aboutUs'>
              <Row className='gx-5'>
                <Col sm={12} md={12} lg={4}>
                  <div className='aboutImg'>
                    <img src={about1} alt='about' className='img-fluid' />
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                  <p className='headingAbt'>About Us</p>
                  <p className='detailAbt'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>
              </Row>
            </div>
            <div className='vission'>
              <p className='headingVission'>Our Vission Mission</p>
              <p className='detailVission'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className='company'>
              <p className='headingCompany'>Company Details</p>
              <div className='companyBody'>
                <div className='d-flex bodyStart'>
                  <div className='companyBox1'>
                    <p className='sec1'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s.
                    </p>
                  </div>
                  <div className='companyBox'>
                    <img src={images} alt='images' />
                  </div>
                  <div className='companyBox'>
                    <img src={video} alt='images' />
                  </div>
                </div>
              </div>
            </div>
            <div className='team'>
              <p className='headingTeam'>Our Team</p>
              <div className='teamBody'>
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
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default Home;
