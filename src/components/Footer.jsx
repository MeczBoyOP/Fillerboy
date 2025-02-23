import React from 'react'
import { FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { IoIosMail, IoMdCall } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <div className="header">
      <div className="upper-footer">
        <Container>
          <Row className='justify-content-between'>
            <Col md={6} lg={3}>
              <div className="company-details">
                <div className="logo">
                  <img src="https://fillerboy.com/img/logo-(2).png" alt="Logo" className='img-fluid' />
                </div>
                <p>At FillerBoy, we're on a mission to revolutionize the world of industrial minerals. Our focus is simple - to create a unique and unparalleled experience for our customers.</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="resources">
                <h2>Resources</h2>
                <ul className='resource-list'>
                  <li><Link className='resource-link'>About Us</Link></li>
                  <li><Link className='resource-link'>Services</Link></li>
                  <li><Link className='resource-link'>Products</Link></li>
                  <li><Link className='resource-link'>Blog</Link></li>
                  <li><Link className='resource-link'>Contact Us</Link></li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="resources">
                <h2>SUPPORT</h2>
                <ul className='resource-list'>
                  <li><Link className='resource-link'>Privacy & policy</Link></li>
                  <li><Link className='resource-link'>Terms & condition</Link></li>
                  <li><Link className='resource-link'>Shipping policy</Link></li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="company-address">
                <Link className="address-box">
                  <IoLocationOutline className="address-icon" />
                  <p>32-C, Nakoda Nagar, Udaipur 313001, Rajasthan, India</p>
                </Link>
                <Link className="address-box">
                  <IoMdCall className="address-icon" />
                  <p>+91 81421 01923</p>
                </Link>
                <Link className="address-box">
                  <IoIosMail className="address-icon" />
                  <p>info@fillerboy.com</p>
                </Link>
              </div>

            </Col>
            <Col md={12}>
              <div className="social">
                <Link className='social-box'>
                  <ImFacebook className='social-icon' />
                </Link>
                <Link className='social-box'>
                  <ImLinkedin2 className='social-icon' />
                </Link>
                <Link className='social-box'>
                  <FaInstagram className='social-icon' />
                </Link>
                <Link className='social-box'>
                  <FaYoutube className='social-icon' />
                </Link>
                <Link className='social-box'>
                  <FaXTwitter className='social-icon' />
                </Link>
                <Link className='social-box'>
                  <FaPinterestP className='social-icon' />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="lower-footer">
        <Container>
          <p>© 2023 Fillerboy. All rights reserved.</p>
        </Container>
      </div>
    </div>
  )
}

export default Footer