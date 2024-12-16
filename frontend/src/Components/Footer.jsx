import React from 'react'
import FooterLogo from "../Assets/Resources/footer_prophecy-new.svg"
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import "../Assets/styles/Footer.css"
import { FaRegCopyright } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import FooterCertificate1 from "../Assets/Resources/footer-certifies-1.png"
import FooterCertificate2 from "../Assets/Resources/footer-certifies-2.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        AOS.init({
            easing: "ease",
        });
    }, []);



    return (
        <footer >
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="logo">
                                <img src={FooterLogo} alt="" />
                            </div>
                            <div className="social-media">
                                <div className="facebook icon">
                                    <TiSocialFacebook />
                                </div>
                                <a href="https://x.com/prophecytechs" style={{ color: "#000" }}>
                                    <div className="x icon">
                                        <FaXTwitter />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/prophecytechs/" style={{ color: "#000" }}>
                                    <div className="linkedin icon">
                                        <RiLinkedinFill />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/prophecytechs2k14" style={{ color: "#000" }}>
                                    <div className="instagram icon">
                                        <FaInstagram />
                                    </div>
                                </a>
                                <a href="mailto:kumar@prophecytechs.com" style={{ color: "#000" }}>
                                    <div className="mail icon">
                                        <MdMailOutline />
                                    </div>
                                </a>
                            </div>
                            <div className="certificates">
                                <div className="image">
                                    <img src={FooterCertificate2} alt="" />
                                </div>
                                <div className="image">
                                    <img src={FooterCertificate1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <div className="footer-menu">
                                <div className="footer-menu-1 menu-items">
                                    <h1>Company</h1>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About</a></li>
                                        {/* <li><a href="/team">Our Team</a></li> */}
                                        <li><a href="/contact">Contact</a></li>
                                        <li><a href="career">Careers</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                            <div className="footer-menu">
                                <div className="footer-menu-2 menu-items">
                                    <h1>Our Services</h1>
                                    <ul>
                                        <li><a href="/ai-and-data-analytics">AI & Data Analytics</a></li>
                                        <li><a href="/digital-acceleration">Digital Acceleration</a></li>
                                        <li><a href="/application-modernization">Application Modernization</a></li>
                                        <li><a href="/database-modernization">Database Modernization</a></li>
                                        <li><a href="/infrastructure-modernization">Infrastructure Modernization</a></li>
                                        <li><a href="/cybersecurity">Cybersecurity</a></li>
                                        <li><a href="/site-reliabilities">Site Reliability Services</a></li>
                                        <li><a href="/automation">Automation</a></li>
                                        <li><a href="/staffing-and-consulting">Staffing & IT Consulting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                            <div className="footer-menu">
                                <div className="footer-menu-2 menu-items">
                                    <h1>Solutions</h1>
                                    <ul>
                                        <li><a href="/robotic-process-automation">Robotic Process Automation</a></li>
                                        <li><a href="/data-and-ai">Data & AI</a></li>
                                        <li><a href="/cloud-and-devops">Cloud & DevOps</a></li>
                                        <li><a href="/snowflake-and-informatica">Snowflake & Informatica</a></li>
                                        <li><a href="/servicenow">ServiceNow</a></li>
                                        <li><a href="/epr">ERP</a></li>
                                        <li><a href="/crm">CRM</a></li>
                                        <li><a href="/adobe-experience-manager">Adobe Experience Manager</a></li>
                                        <li><a href="/optimizely">Optimizely</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                            <div className="footer-menu">
                                <div className="footer-menu-3 menu-items">
                                    <h1>Support</h1>
                                    <ul>
                                        <li><a href="/privacypolicy">Private Policy</a></li>
                                        <li><a href="/cookiepolicy">Cookies Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            <h6><FaRegCopyright /> 2024 <a href="/" style={{ color: "#000", textDecoration: "none" }}>Prophecy Technologies.</a> All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer