/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slide from "react-reveal/Slide";
import teamImg from "../assets/images/teamImg.png";
import close from "../assets/images/icons/close.svg";
import serviceBot from "../assets/images/icons/serviceBot.png";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import about1 from "../assets/images/about2.png";
import Apps from "../components/homeBlk/teamCarousel";

// ....

// className "owl-theme" is optional
class Home extends React.Component {
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
      team: {
        0: {
          items: 0,
          dots: true,
          loop: false,
          // stagePadding: 30,
          margin: 0,
        },
        450: {
          items: 0,
          loop: false,
          stagePadding: 0,
        },
        600: {
          items: 1,
          loop: false,
        },
        768: {
          items: 1,

          loop: false,
        },
        999: {
          items: 1,
        },
        1000: {
          items: 1,
          margin: 0,
        },
        1201: {
          items: 2,

          loop: true,
          dots: true,
        },
        1399: {
          items: 2,
          stagePadding: 40,
          nav: false,
          margin: 60,
          loop: false,
          dots: true,
        },
      },
    };
  }
  toggle = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
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
                className={this.state.open ? "d-none " : "d-block botbtn"}>
                <img src={serviceBot} alt='bot' className='bot' />
              </button>
            </div>
            <div className={this.state.open ? "chatBotBox" : "d-none"}>
              <div className='cbWrap'>
                <p className='cbWrapHeading'>
                  Hi, Click on each services for more details!
                </p>
                <ul>
                  <li>
                    <a href='/services'>
                      {" "}
                      Supply of security man power &amp; recruitment agency
                    </a>
                  </li>
                  <li>
                    <a href='/services'>
                      {" "}
                      Staff recruitment for banking and non banking corporate
                      companies and government agencies.
                    </a>
                  </li>
                  <li>
                    <a href='/services'>
                      Digital sales, marketing, promotion, other services
                    </a>
                  </li>
                  <li>
                    <a href='/services'>
                      {" "}
                      Online, poster, hording advertisement agency to banking
                      and non banking corporates companies and government
                      agencies
                    </a>
                  </li>
                  <li>
                    <a href='/services'>
                      {" "}
                      Tangible and intangible property valuation services
                    </a>
                  </li>
                  <li>
                    <a href='/services'>
                      {" "}
                      Government or private work contractor and job work
                    </a>
                  </li>
                </ul>
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
                <button
                  className='enquiry'
                  onClick={this.toggleModal}
                  data-toggle='modal'
                  data-target='#exampleModalCenter'>
                  Enquire Now{" "}
                </button>
              </div>
            </div>
          </div>
          <div class='itemBannerHome'>
            <div className='container'>
              <p className='bannerText'>
                We Focus On Helping Clients Design And <br />
                <span>Buid Tomorrow’s Organization</span>
              </p>
              <div className='enquiryWrap'>
                <button
                  className='enquiry'
                  onClick={this.toggleModal}
                  data-toggle='modal'
                  data-target='#exampleModalCenter'>
                  Enquire Now{" "}
                </button>
              </div>
            </div>
          </div>
        </OwlCarousel>
        {/* //about us */}

        <div className='aboutWrap'>
          <Container>
            <Slide bottom>
              <div className='aboutUs'>
                <Row className='gx-5'>
                  <Col sm={12} md={12} lg={4}>
                    <div className='aboutImg'>
                      <img src={about1} alt='about' className='img-fluid' />
                    </div>
                  </Col>
                  <Col sm={12} md={12} lg={6} className='blk-home'>
                    <p className='headingAbt'>About Us</p>
                    <Fade left>
                      <hr className='hrLine' />
                    </Fade>
                    <p className='detailAbt'>
                      We are prominent Chartered Accountants in India. We offer
                      services and other major cities in India, like Auditing,
                      Company formation in India, Business Taxation, Direct and
                      Indirect Taxation, International Taxation, Starting
                      business in India, registration of foreign companies,
                      transfer pricing, Goods &amp; Services Tax (GST), Company
                      Law Consultancy, NRI Taxation, Startup Services and
                      Book-Keeping &amp; Outsourcing Services, Valuations and
                      Insolvency Advisory Services.
                    </p>
                  </Col>
                </Row>
              </div>
            </Slide>
            <Slide bottom>
              <div className='vissionWrap'>
                <div className='vission blk-home'>
                  <p className='headingVission'>Our Vission</p>
                  <Fade left>
                    <hr className='hrLineVision' />
                  </Fade>
                  <p className='detailVission'>
                    Our firm continuously strives to be the Premier Accounting
                    and Consultancy firm that provides excellent service to our
                    clients and an excellent quality of life for our associates.
                    Our Vision is to establish as a Full-Services firm by 2025.
                  </p>
                </div>
                <div className='vission blk-home'>
                  <p className='headingVission'>Our Mission</p>
                  <Fade left>
                    <hr className='hrLineVision' />
                  </Fade>
                  <p className='detailVission'>
                    We will predominantly work with organisations in the
                    charitable and voluntary sectors as partners to help them
                    achieve their desired outcomes. Our Mission is to provide
                    clients with a ‘One-Stop Solution’ for all their business,
                    financial and regulatory requirements.We mainly focus on
                    ‘Experience, Expertise and Efficiency’ .
                  </p>
                </div>
              </div>
            </Slide>
            <Slide bottom>
              <div className='company'>
                <p className='headingCompany'>Company Details</p>
                <Fade left>
                  <hr className='hrLineCompany' />
                </Fade>
                <div className='companyBody'>
                  <div className='d-flex bodyStart'>
                    <div className='companyBox1'>
                      <p className='sec1'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s.
                      </p>
                    </div>
                    {/* <div className='companyBox'>
                      <img src={images} alt='images' />
                    </div>
                    <div className='companyBox'>
                      <img src={video} alt='images' />
                    </div> */}
                  </div>
                </div>
              </div>
            </Slide>
            <Slide bottom>
              <div className='team'>
                <p className='headingTeam'>Our Team</p>
                <Fade left>
                  <hr className='hrLineTeam' />
                </Fade>
                <div className='teamBody'>
                  {/* <OwlCarousel
                    className='owl-theme'
                    loop
                    margin={10}
                    // //   smartSpeed={750}
                    items={2}
                    dots={true}
                    nav
                    responsive={this.state.team}>
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
                  </OwlCarousel> */}
                </div>

                {/* <OwlCarousel
                    className='owl-theme'
                    // margin={10}
                    // //   smartSpeed={750}
                    // loop={false}
                    // dots={true}
                    responsive={this.state.team}>
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
                  </OwlCarousel> */}

                <Apps />
              </div>
            </Slide>
          </Container>
          {this.state.modal ? (
            <div
              class='modal'
              id='exampleModalCenter'
              tabindex='-1'
              role='dialog'
              aria-labelledby='exampleModalCenterTitle'
              aria-hidden='true'>
              <div class='modal-dialog modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <div></div>
                    <button
                      type='button'
                      class='closeBtnModal'
                      data-dismiss='modal'
                      aria-label='Close'
                      onClick={this.toggleModal}>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>

                  <form
                    action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2yqD_Van-D9uQDw5y60YDjb_coPIMqy0ruB_PFV5vlbf08A/formResponse'
                    className='formBlk'
                    autoComplete='off'>
                    <div class='form-floating mb-3'>
                      <input
                        type='email'
                        class='form-control'
                        name='emailAddress'
                        id='floatingInput'
                        placeholder='Email'
                        autoComplete='off'
                        required
                      />
                      <label for='floatingInput'>Email address</label>
                    </div>
                    <div class='form-floating'>
                      <input
                        type='text'
                        name='entry.2005620554'
                        class='form-control'
                        id='floatingPassword'
                        placeholder='Name'
                        autoComplete='off'
                        required
                      />
                      <label for='floatingPassword'>Name</label>
                    </div>
                    <div class='form-floating'>
                      <input
                        type='tel'
                        name='entry.1166974658'
                        class='form-control'
                        id='floatingPassword'
                        placeholder='Phone number'
                        autoComplete='off'
                        required
                      />
                      <label for='floatingPassword'>Phone number</label>
                    </div>
                    <div class='form-floating'>
                      <input
                        type='text'
                        name='entry.1065046570'
                        class='form-control'
                        id='floatingPassword'
                        placeholder='City'
                        autoComplete='off'
                        required
                      />
                      <label for='floatingPassword'>City</label>
                    </div>

                    <div class='form-floating'>
                      <input
                        type='text'
                        name='entry.1859717844'
                        class='form-control'
                        id='floatingPassword'
                        placeholder='State'
                        autoComplete='off'
                        required
                      />
                      <label for='floatingPassword'>State</label>
                    </div>
                    <div class='form-floating'>
                      <input
                        type='text'
                        name='entry.839337160'
                        class='form-control'
                        id='floatingPassword'
                        placeholder='Reason for Contacting Us'
                        autoComplete='off'
                        required
                      />
                      <label for='floatingPassword'>
                        Reason for Contacting Us
                      </label>
                    </div>

                    <button type='submit' className='submitBtn'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
export default Home;
