import React, { useEffect, useRef, useState } from 'react';
import "../Assets/styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Partner1 from "../Assets/Resources/partner1.svg";
import Partner2 from "../Assets/Resources/partner2.svg";
import Partner3 from "../Assets/Resources/partner3.svg";
import Partner4 from "../Assets/Resources/partner4.svg";
import Partner5 from "../Assets/Resources/partner5.svg";
import Partner6 from "../Assets/Resources/partner6.svg";
import Partner7 from "../Assets/Resources/partner7.svg";
import GridShape from "../Assets/Resources/banner-grid-lines.svg"
import BannerMiniShape1 from "../Assets/Resources/banner-mini-shape1.svg"
import BannerMiniShape2 from "../Assets/Resources/banner-mini-shape2.svg"
import AboutArrow from "../Assets/Resources/about-arrow.svg"
import AssuranceLine1 from "../Assets/Resources/assurance-line-1.svg"
import AssuranceLine2 from "../Assets/Resources/assurance-line-2.svg"
import AssuranceIcon1 from "../Assets/Resources/assurance-icon1.svg"
import WhoWeAreImage from "../Assets/Resources/who-we-image.svg"
import ServiceStar from "../Assets/Resources/service-star.svg"
import ApproachIcon1 from "../Assets/Resources/approach-icon-1.svg"
import ApproachIcon2 from "../Assets/Resources/icons/approach-icon-2.svg"
import ApproachIcon3 from "../Assets/Resources/icons/approach-icon-3.svg"
import ApproachIcon4 from "../Assets/Resources/icons/approach-icon-4.svg"
import ApproachIcon5 from "../Assets/Resources/icons/approach-icon-5.svg"
import ApproachImage from "../Assets/Resources/approach-image1.jpg"
import TechnologiesIcon1 from "../Assets/Resources/technologies-icon1.svg"
import TechnologiesIcon2 from "../Assets/Resources/icons/technologies-icon2.svg"
import TechnologiesIcon3 from "../Assets/Resources/icons/technologies-icon3.svg"
import TechnologiesIcon4 from "../Assets/Resources/icons/technologies-icon4.svg"
import TechnologiesIcon5 from "../Assets/Resources/icons/technologies-icon5.svg"
import WhoWeAreChecked from "../Assets/Resources/who-we-are-checkedbox.png"
import CtaChecked from "../Assets/Resources/cta-checkedbox.png"
import LogoAnimate7 from "../Assets/Resources/logo-sequence/logo7.png"
import AssuranceIcon2 from "../Assets/Resources/icons/assurance-icon2.svg"
import AssuranceIcon3 from "../Assets/Resources/icons/assurance-icon3.svg"
import AssuranceIcon4 from "../Assets/Resources/icons/assurance-icon4.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import Preloader from '../Components/Preloader';

