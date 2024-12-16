import React, { useState, useEffect } from 'react';
import Logo from "../Assets/Resources/prophecy-logo2.svg";
import FooterLogo from "../Assets/Resources/footer-logo.svg"
import "../Assets/styles/Header.css";
import { a } from 'react-router-dom';
import Service1Icon from "../Assets/Resources/service-1-icon.png"
import { IoSearchSharp } from "react-icons/io5";

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
        <>
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
                                    <a href="/" className="nav-a active">Company</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-a " href="#" id="servicesDropdown" role="button">Our Services</a>
                                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/ai-and-data-analytics" className="dropdown-item">
                                                        AI & Data Analytics
                                                    </a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/digital-acceleration" className="dropdown-item">
                                                        Digital Acceleration
                                                    </a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/application-modernization" className="dropdown-item">Application Modernization</a>
                                                </li>
                                            </div>
                                            <div className="col-lg-4">
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/database-modernization" className="dropdown-item">Database Modernization</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/infrastructure-modernization" className="dropdown-item">Infrastructure Modernization</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/cybersecurity" className="dropdown-item">Cybersecurity</a>
                                                </li>
                                            </div>
                                            <div className="col-lg-4">
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/site-reliabilities" className="dropdown-item">Site Reliability Services</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/automation" className="dropdown-item">Automation</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a href="/staffing-and-consulting" className="dropdown-item">Staffing & IT Consulting</a>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-a" href="#" id="servicesDropdown" role="button">Solutions</a>
                                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/robotic-process-automation">Robotic Process Automation (RPA)</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/data-and-ai">Data & AI</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/cloud-and-devops">Cloud & DevOps</a>
                                                </li>
                                            </div>
                                            <div className="col-lg-4">
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/snowflake-and-informatica">Snowflake & Informatica</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/servicenow">ServiceNow</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/epr">ERP</a>
                                                </li>
                                            </div>
                                            <div className="col-lg-4">
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/crm">CRM</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/adobe-experience-manager">Adobe Experience Manager</a>
                                                </li>
                                                <li className='dropdown-menu-list-items'>
                                                    <div className="icon">
                                                        <img src={Service1Icon} alt="" />
                                                    </div>
                                                    <a className="dropdown-item" href="/optimizely">Optimizely</a>
                                                </li>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href='/career' className="nav-a">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contact" className="nav-a" >Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="search-icon">
                            <button data-bs-toggle="modal" data-bs-target="#searchmodal"><IoSearchSharp /></button>
                        </div>
                    </div>
                </nav >
            </header >



            <div
                className="modal fade "
                id="searchmodal"
                data-bs-backdrop="true"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="searchmodalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered searchpopup">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <div className="container">
                                    <div className="row">
                                        <div className="search-input">
                                            <input type="text" placeholder='Type to Search' />
                                            <IoSearchSharp className='search-modal-icon' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >


        </>
    );
};

export default Header;
