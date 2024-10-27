import React, { useState, useEffect } from 'react';
import Logo from "../Assets/Resources/prophecy-logo2.svg";
import FooterLogo from "../Assets/Resources/footer-logo.svg"
import "../Assets/styles/Header.css";

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
                    <a className="navbar-logo" href="/">
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
                                <a href="/" className="nav-link active">Company</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="/services" id="servicesDropdown" role="button">Our Services</a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li>
                                        <a href="/services" className="dropdown-item">
                                            AI & Data Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">
                                            Digital Acceleration
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Application Modernization</a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Database Modernization</a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Infrastructure Modernization</a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Cybersecurity</a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Site Reliability Services</a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Automation</a>
                                    </li>
                                    <li>
                                        <a href="/services" className="dropdown-item">Staffing & IT Consulting</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="/services" id="servicesDropdown" role="button">Solutions</a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/services">Robotic Process Automation (RPA)</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">Data & AI</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">Cloud & DevOps</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">Snowflake & Informatica</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">ServiceNow</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">ERP</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">CRM</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">Adobe Experience Manager</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/services">Optimizely</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact" className="nav-link" >Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    );
};

export default Header;