const Home = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
        });
    }, []);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const SplitTypes = document.querySelectorAll('.mini-title-animation');
        SplitTypes.forEach((char) => {
            const text = new SplitType(char, { types: 'chars' });
            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                scaleY: 0,
                y: -20,
                transformOrigin: 'top',
                stagger: 0.05
            });
        });
    }, []);

    useEffect(() => {
        const SplitTypes = document.querySelectorAll('.ban-title-animation');
        SplitTypes.forEach((char) => {
            const text = new SplitType(char, { types: 'chars' });
            gsap.from(text.chars, {
                opacity: 0.2,
                stagger: 0.08,
                scrub: true,
            });
        });
    }, []);



    useEffect(() => {
        const SplitTypes = document.querySelectorAll('.mini-title-animation');
        SplitTypes.forEach((char) => {
            const text = new SplitType(char, { types: 'chars' });
            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false
                },
                opacity: 0.2,
                stagger: 0.08,
                scrub: true,
            });
        });
    }, []);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = document.querySelectorAll('.para-animation');
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 20 }, // Start with opacity 0 and slightly below the position
                {
                    opacity: 1,        // End with opacity 1 (fully visible)
                    y: 0,              // Move to the original position
                    duration: 1,       // Adjust duration for smoother transition
                    ease: "power2.out", // Smooth easing
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,    // One-time animation on scroll
                        markers: false,
                    },
                }
            );
        });
    }, []);



    const settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200, // For screens smaller than 1200px
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992, // For screens smaller than 992px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // For screens smaller than 576px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    };





    const [transformStyle, setTransformStyle] = useState({});

    const handleMouseMove = (event) => {
        // Calculate the center of the element
        const { clientX, clientY, currentTarget } = event;
        const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget;
        const centerX = offsetLeft + offsetWidth / 2;
        const centerY = offsetTop + offsetHeight / 2;

        // Calculate rotation amount based on mouse position
        const rotateX = (clientY - centerY) / 25;
        const rotateY = (centerX - clientX) / 25;

        // Update transform style
        setTransformStyle({
            transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s ease-out',
        });
    };

    const handleMouseLeave = () => {
        // Reset the transform when the mouse leaves the element
        setTransformStyle({
            transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.5s ease-out',
        });
    };

    return (
        <main>

            <Preloader />
            <section className='banner-section'>
                <div className="container">
                    <div className="banner-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-title">
                                    <h1 className='ban-title-animation'>Innovating <br />Tomorrow <br />Today</h1>
                                    <p ><b>Prophecy Technologies </b>- Unlock business potential with Prophecy Technologies—driving growth through AI
                                        optimization, digital solutions, and modernized infrastructure for seamless customer
                                        engagement.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-content-right">
                                    <div
                                        className="banner-logo"
                                        data-aos="zoom-in"
                                        data-aos-duration="3000"
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        style={transformStyle}
                                    >
                                        <div className="image-container">
                                            <img src={LogoAnimate7} alt="Logo" />
                                        </div>
                                    </div>


                                    <div className="grid-shape">
                                        <img src={GridShape} alt="" />
                                    </div>
                                    <div className="banner-mini-shape-1">
                                        <img src={BannerMiniShape1} alt="" />
                                    </div>
                                    <div className="banner-mini-shape-2">
                                        <img src={BannerMiniShape2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="partners-slider ">
                            <Slider {...settings} className='partners-slider-content'>
                                <div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner1} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner2} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner3} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner4} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner5} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner6} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image servincen" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={Partner7} alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="banner-ellipse1" ></div>
                    <div className="partners-shape" ></div>
                </div>
            </section>

            <div className="gradient-bg">
                {/* about section */}
                <section className='AboutSection sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content">
                                    <div className="left-subtitle">
                                        <h6 data-aos="fade-right" data-aos-duration="1000">About Us</h6>
                                    </div>
                                    <div className="large-title">
                                        <h1 className='mini-title-animation'>Welcome to <br />Prophecy <br />Technologies</h1>
                                    </div>
                                    <p data-aos="fade-right" data-aos-duration="1000" className='small-title'>Shaping the Future of <br />Business Experiences</p>
                                    <a href="/about">
                                        <div className="shape" data-aos="zoom-in" data-aos-duration="1000">
                                            <img src={AboutArrow} alt="" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="right-content">
                                    <p className='para-animation'>At Prophecy Technologies, we are on a mission to transform how businesses interact with their customers. In a rapidly evolving digital landscape, bridging the gap between business goals and customer experiences is not just a challenge; it’s an opportunity. We empower businesses to embrace change, leverage data-driven insights, and optimize customer journeys through the power of AI, connected data, and actionable insights. Our vision is to help you deliver personalized, relevant, and engaging experiences that drive both business growth and customer loyalty.</p>
                                    <p className=' para-animation'> With a broad range of services and cutting-edge technology solutions, Prophecy Technologies is your partner in navigating digital transformation. We pride ourselves on delivering results that matter. Welcome to a new era of business success, powered by Prophecy Technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='assurance_section sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box" data-aos="zoom-out" data-aos-duration="1000">
                                    <div className="sec-title">
                                        <h1 className='mini-title-animation'>The 4 A's of Prophecy</h1>
                                        <div className="center-subtitle">
                                            <h6>Our Assurance</h6>
                                        </div>
                                    </div>
                                    <div className="shape">
                                        <div className="line1">
                                            <img src={AssuranceLine1} alt="" />
                                        </div>
                                        <div className="line2">
                                            <img src={AssuranceLine2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="box-content box1 rainbow" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <div className="icon">
                                        <img src={AssuranceIcon1} alt="" />
                                    </div>
                                    <h1>Attunement</h1>
                                    <p>Harmonizing goals <br />with action</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box2 rainbow" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className="icon">
                                        <img src={AssuranceIcon2} alt="" />
                                    </div>
                                    <h1>Answerability</h1>
                                    <p>Standing Behind Every Promise</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box1 rainbow" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                                    <div className="icon">
                                        <img src={AssuranceIcon3} alt="" />
                                    </div>
                                    <h1>Adaptability</h1>
                                    <p>Thriving in Change, Leading Innovation</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box2 rainbow" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
                                    <div className="icon">
                                        <img src={AssuranceIcon4} alt="" />
                                    </div>
                                    <h1>Attainment</h1>
                                    <p>Reaching New Heights Through Collaboration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
            </div>

            <section className='who-we-are-section sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="left-image" data-aos="fade-right" data-aos-duration="1000">
                                <img src={WhoWeAreImage} alt="" />
                                <div className="gradient-shape"></div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <div className="left-subtitle">
                                    <h6 data-aos="fade-down" data-aos-duration="1000">Who we are</h6>
                                </div>
                                <div className="large-title">
                                    <h1 className='mini-title-animation'>Visionaries <br />Of Innovation</h1>
                                </div>
                                <p className='para-animation'>Prophecy Technologies was founded with a clear vision: to help businesses
                                    unlock their full potential by offering innovative, tailored solutions. Our founders
                                    identified a critical gap between the way businesses operate and how they
                                    engage with customers. Today, we help bridge that gap by offering
                                    forward-thinking strategies and technologies that turn visions into reality.</p>
                                <p className='para-animation'>Our approach is rooted in a deep understanding of both business needs and
                                    customer expectations. By combining technical expertise with a commitment to
                                    innovation, we enable businesses to create seamless, personalized experiences
                                    for their customers. With 600+ resources, 6+ global locations, 200+ successfully completed projects,
                                    and 100+ developer teams, Prophecy Technologies has the expertise, scale, and
                                    resources to help your business grow, thrive, and transform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="checked-shape">
                        <img src={WhoWeAreChecked} alt="" />
                    </div>
                </div>
            </section>

            <div className="gradient-bg-2">
                <section className='our-core-services sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title">
                                <div className="center-subtitle">
                                    <h6 data-aos="fade-down" data-aos-duration="1000">Our Core Services</h6>
                                </div>
                                <div className="large-title">
                                    <h1 className='mini-title-animation'>Powering Your <br />Business Growth</h1>
                                </div>
                                <p className='para-animation'>At Prophecy Technologies, we offer a comprehensive range of services designed
                                    to help businesses excel in an increasingly digital and connected world. Our
                                    team of experts collaborates closely with clients to understand their needs and
                                    craft solutions that deliver measurable results. Here’s a closer look at our core services:
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>AI & Data Analytics</h1>
                                        <p>Harness the power of AI and advanced analytics with Prophecy Technologies. We deliver data-driven solutions, leveraging machine learning and big data to uncover actionable insights. Optimize decision-making, improve operational efficiency, and accelerate growth with customized strategies tailored to your business goals. Turn raw data into meaningful innovation with us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Digital Acceleration</h1>
                                        <p>Embrace digital transformation with Prophecy Technologies. We streamline your business processes, enhance user experiences, and unlock new revenue streams through cutting-edge digital solutions. From cloud adoption to workflow automation, we ensure rapid implementation and seamless integration, driving your business towards a future-ready digital ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Application Modernization</h1>
                                        <p>Modernize legacy applications with Prophecy Technologies to align with evolving business needs. We redesign, refactor, and re-platform outdated software using cloud-native technologies and microservices. Enhance scalability, reduce operational costs, and improve performance while maintaining continuity. Future-proof your IT ecosystem with our tailored modernization solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Database Modernization
                                        </h1>
                                        <p>Upgrade your data infrastructure with our comprehensive database modernization services. Prophecy Technologies ensure seamless migration, optimized performance, and enhanced security for legacy databases. Leverage cloud-based or hybrid solutions to reduce costs and boost efficiency, enabling your business to scale effortlessly and adapt to ever-changing demands.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Infrastructure Modernization</h1>
                                        <p>Transform your IT infrastructure for agility and resilience. Prophecy Technologies provides end-to-end infrastructure modernization, integrating cloud platforms, advanced automation, and scalable systems. Optimize resource utilization, enhance security, and support dynamic business needs with our robust solutions designed for sustainable growth.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Cybersecurity</h1>
                                        <p>Protect your business with Prophecy Technologie’s comprehensive cybersecurity solutions. From risk assessments to advanced threat mitigation, we secure your digital assets against evolving cyber threats. Safeguard sensitive data, maintain regulatory compliance, and build customer trust with proactive and adaptive security strategies tailored to your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Site Reliability Services</h1>
                                        <p>Ensure unparalleled reliability with Prophecy Technologies's Site Reliability Services. We combine robust monitoring, automated incident management, and performance optimization to keep your applications running seamlessly. Minimize downtime, enhance user experience, and drive operational excellence with solutions that deliver high availability and resilience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Automation</h1>
                                        <p>Transform your operations with Prophecy Technologies' innovative automation tools. From Robotic Process Automation (RPA) to intelligent workflows, we optimize operations by simplifying complex processes, reducing errors, and eliminating inefficiencies. Our customized strategies empower your business to innovate and achieve its goals effortlessly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Staffing & IT Consulting</h1>
                                        <p>Prophecy Technologies bridges talent gaps with expert Staffing and IT Consulting services. We provide highly skilled professionals and strategic guidance to meet your project needs. Enhance operational efficiency, scale effectively, and achieve your IT goals with our customized, results-driven solutions designed for success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checked-shape">
                            <img src={CtaChecked} alt="" />
                        </div>
                    </div>
                </section>
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
                <div className="gradient-bg-radial-3"></div>
            </div>



            <section className='approach-section sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="center-subtitle">
                                <h6 data-aos="fade-down" data-aos-duration="1000" >Our Approach</h6>
                            </div>
                            <div className="large-title">
                                <h1 className='mini-title-animation'>How We Deliver<br />Excellence</h1>
                            </div>
                            <p className='para-animation'>We start by listening to your needs. Every business is unique, and so are its challenges. Our dedicated team collaborates with you to understand your objectives and obstacles, developing customized solutions aimed at driving measurable results.</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="approach-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <div className="icon">
                                        <img src={ApproachIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Customer-Centric Solutions</h1>
                                        <p>We start by listening to your needs. Every business is unique, and so are its
                                            challenges. Our team works closely with you to understand your goals and pain
                                            points, tailoring solutions that deliver measurable impact.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="approach-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                    <div className="icon">
                                        <img src={ApproachIcon2} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Innovative Strategies</h1>
                                        <p>Innovation is at the heart of everything we do. We leverage the latest
                                            technologies and trends to create cutting-edge solutions that keep your business
                                            ahead of the curve. Whether it's integrating AI into your customer experience
                                            strategy or modernizing your IT infrastructure, we provide innovative, future-proof
                                            solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="approach-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                                    <div className="icon">
                                        <img src={ApproachIcon3} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Data-Driven Insights</h1>
                                        <p>In today’s data-driven world, making informed decisions is crucial for success. Prophecy Technologies delivers actionable insights by harnessing connected data and advanced analytics. Our data-centric approach ensures that you are not just reacting to trends - you are anticipating them.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="approach-box-large approach-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <div className='content'>
                                        <div className="icon">
                                            <img src={ApproachIcon4} alt="" />
                                        </div>
                                        <div className="content">
                                            <h1>Collaborative Partnerships</h1>
                                            <p>We work with you, not just for you. Our team becomes part of yours, providing ongoing support and collaboration throughout every phase of the project. From planning to completion, we are your reliable partners in progress.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="image" data-aos="zoom-in" data-aos-duration="1000">
                                        <img src={ApproachImage} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000">
                                <div className="approach-box">
                                    <div className="icon">
                                        <img src={ApproachIcon5} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Continuous Improvement</h1>
                                        <p>Our commitment to excellence extends beyond project completion. We believe in the value of continuous improvement, constantly refining our solutions to meet evolving needs. By embracing innovation, we ensure our offerings remain relevant and effective. Our focus is on optimizing performance for long-term success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='technologies-section sec-padding' id='technology-sec-desktop'>
                <div className="container">
                    <div className="row">
                        <div className="shape" >
                            <div data-aos="zoom-in" data-aos-duration="1000">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                            </div>
                            <div className="sec-title">
                                <div className="large-title">
                                    <h1 className='mini-title-animation'>Why Choose <br />Prophecy <br />Technologies?</h1>
                                </div>
                                <p className='para-animation text-center'>Choosing the right partner is critical to your success. Here’s why Prophecy Technologies is the ideal choice.</p>
                            </div>

                            <div className="content-one box-content" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="icon">
                                    <img src={TechnologiesIcon1} alt="" />
                                </div>
                                <div className="content">
                                    <h1>Expertise Across Industries</h1>
                                    <p>Our team has deep expertise in a wide range of industries, allowing us to offer
                                        tailored solutions that meet the specific needs of your business. From finance to
                                        healthcare, retail to manufacturing, we’ve got you covered.
                                    </p>
                                </div>
                            </div>
                            <div className="content-two box-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                                <div className="icon">
                                    <img src={TechnologiesIcon2} alt="" />
                                </div>
                                <div className="content">
                                    <h1>End-to-End Solutions</h1>
                                    <p>We offer comprehensive, end-to-end solutions that address every aspect of your
                                        digital transformation. Whether you need help with Adobe integration, SAP
                                        services, or Cybersecurity, we provide the expertise and resources you need to
                                        succeed.
                                    </p>
                                </div>
                            </div>
                            <div className="content-three box-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
                                <div className="icon">
                                    <img src={TechnologiesIcon3} alt="" />
                                </div>
                                <div className="content">
                                    <h1>Global Reach</h1>
                                    <p>With over 6+ locations across the globe, we have the resources and scale to
                                        support businesses of all sizes. Whether you're a local company or a global
                                        enterprise, Prophecy Technologies delivers consistent, high-quality results.</p>
                                </div>
                            </div>
                            <div className="content-four box-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                                <div className="icon">
                                    <img src={TechnologiesIcon4} alt="" />
                                </div>
                                <div className="content">
                                    <h1>Proven Track Record</h1>
                                    <p>With over 200+ successful projects and 100+ developer teams, we have a
                                        proven track record of delivering excellence. Our clients trust us to deliver on our
                                        promises, and we are proud of the long-term partnerships we’ve built.</p>
                                </div>
                            </div>
                            <div className="content-five box-content" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
                                <div className="icon">
                                    <img src={TechnologiesIcon5} alt="" />
                                </div>
                                <div className="content">
                                    <h1>Commitment to Innovation</h1>
                                    <p>Innovation is at the core of everything we do. We stay ahead of the latest trends
                                        and technologies, providing solutions that are not just current, but future-proof.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='technologies-section sec-padding' id='technology-sec-mobile'>
                <div className="container">
                    <div className="sec-title">
                        <div className="large-title">
                            <h1 className='mini-title-animation'>Why Choose <br />Prophecy <br />Technologies?</h1>
                        </div>
                        <p>Choosing the right partner is critical to your success. Here’s why Prophecy Technologies stands out from the rest:</p>
                    </div>
                    <div className="row">
                        <div className="content-one box-content" data-aos="fade-up" data-aos-duration="1000">
                            <div className="icon">
                                <img src={TechnologiesIcon1} alt="" />
                            </div>
                            <div className="content">
                                <h1>Expertise Across Industries</h1>
                                <p>Our team has deep expertise in a wide range of industries, allowing us to offer
                                    tailored solutions that meet the specific needs of your business. From finance to
                                    healthcare, retail to manufacturing, we’ve got you covered.</p>
                            </div>
                        </div>
                        <div className="content-two box-content" data-aos="fade-up" data-aos-duration="1000">
                            <div className="icon">
                                <img src={TechnologiesIcon2} alt="" />
                            </div>
                            <div className="content">
                                <h1>End-to-End Solutions</h1>
                                <p>We offer comprehensive, end-to-end solutions that address every aspect of your
                                    digital transformation. Whether you need help with Adobe integration, SAP
                                    services, or Cybersecurity, we provide the expertise and resources you need to
                                    succeed.</p>
                            </div>
                        </div>
                        <div className="content-three box-content" data-aos="fade-up" data-aos-duration="1000">
                            <div className="icon">
                                <img src={TechnologiesIcon3} alt="" />
                            </div>
                            <div className="content">
                                <h1>Global Reach</h1>
                                <p>With over 6+ locations across the globe, we have the resources and scale to
                                    support businesses of all sizes. Whether you're a local company or a global
                                    enterprise, Prophecy Technologies delivers consistent, high-quality results</p>
                            </div>
                        </div>
                        <div className="content-four box-content" data-aos="fade-up" data-aos-duration="1000">
                            <div className="icon">
                                <img src={TechnologiesIcon4} alt="" />
                            </div>
                            <div className="content">
                                <h1>Proven Track Record</h1>
                                <p>With over 200+ successful projects and 100+ developer teams, we have a
                                    proven track record of delivering excellence. Our clients trust us to deliver on our
                                    promises, and we are proud of the long-term partnerships we’ve built.</p>
                            </div>
                        </div>
                        <div className="content-five box-content" data-aos="fade-up" data-aos-duration="1000">
                            <div className="icon">
                                <img src={TechnologiesIcon5} alt="" />
                            </div>
                            <div className="content">
                                <h1>Commitment to Innovation</h1>
                                <p>Innovation is at the core of everything we do. We stay ahead of the latest trends
                                    and technologies, providing solutions that are not just current, but future-proof.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='home-certification-new'>
                <div className="container">
                    <div className="large-title">
                        <h1 className='mini-title-animation'>Our Certifications</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="image">
                                    <svg fill="none" class="inline-block w-[76px] large:w-24 h-[76px] large:h-24 mb-7 large:mb-9" viewBox="0 0 76 77"><path d="M34.984 11.377 38 9.366l3.016 2.01-1.005-3.514 3.016-2.518h-4.022L38 1.83l-1.006 3.515h-4.021l3.016 2.518-1.005 3.515ZM18.889 15.905l3.024-2.518 3.016 2.518-1.005-4.022 3.016-2.01h-3.523L21.913 6.35l-1.005 3.523h-4.03l3.024 2.01-1.013 4.022ZM10.347 17.915l-1.005 3.523H5.32l3.016 2.51-1.005 3.523 3.016-2.011 3.017 2.01-1.006-3.522 3.016-2.51h-4.021l-1.006-3.523ZM6.325 41.049l3.017 2.51-1.512-3.516 3.522-2.517H7.331l-1.006-3.523-1.512 3.523H.792l3.523 2.517-1.513 3.515 3.523-2.51ZM11.353 53.612l-1.006-3.515-1.005 3.515H5.32l3.016 2.01-1.005 4.03 3.016-2.517 3.017 2.517-1.006-4.03 3.016-2.01h-4.021ZM23.417 65.177l-1.504-3.515-1.005 3.515h-4.03l3.523 2.518-1.512 3.515 3.024-2.51 3.016 2.51-1.005-3.515 3.016-2.518h-3.523ZM39.005 69.706 38 65.685l-1.006 4.021h-4.021l3.016 2.011-1.005 3.515L38 73.222l3.016 2.01-1.005-3.515 3.016-2.01h-4.022ZM55.092 65.177l-1.005-3.515-1.504 3.515H49.06l3.016 2.518-1.005 3.515 3.016-2.51 3.024 2.51-1.013-3.515 3.024-2.518h-4.03ZM66.658 53.612l-1.005-3.515-1.006 3.515h-4.021l3.016 2.01-1.005 4.03 3.016-2.517 3.016 2.517-1.005-4.03 3.016-2.01h-4.022ZM75.208 37.526h-4.021l-1.006-3.523-1.512 3.523h-4.021l3.523 2.01-1.513 4.022 3.523-2.51 3.017 2.51-1.512-4.021 3.522-2.011ZM62.637 27.47l3.016-2.517 3.016 2.518-1.005-3.523 3.016-2.51h-4.022l-1.005-3.523-1.006 3.523h-4.021l3.016 2.51-1.005 3.523ZM54.087 6.35 53.08 9.873H49.06l3.016 2.01-1.005 4.022 3.016-2.518 3.024 2.518-1.013-4.022 3.024-2.01h-4.03L54.087 6.35Z" fill="#fff"></path></svg>
                                </div>
                                <div className="content">
                                    <h6>GDRP</h6>
                                    <p>Compliant</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="image">
                                    <svg width="76" height="77" viewBox="0 0 76 77" fill="none" class="inline-block w-[76px] large:w-24 h-[76px] large:h-24 mb-7 large:mb-9">
                                        <path d="M72.8333 38.5301L38 3.69678L27.7083 13.9884L3.16663 38.5301L27.7083 63.0718L38 73.3634L72.8333 38.5301ZM27.7083 21.0422L45.212 38.5301L27.7083 56.018L10.2441 38.5301L27.7083 21.0422ZM52.25 38.5301L31.2312 17.4876L38 10.7426L65.7083 38.5301L38 66.3176L31.247 59.5726L52.25 38.5301Z" fill="#fff"></path>
                                    </svg>
                                </div>
                                <div className="content">
                                    <h6>ISO</h6>
                                    <p>27001 Certified</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="image">
                                    <svg fill="none" class="inline-block w-[76px] large:w-24 h-[76px] large:h-24 mb-7 large:mb-9" viewBox="0 0 75 77"><path d="m22.515 21.311 3.412 9.097h-1.892l-.72-1.948h-3.753l-.72 1.948h-1.853l3.396-9.097h2.13Zm-2.375 5.542h2.58l-1.29-3.499-1.29 3.5Zm9.642 3.555h-1.86V21.31h1.86v9.097Zm6.588-1.488a1.98 1.98 0 0 0 1.963-1.64l1.75.587a3.682 3.682 0 0 1-3.714 2.683c-2.454 0-4.243-1.94-4.243-4.686 0-2.747 1.789-4.687 4.243-4.687a3.682 3.682 0 0 1 3.713 2.684l-1.75.586a1.971 1.971 0 0 0-1.963-1.639c-1.393 0-2.375 1.203-2.375 3.056 0 1.852.982 3.056 2.375 3.056Zm7.774 1.488h-1.86V21.31h3.72c2.09 0 3.396.99 3.396 2.874 0 1.884-1.306 2.882-3.396 2.882h-1.86v3.34Zm1.773-4.924c1.092 0 1.646-.483 1.646-1.299 0-.815-.554-1.29-1.646-1.29h-1.773v2.589h1.773Zm9.69-4.173 3.404 9.097h-1.884l-.729-1.948h-3.744l-.729 1.948h-1.844l3.396-9.097h2.13Zm-2.375 5.542h2.573l-1.29-3.499-1.283 3.5Z" fill="#fff"></path><path d="M74.417 40.114H1.583" stroke="#AFE2E3" stroke-miterlimit="10"></path><path d="M25.183 56.01a3.285 3.285 0 0 0 2.652 1.52c.95 0 1.647-.42 1.647-1.187 0-.768-.863-.95-2.233-1.259-1.37-.309-2.826-.744-2.826-2.541s1.496-2.826 3.38-2.826A4.117 4.117 0 0 1 31.24 51.3l-1.227 1.203a2.66 2.66 0 0 0-2.256-1.306c-.887 0-1.496.435-1.496 1.093 0 .657.657.847 1.852 1.116 1.44.316 3.214.68 3.214 2.676 0 1.836-1.583 2.937-3.562 2.937a4.751 4.751 0 0 1-3.864-1.797l1.283-1.212Zm12.468-6.333c2.494 0 4.307 1.931 4.307 4.686s-1.797 4.687-4.29 4.687c-2.494 0-4.331-1.94-4.331-4.687 0-2.747 1.805-4.686 4.314-4.686Zm0 1.63c-1.432 0-2.438 1.196-2.438 3.056s1.006 3.056 2.438 3.056c1.433 0 2.375-1.195 2.375-3.056 0-1.86-.957-3.055-2.375-3.055ZM48.07 57.42a1.98 1.98 0 0 0 1.963-1.64l1.75.587a3.682 3.682 0 0 1-3.713 2.684c-2.454 0-4.243-1.94-4.243-4.687 0-2.747 1.789-4.687 4.243-4.687a3.681 3.681 0 0 1 3.713 2.684l-1.75.586a1.971 1.971 0 0 0-1.963-1.639c-1.394 0-2.375 1.203-2.375 3.056 0 1.852 1.013 3.056 2.375 3.056Z" fill="#fff"></path><path d="M74.417 38.53C74.417 18.418 58.112 2.114 38 2.114c-20.112 0-36.417 16.304-36.417 36.416 0 20.113 16.305 36.417 36.417 36.417 20.112 0 36.417-16.304 36.417-36.417Z" stroke="#AFE2E3" stroke-miterlimit="10"></path></svg>
                                </div>
                                <div className="content">
                                    <h6>SOC2</h6>
                                    <p>Type2 - Verified</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="item" data-aos="zoom-in" data-aos-duration="1000">
                                <div className="image">
                                    <svg fill="none" class="inline-block w-[76px] large:w-24 h-[76px] large:h-24 mb-7 large:mb-9" viewBox="0 0 76 77"><path d="M11.574 24.28a4.021 4.021 0 0 1 4.18-3.958h34.699a21.587 21.587 0 0 1 4.465.238 11.915 11.915 0 0 1 8.526 6.65 10.926 10.926 0 0 1-.237 9.618c-1.275 2.684-3.808 4.537-6.484 5.82 2.58 4.654 5.067 9.364 7.584 14.06-3.111 0-6.215.055-9.318 0a7.353 7.353 0 0 1-1.045-1.68c-2.019-3.752-4.022-7.504-6.127-11.217h-4.798c-.071 4.283 0 8.581 0 12.864-2.842.111-5.684.048-8.526 0V45.458c.103-2.375 0-4.671.047-6.999a3.119 3.119 0 0 1 3.167-2.77h11.875c1.416.086 2.837.009 4.236-.23a3.538 3.538 0 0 0-1.338-6.872c-10.751 0-21.502.071-32.245-.063v7.172l1.971-.071c2.993.127 5.985 0 8.97.08 0 2.683-.15 5.375.047 8.05H20.251c-.08 4.3 0 8.59 0 12.889-2.85.15-5.716 0-8.574.055a2459.364 2459.364 0 0 1-.103-32.419Z" fill="#fff"></path></svg>
                                </div>
                                <div className="content">
                                    <h6>FEDRAMP</h6>
                                    <p>Compliant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className='cta-section common-btn sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Let's Build Your <br />Future Together</h1>
                            </div>
                            <p className='para-animation'>At Prophecy Technologies, we believe that every business has the potential to
                                achieve greatness. Our mission is to help you unlock that potential by providing
                                the tools, technologies, and strategies needed to succeed in today’s competitive
                                landscape. If you're ready to take the next step in your business’s digital transformation,
                                contact us today and discover how Prophecy Technologies can help you achieve
                                your goals.</p>
                            <a href="contact">
                                <button data-aos="zoom-in" data-aos-duration="1000">Get Started</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Home;
