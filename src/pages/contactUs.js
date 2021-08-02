/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import close from "../assets/images/icons/close.svg";
import mail from "../assets/images/icons/mail.png";
import phone from "../assets/images/icons/phone.png";
import address from "../assets/images/icons/address.png";
import { Container } from "reactstrap";

// ....

// className "owl-theme" is optional
class ContactUs extends React.Component {
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
          <div className='chatBot'>
            <div className='boxToggle'>
              {/* <button
                onClick={this.toggle}
                className={this.state.open ? "d-none " : "d-block"}>
                open
              </button> */}
            </div>
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
          <div class='itemBannerContact'>
            {/* <img src={ca} alt="ca"/> */}
            <div className='container'>
              <p className='bannerText'>
                Contact Us
                <br />
                <span>We Are Here To Help you</span>
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
          <p className='flexMapheading'>Reach Out To Us</p>
          <div className='flexMap'>
            <div className='mapSecWrap'>
              <div className='google-map-code'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin'
                  width='500'
                  height='450'
                  frameborder='0'
                  style={{ border: 0 }}
                  allowfullscreen=''
                  aria-hidden='false'
                  className='mapIframe'
                  tabindex='0'></iframe>
              </div>
            </div>
            <div className='contactUsDetail'>
              <div className='sec1'>
                <img src={mail} className='mail-icon' alt='mail' />
                <p className='mailText'>ssytmindia@gmail.com</p>
              </div>
              <div className='sec1'>
                <img src={phone} className='mail-icon' alt='mail' />
                <p className='mailText'>+91 9617009596</p>
              </div>
              <div className='sec1'>
                <img src={address} className='mail-icon' alt='mail' />
                <p className='mailText'>Pipariya</p>
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
export default ContactUs;
