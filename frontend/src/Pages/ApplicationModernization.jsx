
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import Ser1 from "../Assets/Resources/serviceImages/ApplicationModernization_img1.png"
import Ser2 from "../Assets/Resources/serviceImages/ApplicationModernization_img2.png"
import Ser3 from "../Assets/Resources/serviceImages/ApplicationModernization_img3.png"
import Ser4 from "../Assets/Resources/serviceImages/ApplicationModernization_img4.png"
import Ser5 from "../Assets/Resources/serviceImages/ApplicationModernization_img5.png"
import ServiceStar from "../Assets/Resources/service-star.svg"
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import AllPageLoader from '../Components/AllPageLoader';

const ApplicationModernization = () => {


    const serSettings = {
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // For screens smaller than 576px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };




    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const SplitTypes = document.querySelectorAll('.text-reveal-animation');
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



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const SplitTypes = document.querySelectorAll('.text-reveal-animation');
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







    return (
        <>
            <AllPageLoader />
            <section className='service-hero-section'>
                <div className="container-fluid common-btn">
                    <div className="row">
                        <div className="banner-content">
                            <h1 className='ban-title-animation'>Prophecy <br />Technologies</h1>
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Upgrade, Innovate, Dominate: Application Modernization Made Easy!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Upgrade your applications to harness the latest technologies and enhance performance
                                with Prophecy Technologies. Our application modernization services simplify the
                                transformation process, ensuring seamless integration and improved user experiences.
                            </p>
                            <a href="/contact">
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Talk with Our Experts</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="service-hero-shape">
                    <img src={ServiceBanShape} alt="" />
                </div>
            </section>


            <section className='service-section-one  sec-padding smarteerTomorrow service-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="content large-title">
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Upgrade Your Applications:</h6>
                                <h1 className='mini-title-animation'>Stay Relevant <br />in a Digital <br />World!</h1>
                                <p className='para-animation'>Upgrading your applications is essential to stay relevant in today's fast-paced digital
                                    world. At Prophecy Technologies, we specialize in application modernization,
                                    transforming legacy systems into agile, high-performing solutions that meet current
                                    business needs. By embracing the latest technologies, you can enhance user
                                    experiences and streamline operations, ensuring your organization remains competitive.
                                </p>
                                <p className='para-animation'>Our expert team works closely with you to identify the best strategies for modernization,
                                    minimizing disruptions while maximizing efficiency. With our tailored solutions, your
                                    applications will not only keep pace with industry trends but also drive innovation and
                                    growth. Stay ahead of the competition and empower your business with upgraded
                                    applications that stand the test of time!</p>
                                <a href="/contact" className='common-btn service-large-btn'>
                                    <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Get Started With Us Now!</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                                <img src={Ser1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="gradient-bg">
                <section className='service-section-three gradient-bg sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Why Application Modernization is</h6>
                                    <h1 className='mini-title-animation'>Crucial for <br />Businesses <br />Today?
                                    </h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser2} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>In an increasingly digital landscape, application modernization is essential for
                            businesses to thrive and adapt to changing market demands.
                        </p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Enhancing Efficiency and Productivity</h6>
                                                <p>Modern applications streamline processes and automate tasks, allowing teams to focus
                                                    on strategic initiatives rather than mundane operations. This boost in efficiency directly
                                                    translates to increased productivity across the organization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Improving User Experience</h6>
                                                <p>Upgrading legacy systems improves the user interface and experience, leading to
                                                    higher satisfaction among employees and customers. Modern applications are designed
                                                    with user-centric approaches, ensuring accessibility and ease of use.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Supporting Agile Business Practices</h6>
                                                <p>Application modernization enables organizations to respond swiftly to market changes
                                                    and customer needs. Agile systems facilitate faster deployments and iterations, keeping
                                                    your business adaptable and competitive.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Boosting Security and Compliance
                                                </h6>
                                                <p>Legacy applications often lack the robust security features required to protect sensitive
                                                    data. Modernization integrates advanced security protocols, ensuring compliance with
                                                    industry regulations and safeguarding your business from cyber threats.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Leveraging Data Insights</h6>
                                                <p>Modern applications provide better analytics and reporting capabilities, enabling
                                                    businesses to harness data for informed decision-making. By transforming raw data into
                                                    actionable insights, organizations can identify trends and opportunities for growth.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Cost Savings in the Long Run</h6>
                                                <p>While modernization may require an upfront investment, it ultimately leads to cost
                                                    savings by reducing maintenance expenses and minimizing downtime. Updated
                                                    applications are more efficient and less prone to costly failures.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>Application modernization is not just a technical upgrade; it is a strategic necessity that
                                    drives efficiency, security, and competitive advantage in today's dynamic business
                                    environment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-radial-1"></div>
                    <div className="gradient-bg-radial-2"></div>
                </section>
            </div>


            <section className='service-section-three no-gradient-bg sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                <img src={Ser3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Our Services:</h6>
                                <h1 className='mini-title-animation'>Application <br />Modernization</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologies offers a comprehensive suite of application modernization
                        services designed to transform your legacy systems into cutting-edge solutions that
                        drive efficiency and innovation.
                    </p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Assessment and Strategy Development</h6>
                                            <p>We begin with a thorough assessment of your existing applications to identify areas for
                                                improvement. Our team then develops a customized modernization strategy that aligns
                                                with your business goals and technology needs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Cloud Migration Services</h6>
                                            <p>Migrating your applications to the cloud enhances scalability and accessibility while
                                                reducing infrastructure costs. We ensure a seamless transition, optimizing your
                                                applications for cloud environments to maximize performance and reliability.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>User Interface and Experience Redesign</h6>
                                            <p>Our team focuses on revamping the user interface to create an intuitive and engaging
                                                experience. By incorporating modern design principles, we ensure your applications are
                                                user-friendly and meet the expectations of today’s digital consumers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Integration of Advanced Technologies</h6>
                                            <p>We integrate the latest technologies such as artificial intelligence, machine learning, and
                                                data analytics into your applications. This empowers your business with enhanced
                                                functionality and the ability to leverage data for strategic insights.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Legacy Code Modernization
                                            </h6>
                                            <p>Our experts work to refactor and modernize outdated codebases, improving
                                                maintainability and performance. By optimizing legacy code, we ensure your
                                                applications run efficiently and are easier to update in the future.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Ongoing Support and Maintenance</h6>
                                            <p>Post-modernization, we provide ongoing support to ensure your applications continue to
                                                operate smoothly. Our maintenance services include performance monitoring,
                                                troubleshooting, and regular updates to keep your systems up-to-date.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>By partnering with Prophecy Technologies for application modernization, you can unlock
                                the full potential of your applications, driving innovation and ensuring your business
                                remains competitive in a rapidly evolving market.</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Take the First Step with Prophecy Now!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <div className="gradient-bg">
                <section className='service-section-three gradient-bg sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">What industries can benefit from</h6>
                                    <h1 className='mini-title-animation'>application <br />modernization<br />, and how?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser4} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Application modernization offers significant advantages across various industries,
                            enabling them to enhance efficiency, improve user experiences, and stay
                            competitive in the digital age.
                        </p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Healthcare
                                                </h6>
                                                <p>In the healthcare sector, modernizing applications enhances patient care through
                                                    better data management and improved interoperability. Streamlined systems
                                                    facilitate real-time access to patient information, leading to more informed
                                                    decision-making and faster responses.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Finance and Banking</h6>
                                                <p>Financial institutions can leverage application modernization to improve security
                                                    and compliance with regulatory standards. Enhanced analytics capabilities
                                                    enable better risk management and personalized customer experiences, driving
                                                    growth and retention.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Retail and E-Commerce</h6>
                                                <p>In retail, modernized applications can provide a seamless shopping experience
                                                    across multiple channels. Enhanced inventory management and data analytics
                                                    help businesses understand customer behaviour, optimize operations, and boost
                                                    sales.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Manufacturing
                                                </h6>
                                                <p>Manufacturers can benefit from modernized applications through improved
                                                    supply chain management and operational efficiency. Real-time data access
                                                    allows for better decision-making and quicker response times to market
                                                    demands.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Telecommunications</h6>
                                                <p>The telecommunications industry relies on application modernization to enhance
                                                    service delivery and customer support. Improved applications enable better
                                                    network management and faster deployment of new services, increasing
                                                    customer satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Education</h6>
                                                <p>Educational institutions can modernize their applications to provide a more
                                                    interactive and engaging learning experience. Enhanced data management
                                                    systems allow for personalized education pathways and improved administrative
                                                    efficiency</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Transportation and Logistics</h6>
                                                <p>Application modernization in transportation improves route optimization and
                                                    tracking capabilities. Enhanced data analytics helps logistics companies make
                                                    informed decisions, reducing costs and improving delivery times.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Energy and Utilities</h6>
                                                <p>Energy and utility companies can leverage modernized applications for better
                                                    resource management and real-time monitoring. Improved data analytics enable
                                                    predictive maintenance, optimizing operations and reducing downtime.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Government</h6>
                                                <p>Government agencies can modernize applications to improve service delivery
                                                    and enhance citizen engagement. Streamlined processes and better data
                                                    management facilitate transparency and efficiency in operations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Insurance</h6>
                                                <p>In the insurance sector, application modernization enables faster claims
                                                    processing and improved customer service. Enhanced data analytics help
                                                    insurers assess risks more accurately and develop tailored products for clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                    <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Contact Us To Get Started
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-radial-1"></div>
                    <div className="gradient-bg-radial-2"></div>
                </section>
            </div>


            <section className='service-section-three no-gradient-bg sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
                                <img src={Ser5} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Our Approach to </h6>
                                <h1 className='mini-title-animation'> Application <br />Modernization</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Our approach to application modernization is tailored to meet the unique needs of each
                        organization, ensuring a seamless transition to cutting-edge solutions that drive
                        efficiency and growth.
                    </p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Comprehensive Assessment
                                            </h6>
                                            <p>We start by conducting a thorough assessment of your existing applications to identify
                                                strengths, weaknesses, and opportunities for improvement. This evaluation helps us
                                                understand your business requirements and technology landscape.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Strategic Planning</h6>
                                            <p>Based on the assessment, we develop a strategic modernization plan that aligns with
                                                your business goals. This roadmap outlines the necessary steps, timelines, and
                                                resources needed for a successful transformation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Technology Selection </h6>
                                            <p>Our experts evaluate and recommend the most suitable technologies for your
                                                modernization efforts. By leveraging the latest tools and frameworks, we ensure that
                                                your applications are equipped to handle future challenges.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Cloud Integration</h6>
                                            <p>We facilitate the migration of your applications to cloud environments, enhancing
                                                scalability and flexibility. Our cloud integration services are designed to minimize
                                                disruptions while maximizing performance and reliability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>User-Centric Design</h6>
                                            <p>Focusing on user experience, we revamp the application interface to be intuitive and
                                                engaging. Our user-centric design approach ensures that the end-users can easily
                                                navigate and utilize the modernized applications effectively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Agile Development Methodology</h6>
                                            <p>We employ agile development practices to ensure flexibility and responsiveness
                                                throughout the modernization process. This iterative approach allows for continuous
                                                feedback and adjustments, leading to a more refined end product.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Quality Assurance</h6>
                                            <p>Rigorous testing is integral to our modernization process. We conduct comprehensive
                                                quality assurance to identify and resolve any issues before deployment, ensuring that
                                                your applications perform flawlessly</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Training and Support</h6>
                                            <p>Post-modernization, we provide training to your team, equipping them with the skills
                                                needed to maximize the benefits of the new applications. Our ongoing support ensures
                                                that any challenges are addressed promptly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Performance Monitoring</h6>
                                            <p>We implement performance monitoring tools to track the efficiency of the modernized
                                                applications. This allows us to identify areas for further optimization and ensure that the
                                                applications continue to meet your business needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Schedule a Free Consultation With Us!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <section className='cta-section common-btn sec-padding service-page-cta'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h6>Connect with Us to</h6>
                                <h1 className='mini-title-animation'>Reinvent Your <br />Applications!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Connect with us to embark on a transformative journey that reinvents your
                                applications for the digital age. Our expert team at Prophecy Technologies is
                                dedicated to modernizing your systems, enhancing efficiency, and driving
                                innovation. Together, we can unlock the full potential of your business through
                                tailored application solutions that meet your evolving needs</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn '>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Start Your Journey with Prophecy !
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ApplicationModernization