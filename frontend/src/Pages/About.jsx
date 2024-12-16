import React, { useEffect } from 'react';
import "../Assets/styles/About.css"
import JourneyImage from "../Assets/Resources/aboutpage-journey22.jpg"
import ApproachIcon1 from "../Assets/Resources/approach-icon-1.svg"
import { AiOutlineAim } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import AboutServiceImage from "../Assets/Resources/about-service-image.jpg"
import Partner1 from "../Assets/Resources/partner1.svg";
import Partner2 from "../Assets/Resources/partner2.svg";
import Partner3 from "../Assets/Resources/partner3.svg";
import Partner4 from "../Assets/Resources/partner4.svg";
import Partner5 from "../Assets/Resources/partner5.svg";
import Partner6 from "../Assets/Resources/partner6.svg";
import Partner7 from "../Assets/Resources/partner7.svg";

import Client1 from "../Assets/Resources/clients/client (1).png"
import Client2 from "../Assets/Resources/clients/client (2).png"
import Client3 from "../Assets/Resources/clients/client (3).png"
import Client4 from "../Assets/Resources/clients/client (4).png"
import Client5 from "../Assets/Resources/clients/client (5).png"
import Client6 from "../Assets/Resources/clients/client (6).png"
import Client7 from "../Assets/Resources/clients/client (7).png"
import Client8 from "../Assets/Resources/clients/client (8).png"
import Client9 from "../Assets/Resources/clients/client (9).png"
import Client10 from "../Assets/Resources/clients/client (10).png"
import Client11 from "../Assets/Resources/clients/client (11).png"
import Client12 from "../Assets/Resources/clients/client (12).png"
import Client13 from "../Assets/Resources/clients/client (13).png"
import Client14 from "../Assets/Resources/clients/client (14).png"
import Client15 from "../Assets/Resources/clients/client (15).png"
import Client16 from "../Assets/Resources/clients/client (16).png"
import Client17 from "../Assets/Resources/clients/client (17).png"
import Client18 from "../Assets/Resources/clients/client (18).png"
import Client19 from "../Assets/Resources/clients/client (19).png"
import Client20 from "../Assets/Resources/clients/client (20).png"
import Client21 from "../Assets/Resources/clients/client (21).png"
import ServiceStar from "../Assets/Resources/service-star.svg"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import AllPageLoader from '../Components/AllPageLoader';

