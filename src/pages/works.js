/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import close from "../assets/images/icons/close.svg";

import { Container } from "reactstrap";

// ....

// className "owl-theme" is optional
class Work extends React.Component {
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
      <div className='home works'>
        <div className='floatIcons'>
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
          <div class='itemBanner2'>
            {/* <img src={ca} alt="ca"/> */}
            <div className='container'>
              <p className='bannerText'>
                We Provide Real Worlds Solution <br />
                To Complex Business Issues
                <br />
                <span>Through Our Services.</span>
              </p>
              <div className='enquiryWrap'>
                <button className='enquiry' onClick={this.toggleModal}>
                  Enquire Now{" "}
                </button>
              </div>
            </div>
          </div>
        </OwlCarousel>
        {/* //about us */}
        <Container>
          <div className='formBlkWrap'>
            <div className='formBlkHeading'>
              <p className='heading'>
                Service Provider To Banking &amp; Non Banking
              </p>
              <p className='blkText'>
                Corporate Companies &amp; Government Agencies
              </p>
            </div>
            <div className='formBlkBox'>
              <div className='sec1Wrap'>
                <div className='sec1 zoomAnimation'>
                  <p className='sec1Heading'>
                    Supply of security man power &amp; recruitment agency
                  </p>
                  <p className='sec1Ans'>
                    Security guard - Banking and non banking corporates
                    companies and government agencies.
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Security-guard-Banking-and-non-banking-corporates
                    companies-and-government-agencies'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>

                  <div className='mt-3'>
                    <p className='sec1Ans'>
                      Staff recruitment for banking and non banking corporate
                      companies and government agencies.
                    </p>
                    <p className='sec1Ans '>
                      <a
                        href='/Staff-recruitment-for-banking-and-non-banking-corporate-companies-and-government-agencies'
                        target='_blank'
                        className='sec1Ans'>
                        {" "}
                        Contact Us
                      </a>
                    </p>
                  </div>
                </div>
                <div className='sec1 zoomAnimation'>
                  <p className='sec1Heading'>
                    Digital sales, marketing, promotion, other services
                  </p>
                  <p className='sec1Ans'>
                    Online business promotions and marketing
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Online-business-promotions-and-marketing'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                  <p className='sec1Ans mt-3'>Online client data sourcing</p>
                  <p className='sec1Ans '>
                    <a
                      href='/Online-client-data-sourcing'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
              <div className='sec1Wrap '>
                <div className='sec1 p-72 zoomAnimation'>
                  <p className='sec1Heading'>
                    Online, poster, hording advertisement agency to banking and
                    non banking corporates companies and government agencies
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Online-poster-hording-advertisement-agency-to-banking-and-non-banking-corporates-companies-and-government-agencies'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                </div>
                <div className='sec1 mt-5 zoomAnimation'>
                  <p className='sec1Heading'>
                    Finance, insurance and other lead provider, calling,
                    collection and other services
                  </p>
                  <p className='sec1Ans mt-3'>Lead provider</p>
                  <p className='sec1Ans '>
                    <a
                      href='/Lead-provider'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>

                  <p className='sec1Ans mt-3'>Calling</p>
                  <p className='sec1Ans '>
                    <a href='/Calling' target='_blank' className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>

                  <p className='sec1Ans mt-3'>Collection and recovery</p>
                  <p className='sec1Ans '>
                    <a
                      href='/Collection-and-recovery'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>

                  <p className='sec1Ans mt-3'>
                    Financial advisory corporate public and private sector
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Financial-advisory-corporate-public-and-private-sector'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
              <div className='sec1Wrap '>
                <div className='sec1 m-t zoomAnimation'>
                  <p className='sec1Heading'>
                    Tangible and intangible property valuation services
                  </p>

                  <p className='sec1Ans'>
                    Tangible property valuation to banking and nonbanking
                    companies and government agencies
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Tangible-property-valuation-to-banking-and-nonbanking
                      companies-and-government-agencies'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                  <p className='sec1Ans'>
                    Trade mark, patent, copyright, goodwill valuation services
                    to banking and nonbanking corporates companies and
                    government agencies
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Trade-mark-patent-copyright-goodwill-valuation-services'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                  <p className='sec1Ans'>
                    Vehicle valiuation to banking and non banking corporates
                    companies and government agencies
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Vehicle-valiuation'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                </div>
                <div className='sec1 p-72 zoomAnimation'>
                  <p className='sec1Heading'>
                    Government or private work contractor and job work
                  </p>
                  <p className='sec1Ans '>
                    <a
                      href='/Government-or-private-work-contractor-and-job-work'
                      target='_blank'
                      className='sec1Ans'>
                      {" "}
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    );
  }
}
export default Work;
