
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import Ser1 from '../Assets/Resources/serviceImages/DatabaseModernization_img1.png'
import Ser2 from '../Assets/Resources/serviceImages/DatabaseModernization_img2.png'
import Ser3 from '../Assets/Resources/serviceImages/DatabaseModernization_img3.png'
import Ser4 from '../Assets/Resources/serviceImages/DatabaseModernization_img4.png'
import Ser5 from '../Assets/Resources/serviceImages/DatabaseModernization_img5.png'
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceStar from "../Assets/Resources/service-star.svg"
import AllPageLoader from '../Components/AllPageLoader';

const DatabaseModernization = () => {


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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Redefine Speed and Scale with Database Modernization!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Redefine speed and scale with Prophecy Technology database modernization solutions,
                                transforming outdated systems into high-performance, scalable assets. Our team
                                ensures seamless integration with cutting-edge technology, enhancing data accessibility
                                and security.</p>
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Set New Standards <br />in Speed & Precision with</h6>
                                <h1 className='mini-title-animation'> Our Database <br />Upgrades!</h1>
                                <p className='para-animation'>Upgrade your database systems with Prophecy Technologies and experience
                                    unparalleled speed and precision in your applications. Our database modernization
                                    services optimize performance, reduce latency, and ensure seamless data flow,
                                    enabling faster decision-making and enhanced user experience. By adopting
                                    state-of-the-art technology, we help you keep pace with the demands of today’s digital
                                    landscape.</p>
                                <p className='para-animation'>Our team specializes in modernizing outdated databases through cloud integration,
                                    real-time analytics, and advanced data management techniques. With a focus on
                                    security and scalability, we tailor each upgrade to fit your organization’s needs, ensuring
                                    sustainable performance as you grow. Set new standards in speed and precision with
                                    Prophecy Technologies, transforming data into a powerful asset for your business.</p>
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
                                    <h6>What are the signs that your <br />organization needs</h6>
                                    <h1 className='mini-title-animation'>Database<br />
                                        Modernization</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser2} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>If your organization’s databases are slowing down your operations, it may be time for a
                            database modernization with Prophecy Technologies.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Performance Bottlenecks</h6>
                                                <p>If data retrieval is slow or complex queries take too long, outdated infrastructure may be
                                                    the cause. Modern databases optimize query handling, improving speed and efficiency</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>High Maintenance Costs
                                                </h6>
                                                <p>Legacy databases often require frequent patches and updates, inflating maintenance
                                                    costs. Upgrading to a modern system reduces overhead and minimizes ongoing support
                                                    needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Inflexibility in Scaling</h6>
                                                <p>As your business grows, a rigid database structure limits scalability. Modern databases
                                                    are designed for flexible, seamless scaling to meet increasing data demands.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Security Risks</h6>
                                                <p>Outdated systems are more vulnerable to cyber threats, putting sensitive data at risk.
                                                    Modern databases provide enhanced security features and compliance capabilities.
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
                                                <h6>Inability to Integrate with Modern Applications</h6>
                                                <p>Older databases may struggle to integrate with cloud and mobile applications, limiting
                                                    business agility. Modernization ensures compatibility with contemporary systems,
                                                    enhancing connectivity.

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
                                                <h6>Data Redundancy and Inconsistencies</h6>
                                                <p>Legacy systems often create duplicate or inconsistent data records, leading to errors.
                                                    Modernizing your database enhances data integrity and consistency across platforms</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Limited Access to Real-Time Analytics</h6>
                                                <p>Without real-time data, decision-making is often delayed. Modern databases enable
                                                    real-time analytics, providing insights when you need them most.
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
                                                <h6>Dependency on Outdated Technology
                                                </h6>
                                                <p>Older databases may rely on outdated, unsupported technologies. Modernization
                                                    replaces these dependencies, reducing downtime risks and future-proofing your
                                                    systems.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>Upgrade to a modern database with Prophecy Technologies to boost speed, precision,
                                    and security, positioning your business for future success</p>
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
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Our Comprehensive</h6>
                                <h1 className='mini-title-animation'>Database <br />Modernization <br />Services</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologies offers comprehensive database modernization services to
                        elevate performance, scalability, and security in your applications.</p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Database Assessment and Strategy</h6>
                                            <p>We begin with a full assessment of your existing database to identify pain points and
                                                opportunities. Our experts then create a tailored modernization strategy aligned with
                                                your business goals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Cloud Migration</h6>
                                            <p>Move your databases to the cloud for improved flexibility and cost-efficiency. We
                                                manage the entire migration process, ensuring minimal disruption to operations.
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
                                            <h6>Data Re-Platforming</h6>
                                            <p>We transform legacy databases onto new platforms suited to your requirements,
                                                enhancing both speed and scalability. This process modernizes your infrastructure
                                                without data loss.
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
                                            <h6>Database Refactoring</h6>
                                            <p>Refactoring legacy databases enables us to optimize your data structures and query
                                                performance. We streamline operations by restructuring and simplifying your data
                                                models</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Real-Time Analytics Integration</h6>
                                            <p>Transform your database to support real-time analytics and faster decision-making. We
                                                enable data streaming and immediate insights, enhancing operational responsiveness.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Backup and Disaster Recovery Optimization</h6>
                                            <p>We improve your database's backup and recovery processes to protect against data
                                                loss. Our solutions ensure high availability and rapid recovery, even during critical
                                                failures.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Legacy System Decommissioning</h6>
                                            <p>After modernization, we handle the safe decommissioning of outdated systems. This
                                                minimizes risk and frees up resources for future growth and innovation.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>With Prophecy Technologies' database modernization services, drive your organization
                                toward a more resilient, efficient, and future-ready data environment.</p>
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
                                    <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">How do we maintain data quality </h6>
                                    <h1 className='mini-title-animation'>During & after<br />Modernization ?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser4} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>At Prophecy Technologies, we prioritize data quality to ensure a seamless, error-free
                            modernization process for your applications.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Profiling and Analysis
                                                </h6>
                                                <p>We begin with comprehensive data profiling to understand your data’s structure, quality,
                                                    and potential issues. This step helps us identify inconsistencies, duplicates, and other
                                                    areas needing attention</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Cleansing and Deduplication
                                                </h6>
                                                <p>We eliminate duplicate and irrelevant data before migration, ensuring a streamlined and
                                                    accurate dataset. Our cleansing process improves data reliability and prevents quality
                                                    issues from carrying over.
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
                                                <h6>Validation and Consistency Checks</h6>
                                                <p>Throughout modernization, we conduct validation and consistency checks to catch
                                                    errors in real-time. These checks ensure that data remains accurate and aligned with
                                                    business rules.
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
                                                <h6>Data Transformation and Standardization</h6>
                                                <p>To maintain uniformity, we transform data into standardized formats, allowing seamless
                                                    integration with modern applications. Standardization enhances data quality and
                                                    usability across systems.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Continuous Monitoring and Quality Audits</h6>
                                                <p>After modernization, we implement continuous monitoring tools to detect any quality
                                                    issues early. Routine audits allow us to maintain high standards and quickly address
                                                    potential problems.
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
                                                <h6>Data Governance Policies</h6>
                                                <p>We establish clear data governance policies to define roles, responsibilities, and quality
                                                    benchmarks. Governance ensures consistent data management practices across your
                                                    organization.
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
                                                <h6>Automated Quality Controls</h6>
                                                <p>Automated tools streamline data quality checks, enhancing accuracy and reducing
                                                    manual errors. Automated controls help maintain quality even as data volume grows.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>End-User Training and Support</h6>
                                                <p>We provide training for end-users to ensure proper data handling and usage. This
                                                    reduces errors and reinforces quality standards within your organization.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>With Prophecy Technologies, your data quality remains secure and reliable throughout
                                    the modernization process and beyond.
                                </p>
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
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">What are the first steps to start the</h6>
                                <h1 className='mini-title-animation'>Database <br />Modernization <br />Journey?</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Starting your database modernization journey with Prophecy Technologies involves a
                        strategic approach to ensure a smooth, impactful transition.
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
                                            <h6>Define Your Business Objectives</h6>
                                            <p>Begin by identifying the specific goals you aim to achieve through modernization, such
                                                as improved performance, scalability, or security. Clear objectives guide the entire
                                                process and align technical solutions with business needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Assess Current Database Systems</h6>
                                            <p>Conduct a thorough assessment of your existing database infrastructure, including
                                                performance, compatibility, and pain points. This step provides insight into necessary
                                                upgrades and areas needing transformation. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Prioritize Workloads for Modernization</h6>
                                            <p>Identify and prioritize workloads based on criticality and impact on operations. Targeting
                                                high-impact areas first ensures quick wins and early value realization in your
                                                modernization journey.
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
                                            <h6>Create a Data Governance Framework</h6>
                                            <p>Establish data governance policies to ensure consistent data quality and security
                                                standards. A governance framework supports compliance and maintains quality
                                                throughout the modernization process.
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
                                            <h6>Choose the Right Modernization Approach</h6>
                                            <p>Select the appropriate modernization approach—such as re-platforming, refactoring, or
                                                re-hosting—based on your infrastructure needs and objectives. The right strategy
                                                minimizes risk and optimizes outcomes.
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
                                            <h6>Set Up a Skilled Team</h6>
                                            <p>Bring together a team of database experts, IT specialists, and business stakeholders. A
                                                skilled team ensures a successful, well-managed transition with minimal disruption to
                                                your organization.
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
                                            <h6>Develop a Roadmap and Timeline</h6>
                                            <p>Create a detailed roadmap that outlines each stage of the modernization process,
                                                complete with a timeline and milestones. This roadmap keeps the project on track and
                                                facilitates smooth execution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Plan for Data Migration and Testing</h6>
                                            <p>Plan your data migration strategy, including testing for accuracy and compatibility. A
                                                robust migration plan ensures data integrity and prevents potential issues during the
                                                transition.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>With Prophecy Technologies, start your database modernization journey with
                                confidence, ensuring a well-prepared and strategic approach to long-term success</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Schedule a Free Consultation With Us!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <section className='cta-section common-btn sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Reach Out to <br />Modernize Your <br />Data Today!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Unlock new possibilities by modernizing your data infrastructure with Prophecy
                                Technologies. Our experts will guide you through a seamless upgrade process,
                                enhancing performance, security, and scalability. Reach out today to transform
                                your data into a powerful asset for growth.</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn service-large-mega-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Step into Modernization with Prophecy Technologies!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default DatabaseModernization