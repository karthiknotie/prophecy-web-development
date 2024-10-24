import React, { useState, useEffect } from 'react';
import Logo from "../Assets/Resources/prophecy-logo2.svg";
import FooterLogo from "../Assets/Resources/footer-logo.svg"
import "../Assets/styles/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-logo" href="#">
                        <img src={scrolled ? FooterLogo : Logo} alt="Company Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-list" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" >Company
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="servicesDropdown" role="button">Our Services</a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li>
                                        <Link to="services" className="dropdown-item">Adobe</Link>
                                    </li>
                                    <li>
                                        <Link to="services" className="dropdown-item">Application Modernization</Link>
                                    </li>
                                    <li>
                                        <Link to="services" className="dropdown-item">Cyber security</Link>
                                    </li>
                                    <li>
                                        <Link to="services" className="dropdown-item">Digital Transformation</Link>
                                    </li>
                                    <li>
                                        <Link to="services" className="dropdown-item">Infrastructure Modernization</Link>
                                    </li>
                                    <li>
                                        <Link to="services" className="dropdown-item">SAP</Link>
                                    </li>
                                    <li>
                                        <Link to="services" className="dropdown-item">ServiceNow</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="servicesDropdown" role="button">Solutions</a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li><a className="dropdown-item" href="#">Robotic Process Automation (RPA)</a></li>
                                    <li><a className="dropdown-item" href="#">Data & AI</a></li>
                                    <li><a className="dropdown-item" href="#">Cloud & DevOps</a></li>
                                    <li><a className="dropdown-item" href="#">Snowflake & Informatica</a></li>
                                    <li><a className="dropdown-item" href="#">ServiceNow</a></li>
                                    <li><a className="dropdown-item" href="#">ERP</a></li>
                                    <li><a className="dropdown-item" href="#">CRM</a></li>
                                    <li><a className="dropdown-item" href="#">Adobe Experience Manager</a></li>
                                    <li><a className="dropdown-item" href="#">Optimizely</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    );
};

export default Header;
