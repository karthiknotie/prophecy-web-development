import React from 'react'
import { Link } from "react-router-dom";
import FooterLogo from "../Assets/Resources/footer-logo.svg"
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../Assets/styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="logo">
                                <img src={FooterLogo} alt="" />
                            </div>
                            <div className="social-media">
                                <div className="instagram icon">
                                    <TiSocialFacebook />
                                </div>
                                <div className="x icon" >
                                    <FaXTwitter />
                                </div>
                                <div className="linkedin icon">
                                    <FaLinkedinIn />
                                </div>
                                <div className="instagram icon">
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="footer-menu">
                                <div className="footer-menu-1 menu-items">
                                    <h1>Company</h1>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>About</li>
                                        <li>Our Team</li>
                                        <li>
                                            <Link to="contact">Contact</Link>
                                        </li>
                                        <li>Careers</li>
                                        <li>
                                            <Link to="/">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="services">Services</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-menu-2 menu-items">
                                    <h1>Our Services</h1>
                                    <ul>
                                        <li>Privacy Policy</li>
                                        <li>Copyright</li>
                                        <li>Our Team</li>
                                        <li>Email Address</li>
                                    </ul>
                                </div>
                                <div className="footer-menu-3 menu-items">
                                    <h1>Support</h1>
                                    <ul>
                                        <li>Private Policy</li>
                                        <li>Cookies Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer