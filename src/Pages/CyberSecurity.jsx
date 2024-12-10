
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import Ser1 from '../Assets/Resources/serviceImages/CyberSecurity_img1.png'
import Ser2 from '../Assets/Resources/serviceImages/CyberSecurity_img2.png'
import Ser3 from '../Assets/Resources/serviceImages/CyberSecurity_img3.png'
import Ser4 from '../Assets/Resources/serviceImages/CyberSecurity_img4.png'
import Ser5 from '../Assets/Resources/serviceImages/CyberSecurity_img5.png'
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceStar from "../Assets/Resources/service-star.svg"
import AllPageLoader from '../Components/AllPageLoader';

const CyberSecurity = () => {


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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Guardians of Your Digital World: Unmatched Cybersecurity Solutions!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Prophecy Technologies offers comprehensive strategies tailored to safeguard your
                                business assets and ensure data integrity. Trust our expertise to create a secure
                                environment, allowing you to focus on growth and innovation without fear.</p>
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Defend, Detect, Respond:</h6>
                                <h1 className='mini-title-animation'>Protecting <br />Your Business <br />in a Complex<br />
                                    World!</h1>
                                <p className='para-animation'>In today’s digital landscape, organizations face an ever-evolving array of cybersecurity
                                    threats that can compromise sensitive data and disrupt operations. At Prophecy
                                    Technologies, our comprehensive approach to cybersecurity focuses on three critical
                                    pillars: defend, detect, and respond. By implementing advanced security measures and
                                    proactive monitoring, we create a robust defense that shields your business from
                                    potential breaches and minimizes risks.</p>
                                <p className='para-animation'>Our dedicated team utilizes cutting-edge technologies and threat intelligence to detect
                                    vulnerabilities and respond swiftly to incidents. This agile response capability ensures
                                    that any security threats are swiftly neutralized, minimizing damage and restoring
                                    normal operations quickly. With Prophecy Technologies as your cybersecurity partner,
                                    you can confidently navigate the complexities of the digital world, knowing your
                                    business is protected against both current and emerging threats.</p>
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
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">What We Do To Enhance</h6>
                                    <h1 className='mini-title-animation'>Data Security <br />In Your <br />Organization?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={Ser2} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>At Prophecy Technologies, we employ a multi-layered approach to enhance data
                            security, ensuring that your organization is safeguarded against evolving cyber threats.
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
                                                <h6>Risk Assessment and Vulnerability Analysis
                                                </h6>
                                                <p>We conduct comprehensive risk assessments to identify potential vulnerabilities within
                                                    your systems. This proactive analysis allows us to address security gaps before they
                                                    can be exploited.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Robust Access Controls</h6>
                                                <p>Our data security solutions implement strict access controls to limit user permissions
                                                    based on roles and responsibilities. This ensures that sensitive information is only
                                                    accessible to authorized personnel, reducing the risk of insider threats.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Encryption</h6>
                                                <p>We utilize advanced encryption techniques to protect sensitive data both at rest and in
                                                    transit. This ensures that even if data is intercepted, it remains unreadable and secure
                                                    from unauthorized access.
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
                                                <h6>Regular Security Audits</h6>
                                                <p>We perform regular security audits to assess the effectiveness of your existing security
                                                    measures. These audits help identify areas for improvement and ensure compliance
                                                    with industry standards</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Incident Response Planning</h6>
                                                <p>Our incident response planning ensures that your organization is prepared for potential
                                                    security breaches. We develop tailored response strategies to minimize damage and
                                                    facilitate rapid recovery.
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
                                                <h6>Multi-Factor Authentication (MFA)</h6>
                                                <p>We implement multi-factor authentication to add an additional layer of security for user
                                                    logins. This ensures that even if passwords are compromised, unauthorized access is
                                                    still prevented.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Backup and Recovery Solutions
                                                </h6>
                                                <p>Our data backup and recovery solutions safeguard your critical information against loss
                                                    due to cyberattacks or system failures. Regular backups ensure that you can restore
                                                    operations quickly in the event of a disaster.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>With Prophecy Technologies, enhance your organization's data security through our
                                    comprehensive solutions and strategies, ensuring robust protection against cyber
                                    threats and fostering a secure digital environment.</p>
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
                                <h6>Secure Your Future:</h6>
                                <h1 className='mini-title-animation'>Let’s Talk <br />Cybersecurity <br />Solutions!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Our expert team at Prophecy Technologies is dedicated to identifying
                                vulnerabilities and implementing comprehensive strategies to protect your digital
                                assets. Let's collaborate to create a resilient security framework that ensures
                                peace of mind for your business</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn '>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Modernize Your Cybersecurity With us!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default CyberSecurity