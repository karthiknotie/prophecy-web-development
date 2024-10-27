import React from 'react'
import FooterLogo from "../Assets/Resources/footer-logo.svg"
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../Assets/styles/Footer.css"
import { FaRegCopyright } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
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
                                <div className="instagram icon">
                                    <MdMailOutline />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-menu">
                                <div className="footer-menu-1 menu-items">
                                    <h1>Company</h1>
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/"></a>About
                                        </li>
                                        <li>
                                            <a href="/">Our Team</a>
                                        </li>
                                        <li>
                                            <a href="/contact">Contact</a>
                                        </li>
                                        <li>
                                            <a href="/">Careers</a>
                                        </li>
                                        <li>
                                            <a href="/">Blog</a>
                                        </li>
                                        {/* <li>
                                            <Link to="services">Services</Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-menu">
                                <div className="footer-menu-2 menu-items">
                                    <h1>Our Services</h1>
                                    <ul>
                                        <li>
                                            <a href="/services">
                                                AI & Data Analytics
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/services">
                                                Digital Acceleration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/services">Application Modernization</a>
                                        </li>
                                        <li>
                                            <a href="/services">Database Modernization</a>
                                        </li>
                                        <li>
                                            <a href="/services">Infrastructure Modernization</a>
                                        </li>
                                        <li>
                                            <a href="/services">Cybersecurity</a>
                                        </li>
                                        <li>
                                            <a href="/services">Site Reliability Services</a>
                                        </li>
                                        <li>
                                            <a href="/services">Automation</a>
                                        </li>
                                        <li>
                                            <a href="/services">Staffing & IT Consulting</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-menu">
                                <div className="footer-menu-2 menu-items">
                                    <h1>Solutions</h1>
                                    <ul>
                                        <li>
                                            <a href="/services">
                                                Robotic Process Automation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/services">
                                                Data & AI
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/services">Cloud & DevOps</a>
                                        </li>
                                        <li>
                                            <a href="/services">Snowflake & Informatica</a>
                                        </li>
                                        <li>
                                            <a href="/services">ServiceNow</a>
                                        </li>
                                        <li>
                                            <a href="/services">ERP</a>
                                        </li>
                                        <li>
                                            <a href="/services">CRM</a>
                                        </li>
                                        <li>
                                            <a href="/services">Adobe Experience Manager</a>
                                        </li>
                                        <li>
                                            <a href="/services">Optimizely</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-menu">
                                <div className="footer-menu-3 menu-items">
                                    <h1>Support</h1>
                                    <ul>
                                        <li><a href="javascript:void(0);">Private Policy</a></li>
                                        <li><a href="javascript:void(0);">Cookies Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            <h6><FaRegCopyright /> 2024 Prophecy. All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer