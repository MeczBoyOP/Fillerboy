import React, { useRef, useState } from 'react'
import { IoIosMail, IoMdCall, IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Button, Container } from 'reactstrap'
import ImagePath from '../assets/imagePath/ImagePath'
import { CiMenuFries } from 'react-icons/ci'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="upper-header">
                <Container>
                    <div className="upper-header-position">
                        <div className="upper-header-content">
                            <p>Experience the Power of Customized Minerals</p>
                        </div>
                        <div className="contact-info">
                            <Link className="contact-info-box">
                                <IoMdCall className='contact-icon' />
                                <p>91 - 9876543210</p>
                            </Link>
                            <Link className="contact-info-box">
                                <IoIosMail className='contact-icon' />
                                <p>info@fillerboy.com</p>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="lower-header">
                <Container>
                    <div className="lower-header-position">
                        <div className="logo">
                            <img src="https://fillerboy.com/img/logo-animate.gif" alt="Logo" className='img-fluid' />
                        </div>
                        <div className="menu-bar">
                            <ul className='menu-bar-list'>
                                <li>
                                    <Link className='menu-bar-options'>About Us</Link>
                                </li>
                                <li>
                                    <Link className='menu-bar-options'>Services</Link>
                                </li>
                                <li>
                                    <Link className='menu-bar-options'>Products</Link>
                                </li>
                                <li>
                                    <Link className='menu-bar-options'>Blogs</Link>
                                </li>
                                <li>
                                    <Link className='menu-bar-options'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="" className='playstore-img'>
                                        <img src={ImagePath.PlayStore} alt="playstore" className='img-fluid' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='playstore-img'>
                                        <img src={ImagePath.Translator} alt="translator" className='img-fluid' />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoMdClose className='hamburger-icon' /> : <CiMenuFries className='hamburger-icon' />}
                        </div>
                        {isOpen && (
                            <div className="hamburger-menu-open-position">
                                <ul className='menu-bar-list'>
                                    <li>
                                        <Link className='menu-bar-options'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link className='menu-bar-options'>Services</Link>
                                    </li>
                                    <li>
                                        <Link className='menu-bar-options'>Products</Link>
                                    </li>
                                    <li>
                                        <Link className='menu-bar-options'>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link className='menu-bar-options'>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="" className='playstore-img'>
                                            <img src={ImagePath.PlayStore} alt="playstore" className='img-fluid' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='playstore-img'>
                                            <img src={ImagePath.Translator} alt="translator" className='img-fluid' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header