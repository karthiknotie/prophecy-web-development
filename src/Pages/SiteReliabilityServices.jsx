
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import Ser1 from '../Assets/Resources/serviceImages/SiteReliability_img1.png'
import Ser2 from '../Assets/Resources/serviceImages/SiteReliability_img2.png'
import Ser3 from '../Assets/Resources/serviceImages/SiteReliability_img3.png'
import Ser4 from '../Assets/Resources/serviceImages/SiteReliability_img4.png'
import Ser5 from '../Assets/Resources/serviceImages/SiteReliability_img5.png'
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceStar from "../Assets/Resources/service-star.svg"
import AllPageLoader from '../Components/AllPageLoader';

const SiteReliabilityServices = () => {


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
                            <h1 className='ban-title-animation'>Site Reliability <br />Services</h1>
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Reliability Redefined: Your Partner in Uptime!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Prophecy Technologies offers comprehensive site reliability services that optimize
                                performance and minimize downtime, allowing your business to thrive. Partner with us
                                to create a robust infrastructure that guarantees seamless user experiences and
                                unwavering uptime</p>
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Uptime Assurance:</h6>
                                <h1 className='mini-title-animation'>Redefining <br />Site Reliability <br />for You!</h1>
                                <p className='para-animation'>At Prophecy Technologies, we understand that uptime is critical for your business
                                    operations, and our Site Reliability Services are designed to ensure your systems are
                                    always available. We leverage advanced monitoring tools and proactive maintenance
                                    strategies to identify potential issues before they impact your services. Our team of
                                    experts works diligently to deliver seamless user experiences, allowing your business to
                                    operate smoothly and efficiently</p>
                                <p className='para-animation'>Our commitment to uptime assurance goes beyond mere monitoring; we implement
                                    robust incident response protocols to quickly address any disruptions that may arise. By
                                    continuously optimizing your infrastructure and utilizing best practices, we enhance site
                                    reliability while minimizing downtime. With Prophecy Technologies as your partner, you
                                    can redefine reliability and focus on driving growth, knowing your systems are in
                                    capable hands.</p>
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
                                    <h6>What proactive measures</h6>
                                    <h1 className='mini-title-animation'>Do we take <br />to ensure <br />uptime?<br />
                                    </h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser2} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>At Prophecy Technologies, we take proactive measures to ensure optimal uptime and
                            site reliability, allowing your business to thrive without disruptions</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Continuous Monitoring</h6>
                                                <p>We implement 24/7 monitoring of your systems to detect performance issues and
                                                    anomalies in real time. This proactive approach allows us to address potential problems
                                                    before they escalate into significant downtime.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Regular Maintenance and Updates</h6>
                                                <p>We schedule regular maintenance and system updates to ensure your infrastructure
                                                    remains up-to-date. This helps prevent vulnerabilities and improves overall
                                                    performance, contributing to sustained uptime.
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
                                                <h6>Load Balancing
                                                </h6>
                                                <p>Our load balancing solutions distribute traffic evenly across servers, preventing any
                                                    single server from becoming overwhelmed. This ensures consistent performance during
                                                    peak usage times and enhances overall reliability</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Redundancy and Failover Strategies</h6>
                                                <p>We implement redundancy measures, including backup systems and failover protocols,
                                                    to ensure continuity of service in the event of hardware failure. This guarantees that
                                                    your operations remain uninterrupted, even during unexpected outages</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Performance Testing
                                                </h6>
                                                <p>Regular performance testing helps us identify areas for improvement and optimize your
                                                    infrastructure. By continuously refining our systems, we enhance reliability and ensure
                                                    consistent uptime.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Security Measures</h6>
                                                <p>We prioritize security to protect against potential threats that could disrupt services.
                                                    Implementing firewalls, intrusion detection systems, and regular security audits helps
                                                    safeguard your infrastructure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>With Prophecy Technologies’ proactive measures, you can be confident in our
                                    commitment to ensuring uptime and reliability, enabling your business to operate
                                    smoothly and efficiently without interruptions.
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
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Our Complete Solutions for </h6>
                                <h1 className='mini-title-animation'>Unmatched Site  <br />Reliability!</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>At Prophecy Technologies, we offer complete solutions tailored for unmatched site
                        reliability, ensuring your systems remain available and performant at all times.</p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Comprehensive Infrastructure Assessment
                                            </h6>
                                            <p>We begin with a thorough assessment of your existing infrastructure to identify
                                                strengths and weaknesses. This foundational step helps us design targeted solutions
                                                that enhance site reliability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Customizable Monitoring Solutions</h6>
                                            <p>Our monitoring solutions are customizable to meet the specific needs of your
                                                organization. With real-time analytics and alerts, we ensure you’re always informed
                                                about your system's health and performance.
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
                                            <h6>Scalable Cloud Solutions</h6>
                                            <p>We provide scalable cloud infrastructure that grows with your business. Our cloud
                                                solutions offer flexibility and redundancy, allowing for seamless scaling without
                                                compromising reliability.
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
                                            <h6>Advanced Load Balancing Techniques</h6>
                                            <p>Our advanced load balancing solutions optimize resource allocation and prevent server
                                                overload. This ensures consistent performance even during peak traffic times,
                                                enhancing the user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Proactive Performance Optimization</h6>
                                            <p>We continuously analyze your systems to identify performance bottlenecks. Our
                                                proactive optimization strategies ensure that your applications run efficiently and
                                                reliably</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Security-First Approach</h6>
                                            <p>We integrate security into every aspect of our site reliability solutions. By implementing
                                                robust security measures, we protect your systems against threats that could lead to
                                                downtime.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Regular Health Checks and Audits</h6>
                                            <p>We conduct regular health checks and audits to assess the effectiveness of our
                                                reliability strategies. This ongoing evaluation allows us to make necessary adjustments
                                                and improvements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>With Prophecy Technologies’ complete solutions for unmatched site reliability, you can
                                trust that your systems are robust, secure, and always available, enabling your business
                                to focus on growth and success.</p>
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
                                    <h1 className='mini-title-animation'>How do we<br />work for<br />Seamless <br />Uptime</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser4} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>At Prophecy Technologies, we implement a structured approach to ensure
                            seamless uptime, enabling your organization to operate efficiently without
                            interruptions.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Proactive Monitoring Systems</h6>
                                                <p>We utilize advanced monitoring systems to keep an eye on your infrastructure
                                                    24/7. This allows us to detect issues before they escalate, ensuring prompt
                                                    resolution and uninterrupted service.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Regular Maintenance and Updates</h6>
                                                <p>We schedule regular maintenance and software updates to keep your systems
                                                    running smoothly. This proactive approach minimizes downtime and enhances
                                                    overall system reliability.
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
                                                <h6>Redundant Systems and Failover Plans
                                                </h6>
                                                <p>Our redundancy measures include backup systems and failover plans to
                                                    maintain service continuity. In the event of a failure, we ensure a seamless
                                                    transition to backup systems without affecting users.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Incident Response Protocols</h6>
                                                <p>Our well-defined incident response protocols allow us to address issues quickly
                                                    and efficiently. This structured approach minimizes downtime and helps restore
                                                    normal operations promptly.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Performance Optimization</h6>
                                                <p>We continually analyze system performance and implement optimizations to
                                                    enhance reliability. Regular tuning and adjustments ensure your applications run
                                                    efficiently and meet user demands.
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
                                                <h6>Security Enhancements</h6>
                                                <p>Our security measures protect against threats that could compromise uptime. By
                                                    implementing firewalls, intrusion detection systems, and regular audits, we
                                                    safeguard your systems from potential disruptions.
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
                                                <h6>Client Collaboration and Support</h6>
                                                <p>We believe in working closely with your team to understand your unique needs.
                                                    Our collaborative approach ensures that our uptime strategies align with your
                                                    business objectives and operational requirements</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>By focusing on these key strategies, Prophecy Technologies guarantees
                                    seamless uptime, allowing your organization to thrive without the disruptions
                                    caused by downtime or performance issues.</p>
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
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">What benefits does </h6>
                                <h1 className='mini-title-animation'>partnering <br />with us bring <br />to your <br />business?</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Partnering with Prophecy Technologies for your site reliability services brings numerous
                        benefits, enhancing your business's performance and resilience in a competitive
                        landscape.

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
                                            <h6>Enhanced Uptime and Reliability
                                            </h6>
                                            <p>Our dedicated approach ensures high availability of your systems, minimizing
                                                downtime. This reliability allows you to focus on your core business functions without
                                                worrying about service interruptions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Improved Performance
                                            </h6>
                                            <p>With our optimization strategies, your applications will run more efficiently. Improved
                                                performance enhances user satisfaction and can lead to increased customer retention
                                                and loyalty.
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
                                            <h6>Proactive Issue Resolution</h6>
                                            <p>We identify and resolve potential issues before they escalate into significant problems.
                                                This proactive approach minimizes disruptions and maintains smooth operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Cost-Effective Solutions</h6>
                                            <p>By optimizing your infrastructure and reducing downtime, we help you save on potential
                                                revenue losses. Our efficient solutions ensure you get the best return on your
                                                investment. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Tailored Strategies</h6>
                                            <p>We understand that every business is unique, so we create customized strategies to
                                                meet your specific needs. Tailored solutions ensure that our services align perfectly with
                                                your operational goals.
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
                                            <h6>Comprehensive Risk Management</h6>
                                            <p>We implement thorough risk management strategies to protect your systems from
                                                potential threats. This comprehensive approach reduces vulnerabilities and enhances
                                                your overall security posture.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Access to Expertise</h6>
                                            <p>Partnering with us gives you access to a team of experienced professionals. Our
                                                expertise allows you to leverage industry best practices and innovative solutions for
                                                your site reliability needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Focus on Core Business</h6>
                                            <p>With us managing your site reliability, you can concentrate on your core business
                                                activities. This focus on your primary objectives drives growth and innovation within your
                                                organization.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>By partnering with Prophecy Technologies, your business gains a strategic ally
                                dedicated to enhancing site reliability, ensuring operational excellence, and fostering
                                long-term success in a competitive environment.</p>
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
                                <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Invest in Stability: </h6>
                                <h1 className='mini-title-animation'>Let’s Discuss <br />Your <br />Reliability Needs!
                                </h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Prophecy Technologies is here to discuss your unique reliability needs and tailor
                                solutions that enhance uptime and performance. Together, we can build a robust
                                infrastructure that supports your operational goals and drives success</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn service-large-mega-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Upgrade Your Reliability with Us!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SiteReliabilityServices