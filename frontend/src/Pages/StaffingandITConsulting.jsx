
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import Ser1 from '../Assets/Resources/serviceImages/Staffingandconsulting_img1.png'
import Ser2 from '../Assets/Resources/serviceImages/Staffingandconsulting_img2.png'
import Ser3 from '../Assets/Resources/serviceImages/Staffingandconsulting_img3.png'
import Ser4 from '../Assets/Resources/serviceImages/Staffingandconsulting_img4.png'
import Ser5 from '../Assets/Resources/serviceImages/Staffingandconsulting_img5.png'
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceStar from "../Assets/Resources/service-star.svg"
import AllPageLoader from '../Components/AllPageLoader';

const StaffingandITConsulting = () => {


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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Staff Smarter, Grow Faster: IT Consulting for Future-Ready Teams!
                            </h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Empower your team with top-tier IT talent and strategic consulting that drives results.
                                Our tailored approach ensures you have the skills and insights needed to stay ahead in
                                today’s fast-paced tech landscape.
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Right Talent, Right Time: </h6>
                                <h1 className='mini-title-animation'>Propel Your <br />IT Success <br />With Prophecy</h1>
                                <p className='para-animation'>Unlock the potential of your organization with expertly sourced IT talent, perfectly
                                    matched to your project goals. At Prophecy Technologies, we align our staffing solutions
                                    with your business needs, ensuring you get the right expertise at the right time. With our
                                    dedicated approach, we help you stay agile and competitive in an ever-evolving tech
                                    landscape.
                                </p>
                                <p className='para-animation'>Our IT consulting services go beyond staffing, providing strategic insights and guidance
                                    to support sustainable growth. From technical skills to project leadership, we focus on
                                    creating future-ready teams that drive innovation and success. Let’s partner to build a
                                    resilient IT infrastructure that empowers your business to thrive.</p>
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
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">How Do We Match </h6>
                                    <h1 className='mini-title-animation'>You With the <br />Right IT <br />Expertise?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser2} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Matching your organization with the right IT expertise is essential for achieving your
                            strategic goals and maximizing productivity. At Prophecy Technologies, we employ a
                            systematic approach to ensure we find the best talent for your specific needs.

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
                                                <h6>Understanding Your Unique Needs
                                                </h6>
                                                <p>We begin by conducting thorough consultations to understand your specific IT
                                                    challenges and project requirements. This ensures that we align our search with your
                                                    organization's goals and culture.
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
                                                <h6>Detailed Skills Assessment</h6>
                                                <p>Our team performs a comprehensive skills assessment to identify the technical and soft
                                                    skills needed for your projects. This guarantees that candidates not only possess the
                                                    right qualifications but also fit into your team dynamics.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Access to a Diverse Talent Pool</h6>
                                                <p>With access to a wide range of professionals across various technologies and sectors,
                                                    we can source candidates who are well-suited to your requirements. This diversity
                                                    allows for a more innovative and effective team composition.
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
                                                <h6>Rigorous Screening Process</h6>
                                                <p>Our screening process includes interviews, technical assessments, and background
                                                    checks to ensure only the most qualified candidates are presented to you. This rigour
                                                    helps minimize the risk of hiring mismatches.
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
                                                <h6>Cultural Fit Evaluation</h6>
                                                <p>We assess candidates for cultural alignment with your organization, ensuring they will
                                                    thrive in your work environment. This focus on fit leads to higher employee satisfaction
                                                    and retention rates.

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
                                                <h6>Continuous Communication</h6>
                                                <p>Throughout the staffing process, we maintain open lines of communication with your
                                                    team. This collaboration allows us to adjust our approach based on your feedback and
                                                    evolving needs.
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
                                                <h6>Ongoing Support and Training</h6>
                                                <p>Once we place a candidate, we continue to support both the individual and your
                                                    organization. This includes training programs and regular check-ins to ensure seamless
                                                    integration and ongoing success.
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
                                                <h6>Adaptable Solutions for Changing Needs</h6>
                                                <p>We understand that IT requirements can change rapidly. Our flexible staffing solutions
                                                    enable us to quickly respond to new challenges and opportunities as they arise</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>By leveraging our comprehensive approach, Prophecy Technologies connects you with
                                    the right IT expertise, driving your organization toward success. Reach out to us to find
                                    your perfect match today!</p>
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
                                <h1 className='mini-title-animation'>Cybersecurity <br />Services!</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>At Prophecy Technologies, our comprehensive cybersecurity services are designed to
                        protect your organization from evolving threats and ensure the integrity of your digital
                        assets.
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
                                            <h6>Threat Assessment and Risk Management</h6>
                                            <p>We conduct thorough threat assessments to identify vulnerabilities in your IT
                                                infrastructure. Our risk management strategies prioritize security measures based on
                                                potential impact, ensuring that resources are allocated effectively.
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
                                            <h6>Security Architecture Design
                                            </h6>
                                            <p>Our team designs robust security architectures tailored to your organization’s unique
                                                needs. This includes selecting the right technologies and frameworks to create a strong
                                                defense against cyber threats.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Network Security Solutions</h6>
                                            <p>We implement advanced network security measures, including firewalls, intrusion
                                                detection systems, and VPNs. These solutions protect your network from unauthorized
                                                access and ensure secure data transmission</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Endpoint Security Management</h6>
                                            <p>Our endpoint security services safeguard devices such as laptops, smartphones, and
                                                tablets. We deploy solutions that monitor and protect endpoints from malware,
                                                ransomware, and other threats.
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
                                            <h6>Data Protection and Encryption
                                            </h6>
                                            <p>We provide data protection strategies that include encryption, data loss prevention, and
                                                access controls. This ensures sensitive information is secure both at rest and in transit,
                                                reducing the risk of breaches.
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
                                            <h6>Incident Response and Recovery</h6>
                                            <p>We offer expert incident response services to quickly address and mitigate the impact of
                                                security breaches. Our recovery plans ensure your organization can restore operations
                                                efficiently with minimal disruption</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Continuous Monitoring and Threat Intelligence</h6>
                                            <p>Our cybersecurity services include 24/7 monitoring and threat intelligence analysis. This
                                                proactive approach allows us to detect and respond to potential threats before they
                                                escalate into significant incidents. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Vulnerability Management and Penetration Testing</h6>
                                            <p>We conduct regular vulnerability assessments and penetration testing to identify
                                                weaknesses in your systems. This proactive strategy ensures that vulnerabilities are
                                                addressed before they can be exploited by attackers.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>With Prophecy Technologies, leverage our comprehensive cybersecurity services to
                                build a resilient defense against cyber threats and safeguard your organization’s critical
                                assets and data.
                            </p>
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
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Why choose Prophecy Technologies</h6>
                                    <h1 className='mini-title-animation'> For your <br />cybersecurity <br />needs?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser4} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Choosing Prophecy Technologies for your cybersecurity needs ensures top-tier
                            protection and tailored solutions, backed by a commitment to excellence and
                            continuous support.

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
                                                <h6>Proven Expertise in Cybersecurity</h6>
                                                <p>Our team comprises seasoned cybersecurity professionals with extensive
                                                    experience across various industries. This expertise allows us to design and
                                                    implement effective security strategies tailored to your specific business needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Over 70% Resource Retention Rate</h6>
                                                <p>With an impressive resource retention rate of over 70%, our clients benefit from
                                                    continuity and stability in their cybersecurity services. Long-term relationships
                                                    foster deeper understanding and more effective security solutions tailored to your
                                                    evolving needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Comprehensive Security Solutions
                                                </h6>
                                                <p>Our extensive range of cybersecurity services addresses all aspects of your
                                                    security posture, from risk assessment and incident response to compliance and
                                                    training. We provide a holistic approach to safeguarding your digital assets.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>24/7 Support</h6>
                                                <p>Prophecy Technologies offers round-the-clock support to monitor and respond to
                                                    threats in real-time. Our 24/7 support ensures that your organization is protected
                                                    at all times, providing peace of mind and immediate assistance when needed.
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
                                                <h6>Customized Solutions for Every Business</h6>
                                                <p>We understand that each organization has unique cybersecurity challenges. Our
                                                    customized solutions are designed to meet the specific requirements of your
                                                    business, ensuring maximum protection and efficiency.
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
                                                <h6>Advanced Technology and Tools</h6>
                                                <p>We leverage the latest technologies and tools to enhance your cybersecurity
                                                    infrastructure. By staying ahead of emerging threats, we provide proactive
                                                    measures that safeguard your organization against potential risks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Commitment to Compliance</h6>
                                                <p>Our experts help you navigate the complexities of regulatory requirements and
                                                    industry standards. We ensure that your organization remains compliant,
                                                    minimizing the risk of penalties and enhancing your overall security posture.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Transparent Communication and Reporting</h6>
                                                <p>We maintain open lines of communication with our clients, providing regular
                                                    updates and detailed reports on security status and incidents. This transparency
                                                    fosters trust and ensures you are informed about your cybersecurity landscape.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>By choosing Prophecy Technologies for your cybersecurity needs, you gain a
                                    trusted partner dedicated to delivering tailored, effective solutions backed by
                                    exceptional support and a proven track record of success.
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
                                <h1 className='mini-title-animation'>Our Cyber <br />Incident <br />Response <br />Protocols</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>At Prophecy Technologies, our Cyber Incident Response Protocols are meticulously
                        designed to quickly and effectively address security incidents, minimizing impact and
                        ensuring rapid recovery.
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
                                            <h6>Preparation and Planning</h6>
                                            <p>We begin by establishing a robust incident response plan tailored to your organization’s
                                                unique needs. This proactive approach ensures that all team members are trained and
                                                ready to respond effectively in the event of a cyber incident.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Detection and Identification
                                            </h6>
                                            <p>Utilizing advanced monitoring tools, we continuously detect and identify potential
                                                security incidents. Early detection is critical, allowing us to assess the situation and
                                                implement a response strategy before damage occurs.
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
                                            <h6>Containment</h6>
                                            <p>Once an incident is confirmed, our first step is containment to prevent further damage.
                                                We isolate affected systems and limit access to minimize the impact on your
                                                organization’s operations and data integrity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Eradication</h6>
                                            <p>After containment, we focus on eradicating the root cause of the incident. This may
                                                involve removing malware, closing vulnerabilities, and applying necessary patches to
                                                prevent similar incidents in the future.
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
                                            <h6>Recovery
                                            </h6>
                                            <p>Our recovery process involves restoring affected systems and data to normal
                                                operations. We ensure that all systems are secure before bringing them back online,
                                                reducing the risk of recurrence.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Communication

                                            </h6>
                                            <p>Effective communication is vital during a cyber incident. We keep stakeholders informed
                                                throughout the process, providing timely updates and ensuring that everyone is aware
                                                of the situation and response actions.
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
                                            <h6>Post-Incident Analysis </h6>
                                            <p>After recovery, we conduct a thorough post-incident analysis to evaluate the
                                                effectiveness of our response. This evaluation helps us identify lessons learned and
                                                improve future incident response efforts.
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
                                            <h6>Documentation</h6>
                                            <p>We maintain detailed documentation of the incident response process, including actions
                                                taken and outcomes. This documentation serves as a valuable resource for future
                                                reference and compliance requirements.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Continuous Improvement</h6>
                                            <p>We believe in a cycle of continuous improvement, using insights gained from each
                                                incident to refine our response protocols. This iterative approach enhances our
                                                preparedness for future cyber threats.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                            <p className='para-animation'>With Prophecy Technologies’ Cyber Incident Response Protocols, you can trust that
                                your organization is equipped to swiftly and effectively handle cyber incidents, ensuring
                                resilience and a quick return to normal operations.</p>
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
                                <h6>Empower Your Vision: </h6>
                                <h1 className='mini-title-animation'>Let’s Talk <br />Staffing & <br />Strategy!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Empowering your vision begins with finding the right talent and strategic insights.
                                Prophecy Technologies combines expert staffing solutions with targeted IT
                                consulting to build future-ready teams. Together, let’s create a workforce that
                                drives innovation and growth.
                            </p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn '>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Transform Your IT Landscape!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default StaffingandITConsulting