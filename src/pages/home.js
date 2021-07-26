import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ca from "../assets/images/ca.png";
import { Container, Row, Col } from 'reactstrap';
import about1  from "../assets/images/about1.png"

// ....

// className "owl-theme" is optional
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
          responsive: {
            0: {
              items: 1,
              // stagePadding: 30,
              margin: 0,
              loop: true,
              center: false,
              nav: false,
            },
            450: {
              items: 1,
              stagePadding: 0,
              center: false,
              nav: false,
            },
            600: {
              items: 1,
              center: false,
              margin: 0,
              nav: true,
            },
            768: {
              items: 1,
              stagePadding: 0,
              margin: 15,
              nav: true,
              loop: true,
            },
            999: {
              items: 1,
              stagePadding: 100,
              margin: 15,
              nav: true,
              loop: true,
            },
            1000: {
              items: 2,
              margin: 0,
              nav: true,
              stagePadding: 0,
              loop: true,
            },
            1201: {
              stagePadding: 0,
              items:12,
              autoWidth: true,
              nav: true,
              loop: true,
              dots: true,
            },
            1399: {
         
              items: 1,
        
              nav: false,
              margin: 10,
              loop: true,
              dots: true,
            },
          },
     
        };
      }
    render(){
        return(
<div className="home">
 
<OwlCarousel className='owl-theme' loop margin={10}
  

    //   smartSpeed={750}
    items={1}
    dots={true}
    responsive={this.state.responsive}
>
    <div class='item'>
      <img src={ca} alt="ca"/>
    </div>
    <div class='item'>
    <img src={ca} alt="ca"/>
    </div>
    <div class='item'>
    <img src={ca} alt="ca"/>
    </div>
   
 
</OwlCarousel>
{/* //about us */}

<div className="aboutWrap">
 <Container>
     <div className="aboutUs">
<Row className="gx-5">
    <Col xs={4}><img src={about1} alt="about"/></Col>
    <Col xs={6}>
        <p className="headingAbt">About Us</p>
        <p className="detailAbt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Col>
  </Row>
  </div>
  <div className="vission">
      <p className="headingVission">Our Vission Mission</p>
      <p className="detailVission">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

  </div>
  </Container>
</div>
</div>
       )
    }
}
export default Home