const About = () => {







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






    return (
        <>
            <AllPageLoader />
            <section className='breadcrumb'>
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1 className='ban-title-animation'>About</h1>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1 className='ban-title-animation'>About</h1>
                        </div>
                    </div>
                </div>
            </section>


            <div className="gradient-bg">
                <section className='AboutSection aboutpage-1sec'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content">
                                    <div className="left-subtitle">
                                        <h6 data-aos="fade-right" data-aos-duration="1000">Our Story</h6>
                                    </div>
                                    <div className="large-title">
                                        <h1 className='mini-title-animation'>The Prophecy <br />Technologies <br />Journey</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="right-content">
                                    <p className='para-animation'>Prophecy Technologies, headquartered in Irvine, California, USA, was founded with
                                        a transformative vision: to bridge the gap between business objectives and
                                        exceptional customer experiences. Since our inception, we have empowered
                                        businesses to leverage technology as a catalyst for growth and innovation. Our
                                        founders envisioned a future where businesses would not only meet but exceed their
                                        clients' expectations, using advanced AI optimization, connected data, and
                                        actionable insights to foster growth, loyalty, and engagement. This commitment to
                                        excellence has propelled Prophecy Technologies into a trusted technology partner
                                        for organizations worldwide, helping them adapt, innovate, and thrive in an
                                        ever-evolving digital landscape.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className='contdown-section'>
                    <div className="container">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Results That Speak <br />Volumes</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="box-content box1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    <h1>2014</h1>
                                    <p>Founded</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                    <h1>50+</h1>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                                    <h1>500+</h1>
                                    <p>Resources</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                                    <h1>50+</h1>
                                    <p>Developer Teams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
            </div>

            <section className='who-we-are-section about-journey'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="left-image" data-aos="fade-right" data-aos-duration="1000" >
                                <img src={JourneyImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <div className="left-subtitle">
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">About Prophecy</h6>
                                </div>
                                <div className="large-title">
                                    <h1 className='mini-title-animation'>Our Journey <br />and Impact</h1>
                                </div>
                                <div className='para-animation'>
                                    <p>Founded in 2014, Prophecy Technologies has consistently pushed boundaries to
                                        become a leader in the IT consulting and services sector. Over the years, we have
                                        expanded our reach with a portfolio of more than 50 successful projects, over 500
                                        skilled resources, and more than 50 dedicated development teams. Each project we
                                        undertake is driven by a passion for making an impact and delivering long-term,
                                        sustainable solutions tailored to our client’s unique needs.
                                        We approach each client partnership with a structured and strategic methodology,
                                        ensuring seamless transitions from design and development to ongoing support and
                                        maintenance. Using lean methodologies and accelerators, we focus on delivering
                                        cost-effective, efficient, and profitable solutions year after year. Our aim is to
                                        empower clients to tackle complex challenges, adapt to market changes, and deliver
                                        exceptional customer experiences that build brand loyalty and drive business growth.
                                    </p>1
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >







            <section className='approach-section aboutpage-approach-section'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Our Core Values: <br />What Sets Us Apart</h1>
                            </div>
                            <p data-aos="fade-down" data-aos-duration="1000">Prophecy Technologies is built on a foundation of core values that define who we are
                                and how we operate. Our commitment to innovation, expertise, collaboration, and
                                excellence guides every decision and drives our dedication to helping clients achieve
                                their strategic goals</p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Innovation</h1>
                                        <p>Innovation is embedded in our DNA. We are passionate about exploring new
                                            horizons, developing cutting-edge solutions, and pushing the boundaries of
                                            technology. Our team continuously evaluates emerging trends and integrates the
                                            latest advancements to create solutions that not only address current needs but also
                                            anticipate future challenges. By embracing a forward-thinking approach, we help our
                                            clients stay competitive and adaptable in a rapidly changing world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Expertise</h1>
                                        <p>Our team is composed of industry experts and visionary innovators dedicated to
                                            excellence in every aspect of our work. With deep expertise in data analytics, AI,
                                            automation, cloud computing, and more, we bring together a wealth of knowledge
                                            and skills to provide comprehensive and customized solutions. Each member of our
                                            team is committed to ongoing learning and growth, ensuring we remain at the
                                            forefront of technological advancements</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Collabration</h1>
                                        <p>At Prophecy Technologies, we believe in the power of partnership. Our collaborative
                                            approach fosters a close working relationship with our clients, allowing us to
                                            co-create solutions that deliver tangible results. We work hand-in-hand with clients to
                                            understand their unique challenges, goals, and values, creating a shared vision that
                                            drives success. By prioritizing open communication and mutual trust, we are able to
                                            deliver outcomes that exceed expectations and create lasting value.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Commitment to Excellence</h1>
                                        <p>Excellence is more than just a goal for us; it’s a standard. We hold ourselves to the
                                            highest standards of quality in every project we undertake, from initial consultation to
                                            final delivery. Our commitment to excellence is reflected in our rigorous quality
                                            assurance processes, meticulous attention to detail, and dedication to providing
                                            support at every stage of the client journey. We strive to set new benchmarks in
                                            performance and client satisfaction, ensuring every solution we deliver is both
                                            innovative and reliable.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className='our-core-services about-mission-vision'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-box" data-aos="zoom-in" data-aos-duration="3000">
                                <div className="icon">
                                    <AiOutlineAim className='react-icons' />
                                </div>
                                <div className="content">
                                    <h1>Mission</h1>
                                    <p>Our mission is clear: to pioneer solutions that propel organizations forward in the
                                        digital age. By combining advanced technologies, strategic insights, and exceptional
                                        service, we enable businesses to thrive in a competitive and dynamic environment.
                                        We are dedicated to driving digital transformation, fostering growth, and empowering
                                        our clients to make a meaningful impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-box" data-aos="zoom-in" data-aos-duration="3000">
                                <div className="icon">
                                    <FaEye className='react-icons' />
                                </div>
                                <div className="content">
                                    <h1>Vision</h1>
                                    <p>We envision a world where technology empowers limitless potential, driving progress
                                        and prosperity for all. Prophecy Technologies is committed to creating a future where
                                        businesses and individuals can harness the power of technology to overcome
                                        challenges, seize opportunities, and achieve their fullest potential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="about-client-slide">
                <div className="container">
                    <div className="sec-title">
                        <div className="large-title">
                            <h1 className='mini-title-animation'>Our Clients</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-client-marquee">
                            <div className="about-client-marquee-content">
                                {/* First set of images */}
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client1} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client2} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client3} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client4} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client5} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client6} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client7} alt="" />
                                </div>
                                {/* <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client8} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client9} alt="" />
                                </div> */}
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client10} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client11} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client12} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client13} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client14} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client15} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client16} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client17} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client18} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client19} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client20} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client21} alt="" />
                                </div>

                                {/* Second set of images (Duplicate for seamless scrolling) */}
                                {/* First set of images */}
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client1} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client2} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client3} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client4} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client5} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client6} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client7} alt="" />
                                </div>
                                {/* <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client8} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client9} alt="" />
                                </div> */}
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client10} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client11} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client12} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client13} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client14} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client15} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client16} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client17} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client18} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client19} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client20} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Client21} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className='approach-section about-service-section about-page-service'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Our Service <br />Offerings</h1>
                            </div>
                            <p data-aos="fade-down" data-aos-duration="3000" data-aos-delay="500">Prophecy Technologies offers a comprehensive range of services designed to meet
                                the diverse needs of our clients. From data analytics to cloud solutions, our service
                                offerings are tailored to help businesses navigate the complexities of digital
                                transformation and achieve their strategic goals.
                            </p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>AI & Data Analytics :</h1>
                                            <p>We provide advanced analytics and AI solutions that
                                                enable businesses to make data-driven decisions, optimize operations, and
                                                enhance customer experiences. Our expertise in data science, machine
                                                learning, and predictive analytics empowers clients to unlock the full potential
                                                of their data.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Digital Acceleration</h1>
                                            <p>Our digital acceleration services help organizations
                                                adapt to digital trends, optimize workflows, and enhance operational
                                                efficiency. By leveraging automation, digital tools, and agile methodologies,
                                                we enable businesses to stay competitive and responsive.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Application Modernization:</h1>
                                            <p>We specialize in modernizing legacy systems,
                                                ensuring they are scalable, secure, and aligned with current business needs.
                                                Our application modernization services enhance performance, reduce
                                                operational costs, and improve user experiences.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Database Modernization</h1>
                                            <p>Our database modernization solutions provide
                                                secure, efficient, and scalable options to ensure data is easily accessible and
                                                manageable. We focus on streamlining data storage, management, and
                                                accessibility to support data-driven decision-making</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Infrastructure Modernization</h1>
                                            <p>We transform IT infrastructures to support
                                                cloud environments, enhance security, and improve performance. Our
                                                infrastructure modernization services provide a solid foundation for digital
                                                transformation and operational efficiency</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Cybersecurity</h1>
                                            <p>We offer comprehensive cybersecurity solutions to protect
                                                digital assets and safeguard business operations. Our services include threat
                                                assessment, data protection, and proactive risk management to ensure clients
                                                are well-prepared for emerging threats</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-right" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Site Reliability Services</h1>
                                            <p>Our SRE services ensure that critical systems are
                                                reliable, scalable, and secure. We apply best practices in monitoring,
                                                automation, and incident response to maintain optimal system performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="image" data-aos="zoom-in" data-aos-duration="3000">
                                    <img src={AboutServiceImage} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Automation</h1>
                                            <p>Our automation solutions enable businesses to streamline
                                                processes, reduce costs, and increase productivity. From robotic process
                                                automation (RPA) to AI-driven automation, we deliver solutions that optimize
                                                workflows and drive operational efficiency</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Staffing & IT Consulting:</h1>
                                            <p>We provide skilled resources and strategic
                                                consulting services to help businesses build high-performing teams and
                                                navigate complex technology landscapes. Our staffing solutions ensure
                                                clients have the right talent for success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Robotic Process Automation (RPA):</h1>
                                            <p>We specialize in RPA solutions that
                                                automate repetitive tasks, enabling businesses to focus on high-value
                                                activities. Our RPA services reduce errors, improve efficiency, and enhance
                                                productivity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Data & AI</h1>
                                            <p>Our data and AI services harness the power of machine learning,
                                                analytics, and data science to deliver actionable insights and drive business
                                                growth.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>Cloud & DevOps:</h1>
                                            <p>Our cloud and DevOps services support agile
                                                development, seamless deployment, and scalable solutions. We help clients
                                                adopt cloud technologies and implement DevOps practices for continuous
                                                improvement.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>ERP</h1>
                                            <p>Our ERP solutions streamline business processes, improve data
                                                accessibility, and enhance decision-making. We offer customized ERP
                                                solutions to meet the unique needs of each client.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="approach-box" data-aos="fade-left" data-aos-duration="3000">
                                        <div className="content">
                                            <h1>CRM</h1>
                                            <p>Our CRM services enable businesses to build stronger customer
                                                relationships, improve customer satisfaction, and increase loyalty. We provide
                                                solutions that integrate seamlessly with existing systems and enhance
                                                customer interactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='partners-slide'>
                <div className="container">
                    <div className="sec-title">
                        <div className="large-title">
                            <h1 className='mini-title-animation'>Our Partners</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="partners-marquee">
                            <div className="partners-marquee-content">
                                {/* First set of images */}
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner1} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner2} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner3} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner4} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner5} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner6} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner7} alt="" />
                                </div>

                                {/* Second set of images (Duplicate for seamless scrolling) */}
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner1} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner2} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner3} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner4} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner5} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner6} alt="" />
                                </div>
                                <div className="image" data-aos="fade-left" data-aos-duration="3000">
                                    <img src={Partner7} alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default About