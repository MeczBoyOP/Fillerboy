import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

import Slider from "react-slick";

const cardData = [
  {
    image: "https://img.freepik.com/premium-vector/flat-illustration-summertime-season_23-2150320849.jpg",
    name: "Rahul Sen",
    description: "I Proudly Say Fillerboy Minerals is Very Good industrial minerals supplier, I have the best experience with this company. They provide best quality quartz powder and feldspar lumps at reasonable prices.",
  },
  {
    image: "https://img.freepik.com/premium-vector/girl-skirt-walks-dances-garden-fig-trees-ripe-figs-leaves-trees_1294209-10.jpg",
    name: "Ankit Roy",
    description: "I really appreciate Fillerboy Minerals Team and Mr. Sanjay Patel for their countless effort for providing me excellent service and wide range of Quartz powder at affordable price.very good Minerals.",
  },
  {
    image: "https://img.freepik.com/free-vector/hand-drawn-person-playing-padel-illustration_23-2149208677.jpg?t=st=1740161644~exp=1740165244~hmac=8186e033816b16e545dc0b4f573a76305ea69c3a043783d2490c0814dbcd4170",
    name: "Rahul Sen",
    description: "I must mention that Fillerboy Pvt Ltd is an excellent firm that supplies us with high-quality soapstone that meets our specifications. We got a great deal and hope to do more business in the future.",
  },
  {
    image: "https://img.freepik.com/premium-vector/portrait-happy-black-woman-standing-leaves-background-illustration-depicting-selflove_1294209-53.jpg",
    name: "Sonam sarkar",
    description: "I really appreciate Fillerboy Minerals Team and Mr. Sanjay Patel for their countless effort for providing me excellent service and wide range of Quartz powder at affordable price.very good Minerals.",
  },
  {
    image: "https://img.freepik.com/free-photo/rendering-summer-digital-art-illustration_23-2151242805.jpg?t=st=1740161644~exp=1740165244~hmac=a6e5d85953bdca79e4ac6065afde3e6abd3e19f49ef56b3ff9d0673d28efa271",
    name: "Ankit Roy",
    description: "I must mention that Fillerboy Pvt Ltd is an excellent firm that supplies us with high-quality soapstone that meets our specifications. We got a great deal and hope to do more business in the future.",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <Header />
      <Container>
        <Row className='align-items-center'>
          <Col md={7}>
            <div className="banner-left">
              <h3>Experience the Power of</h3>
              <h1>Customized <span>Minerals</span></h1>
              <p>Transform your industrial game with Fillerboy Pvt. Ltd's awe-inspiring mineral solutions!
                Our expertise in providing custom-fit mineral products and unparalleled customer service will leave you stunned. Get ready to skyrocket your business</p>
            </div>
          </Col>
          <Col md={5}>
            <div className="banner-right">
              <img src="https://fillerboy.com/img/Banner.png" alt="banner" className='img-fluid' />
            </div>
          </Col>
        </Row>
        <div className="embody-excellence">
          <h2>Embody Excellence with Every Habit</h2>
          <Row>
            <Col md={3}>
              <div className="embody-box">
                <div className="embody-img-head">
                  <div className="embody-img">
                    <img src="https://fillerboy.com/img/icon/quality.webp" alt="" className='img-fluid' />
                  </div>
                  <h4>Quality at its Core</h4>
                </div>
                <p>At FillerBoy, quality is at the heart of everything we do. We're proud to be known as the top mineral supplier in India, and we never compromise on the exceptional standards we've set for ourselves.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="embody-box">
                <div className="embody-img-head">
                  <div className="embody-img">
                    <img src="https://fillerboy.com/img/icon/upgrade.webp" alt="" className='img-fluid' />
                  </div>
                  <h4>Get more for less</h4>
                </div>
                <p>Fillerboy upholds the belief that superior industrial minerals should be universally accessible. We offer exceptional products at competitive prices, ensuring quality and affordability.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="embody-box">
                <div className="embody-img-head">
                  <div className="embody-img">
                    <img src="https://fillerboy.com/img/icon/box.webp" alt="" className='img-fluid' />
                  </div>
                  <h4>Limitless Options</h4>
                </div>
                <p>With FillerBoy, possibilities are endless. Our wide product portfolio offers various industry-grade minerals, and our research and development team assists you in choosing optimally for your project.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="embody-box">
                <div className="embody-img-head">
                  <div className="embody-img">
                    <img src="https://fillerboy.com/img/icon/customer-service.webp" alt="" className='img-fluid' />
                  </div>
                  <h4>Client Delight</h4>
                </div>
                <p>At FillerBoy, our aim is to exceed expectations, ensuring a delightful experience. We commit to delivering high-quality minerals and exceptional service for your complete guidance & satisfaction.</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="embody-excellence choose-us">
          <h2>WHY CHOOSE US</h2>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className="choose-us-left">
                <h4>Innovative Mineral Solutions for your unique Industrial needs</h4>
                <p>At Fillerboy Pvt. Ltd, we specialize in delivering customized mineral solutions to meet the unique needs of your industry. As a leading manufacturer and exporter of minerals like dolomite, calcite, china clay, and more, we cater to industries such as paint, cement, ceramics, rubber, pharmaceuticals, and more</p>
                <p>Since our establishment in 2020, our focus has been on providing top-quality mineral products and exceptional customer service. With a B2B business model, we strive to meet every demand of our customers and prioritize their satisfaction. Partner with us for the ultimate mineral solutions.</p>
                <p>Moreover, at Fillerboy Pvt. Ltd, we believe in innovation and continuous improvement. We invest in advanced technologies and research to enhance our product quality and diversify our offerings.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="choose-us-right">
                <Row>
                  <Col md={12}>
                    <div className="choose-us-box">
                      <div className="choose-us-img">
                        <img src="https://fillerboy.com/img/icon/box.webp" alt="" className='img-fluid' />
                      </div>
                      <div className="choose-us-box-head">
                        <h4>Inventory Quality Control</h4>
                        <p>We ensure all inventories are inspected for proper storage, handling, and maintenance to preserve quality for long-term use.</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="choose-us-box">
                      <div className="choose-us-img">
                        <img src="https://fillerboy.com/img/icon/shipped.webp" alt="" className='img-fluid' />
                      </div>
                      <div className="choose-us-box-head">
                        <h4>Transportation Reliability</h4>
                        <p>Our logistics service guarantees safe and timely shipment of products to their destination, ensuring professional handling and secure transportation.</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="choose-us-box">
                      <div className="choose-us-img">
                        <img src="https://fillerboy.com/img/icon/warehouse.webp" alt="" className='img-fluid' />
                      </div>
                      <div className="choose-us-box-head">
                        <h4>Ship storage check</h4>
                        <p>We perform thorough checks to ensure all containers are free from potential contaminants before loading onto ships.</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="embody-excellence opt-us">
          <h2>Here are major reasons why you can opt for our minerals</h2>
          <div className="opt-container">
            <Row>
              <Col md={3}>
                <div className="opt-box">
                  <div className="opt-img">
                    <img src="https://fillerboy.com/img/icon/upgrade.webp" alt="" className='img-fluid' />
                  </div>
                  <p>Upgraded Technology</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="opt-box">
                  <div className="opt-img">
                    <img src="https://fillerboy.com/img/icon/customer-service.webp" alt="" className='img-fluid' />
                  </div>
                  <p>Hassle-free Service</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="opt-box">
                  <div className="opt-img">
                    <img src="https://fillerboy.com/img/icon/quality.webp" alt="" className='img-fluid' />
                  </div>
                  <p>Incomparable Quality</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="opt-box">
                  <div className="opt-img">
                    <img src="https://fillerboy.com/img/icon/client.webp" alt="" className='img-fluid' />
                  </div>
                  <p>Free Consultation</p>
                </div>
              </Col>

            </Row>
          </div>
          <div className="opt-video">
            <iframe className='video' src="https://www.youtube.com/embed/DpAURqwYbJo" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
          </div>
        </div>
        <div className="embody-excellence raw-materials">
          <h2>Raw Materials at Affordable Prices-Guaranteed</h2>
          <div className="raw-material-list">
            <h6>Minerals</h6>
            <Link to="" className='View-all-link'>View All <IoIosArrowForward className='forward-icon' /></Link>
          </div>
          <Row>
            <Col md={4}>
              <Link className="raw-material-box">
                <div className="raw-material-img">
                  <img src="https://fillerboy.com/img/product/DOLOMITE-PRODUCT.jpg" alt="" className='img-fluid' />
                </div>
                <div className="raw-material-title">
                  <h3>DOLOMITE</h3>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link className="raw-material-box">
                <div className="raw-material-img">
                  <img src="https://fillerboy.com/img/product/CALCITE-PRODUCT-fillerboy.jpg" alt="" className='img-fluid' />
                </div>
                <div className="raw-material-title">
                  <h3>CALCITE</h3>
                </div>
              </Link>
            </Col>
            <Col md={4}>
              <Link className="raw-material-box">
                <div className="raw-material-img">
                  <img src="https://fillerboy.com/img/product/SOAPSTONE-FILLERBOY.jpg" alt="" className='img-fluid' />
                </div>
                <div className="raw-material-title">
                  <h3>SOAPSTONE</h3>
                </div>
              </Link>
            </Col>
          </Row>
        </div>

        <div className="embody-excellence raw-materials">
          <h2>Press & Media</h2>
          <div className="press-slider">
            <Slider {...settings}>
              {cardData.map((item, index) => (
                <Col md={4}>
                  <div key={index} className="press-container">
                    <div className="press-card">
                      <div className='press-content'>
                        <div className="press-img">
                          <img src={item.image} alt={item.name} className='img-fluid' />
                        </div>
                        <h5>{item.name}</h5>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Home