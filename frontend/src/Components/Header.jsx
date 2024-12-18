import React, { useState, useEffect } from 'react';
import FooterLogo from "../Assets/Resources/footer-logo.svg"
import Logo from "../Assets/Resources/prophecy-logo2.svg"
import "../Assets/styles/Header.css";
import { a } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useFetchJobsQuery } from '../redux/features/career/CareerApi';
import { useFetchBlogsQuery } from '../redux/features/blogs/blogsApi';
import JobPlaceHolderImg from '../Assets/Resources/search-job-img.png'



const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [results, setResults] = useState([]);

    // Debounce the input
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Fetch jobs and blogs data
    const {
        data: jobsData,
        isLoading: isLoadingJobs,
    } = useFetchJobsQuery({ search: debouncedQuery }, { skip: debouncedQuery === '' });

    const {
        data: blogsData,
        isLoading: isLoadingBlogs,
    } = useFetchBlogsQuery({ search: debouncedQuery }, { skip: debouncedQuery === '' });

    // Combine results
    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]); // Clear results if the query is empty
            return;
        }

        const jobResults = jobsData?.map((job) => ({
            id: job._id,
            // Use the placeholder image if job.image is not available
            image: job.image || JobPlaceHolderImg, // Path to your default image
            title: job.jobTitle || job.title, // Check for both title and jobTitle
            type: 'Job',
        })) || [];

        const blogResults = blogsData?.map((blog) => ({
            id: blog._id,
            image: blog.coverImg ? `http://localhost:5000/${blog.coverImg}` : '/placeholder.jpg',
            title: blog.title,
            type: 'Blog',
        })) || [];

        setResults([...jobResults, ...blogResults]);
    }, [jobsData, blogsData, debouncedQuery]);




    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const links = document.querySelectorAll(".nav-a");

        links.forEach(link => {
            // Remove `active` from all links initially
            link.classList.remove("active");

            const linkPath = new URL(link.href).pathname;
            const isDropdownParent = link.closest(".dropdown");

            // Case 1: Set active on non-dropdown links
            if (linkPath === currentPath && !isDropdownParent) {
                link.classList.add("active");
            }

            // Case 2: Handle dropdowns
            if (isDropdownParent) {
                // Check for child links' path to determine if the dropdown should be active
                const childLinks = isDropdownParent.querySelectorAll(".dropdown-item");
                const isChildActive = Array.from(childLinks).some(childLink => {
                    const childLinkPath = new URL(childLink.href).pathname;
                    return childLinkPath === currentPath;
                });

                // Add `active` to dropdown parent if no child link is active, and avoid marking on pages like Contact or Career
                if (isChildActive || (currentPath !== "/" && linkPath === "/")) {
                    link.classList.add("active");
                }
            }
        });
    }, [location]);







    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const offset = window.scrollY;
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                if (offset > 200) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }, 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>

            <header className={scrolled ? 'scrolled' : ''}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-logo" href="/">
                            <img src={scrolled ? Logo : Logo} alt="Company Logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="offcanvas offcanvas-end"
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <div className="logo">
                                    <img src={Logo} alt="" className="offcanvas-title" id="offcanvasNavbarLabel" />
                                </div>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    {/* <li className="nav-item">
                                        <a href="/" className="nav-a">Company</a>
                                    </li> */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-a dropdown-toggle"
                                            href="#"
                                            id="servicesDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Our Services <i className="bi bi-caret-down-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="servicesDropdown" >
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="/ai-and-data-analytics">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/ai-and-data-analytics" className="dropdown-item">
                                                                AI & Data Analytics
                                                            </a>
                                                        </li>
                                                    </a>
                                                    <a href="/digital-acceleration">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/digital-acceleration" className="dropdown-item">
                                                                Digital Acceleration
                                                            </a>
                                                        </li>
                                                    </a>
                                                    <a href="/application-modernization">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/application-modernization" className="dropdown-item">Application Modernization</a>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="/database-modernization">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/database-modernization" className="dropdown-item">Database Modernization</a>
                                                        </li>
                                                    </a>
                                                    <a href="/infrastructure-modernization">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/infrastructure-modernization" className="dropdown-item">Infrastructure Modernization</a>
                                                        </li>
                                                    </a>
                                                    <a href="/cybersecurity">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/cybersecurity" className="dropdown-item">Cybersecurity</a>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="/site-reliabilities">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/site-reliabilities" className="dropdown-item">Site Reliability Services</a>
                                                        </li>
                                                    </a> <a href="/automation">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/automation" className="dropdown-item">Automation</a>
                                                        </li>
                                                    </a> <a href="/staffing-and-consulting">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a href="/staffing-and-consulting" className="dropdown-item">Staffing & IT Consulting</a>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-a dropdown-toggle"
                                            href="#"
                                            id="solutionsDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Solutions <i className="bi bi-caret-down-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="/robotic-process-automation">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/robotic-process-automation">Robotic Process Automation (RPA)</a>
                                                        </li>
                                                    </a>
                                                    <a href="/data-and-ai">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/data-and-ai">Data & AI</a>
                                                        </li>
                                                    </a> <a href="/cloud-and-devops">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/cloud-and-devops">Cloud & DevOps</a>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="/snowflake-and-informatica">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/snowflake-and-informatica">Snowflake & Informatica</a>
                                                        </li>
                                                    </a> <a href="/servicenow">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/servicenow">ServiceNow</a>
                                                        </li>
                                                    </a> <a href="/epr">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/epr">ERP</a>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="/crm">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/crm">CRM</a>
                                                        </li>
                                                    </a>
                                                    <a href="/adobe-experience-manager">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/adobe-experience-manager">Adobe Experience Manager</a>
                                                        </li>
                                                    </a>
                                                    <a href="/optimizely">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/optimizely">Optimizely</a>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/career" className="nav-a">Careers</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-a dropdown-toggle"
                                            href="#"
                                            id="solutionsDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Resources <i className="bi bi-caret-down-fill"></i>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="/blog">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/blog">Blogs</a>
                                                        </li>
                                                    </a>
                                                    <a href="/blog">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/blog">Executive Reports</a>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="/blog">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/blog">Case Studies</a>
                                                        </li>
                                                    </a>
                                                </div>
                                                <div className="col-lg-4">
                                                    <a href="/blog">
                                                        <li className='dropdown-menu-list-items'>
                                                            <div className="icon">
                                                                <IoIosArrowForward />
                                                            </div>
                                                            <a className="dropdown-item" href="/blog">Videos</a>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/contact" className="nav-a">Contact</a>
                                    </li>
                                </ul>
                                <div className="search-icon">
                                    <button data-bs-toggle="modal" data-bs-target="#searchmodal"><IoSearchSharp /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav >
            </header >

            <div
                className="modal fade"
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
                                            <input
                                                type="text"
                                                placeholder="Search for careers or blogs"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                            <IoSearchSharp className="search-modal-icon" />
                                        </div>
                                    </div>
                                    <div className="header-search-results">
                                        {isLoadingJobs || isLoadingBlogs ? (
                                            <p>Loading...</p>
                                        ) : results.length > 0 ? (
                                            results.map((result) => (
                                                <div className="row mb-3" key={result.id}>
                                                    <div className="item">
                                                        <div className="image">
                                                            <img src={result.image} alt={result.title} />
                                                        </div>
                                                        <div className="title">
                                                            <h2>
                                                                {result.type === 'Job' ? (
                                                                    // If it's a job, link to the career detail page
                                                                    <a href={`/career?jobId=${result.id}`} target="_blank" rel="noopener noreferrer">
                                                                        {result.title}
                                                                    </a>
                                                                ) : (
                                                                    // If it's a blog, link to the blog detail page
                                                                    <a href={`/blogs/${result.id}`} target="_blank" rel="noopener noreferrer">
                                                                        {result.title}
                                                                    </a>
                                                                )}
                                                            </h2>
                                                            <p>({result.type})</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No results found</p>
                                        )}
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
