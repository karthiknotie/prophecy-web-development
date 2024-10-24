import React from 'react';
import BannerLogo from "../Assets/Resources/banner-logo.svg";
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
import ApproachImage from "../Assets/Resources/approach-image1.jpg"
import TechnologiesIcon1 from "../Assets/Resources/technologies-icon1.svg"
import WhoWeAreChecked from "../Assets/Resources/who-we-are-checkedbox.png"
import CtaChecked from "../Assets/Resources/cta-checkedbox.png"
import FooterLogo from "../Assets/Resources/footer-logo.svg"

const Home = () => {

    var settings = {
        false: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1
    }

    return (
        <main>
            <section className='banner-section'>
                <div className="container">
                    <div className="banner-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-title">
                                    <h1>Innovating Tomorrow Today</h1>
                                    <p>Unlock business potential with Prophecy<br />Technologies—driving growth through AI <br />optimization, digital solutions, and modernized <br />infrastructure for seamless customer engagement.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-content-right">
                                    <div className="banner-logo">
                                        <img src={BannerLogo} alt="" />
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
                        <div className="partners-slider">
                            <Slider {...settings} className='partners-slider-content'>
                                <div>
                                    <div className="image">
                                        <img src={Partner1} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image">
                                        <img src={Partner2} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image">
                                        <img src={Partner3} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image">
                                        <img src={Partner4} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image">
                                        <img src={Partner5} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image">
                                        <img src={Partner6} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="image servincen">
                                        <img src={Partner7} alt="" />
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="banner-ellipse1"></div>
                    <div className="partners-shape"></div>
                </div>
            </section>

            <div className="gradient-bg">
                {/* about section */}
                <section className='AboutSection'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content">
                                    <div className="left-subtitle">
                                        <h6>About Us</h6>
                                    </div>
                                    <div className="large-title">
                                        <h1>Welcome to Prophecy Technologies</h1>
                                    </div>
                                    <p>Shaping the Future of <br />Business Experiences</p>
                                    <div className="shape">
                                        <img src={AboutArrow} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="right-content">
                                    <p>At Prophecy Technologies, we are on a mission to transform how businesses interact with their customers. In a rapidly evolving digital landscape, bridging the gap between business goals and customer experiences is not just a challenge; it’s an opportunity. We empower businesses to embrace change, leverage data-driven insights, and optimize customer journeys through the power of AI, connected data, and actionable insights. Our vision is to help you deliver personalized, relevant, and engaging experiences that drive both business growth and customer loyalty.</p>
                                    <p> With a broad range of services and cutting-edge technology solutions, Prophecy Technologies is your partner in navigating digital transformation. We pride ourselves on delivering results that matter. Welcome to a new era of business success, powered by Prophecy Technologies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='assurance_section'>
                    <div className="container">
                        <div className="row">
                            <div className="title-box">
                                <div className="sec-title">
                                    <h1>The 4 A's of Prophecy</h1>
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
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="box-content box1">
                                    <div className="icon">
                                        <img src={AssuranceIcon1} alt="" />
                                    </div>
                                    <h1>Attunement</h1>
                                    <p>Harmonizing goals <br />with action.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box2">
                                    <div className="icon">
                                        <img src={AssuranceIcon1} alt="" />
                                    </div>
                                    <h1>Attunement</h1>
                                    <p>Harmonizing goals <br />with action.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box1">
                                    <div className="icon">
                                        <img src={AssuranceIcon1} alt="" />
                                    </div>
                                    <h1>Attunement</h1>
                                    <p>Harmonizing goals <br />with action.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-content box2">
                                    <div className="icon">
                                        <img src={AssuranceIcon1} alt="" />
                                    </div>
                                    <h1>Attunement</h1>
                                    <p>Harmonizing goals <br />with action.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
            </div>



            <section className='who-we-are-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="left-image">
                                <img src={WhoWeAreImage} alt="" />
                                <div className="gradient-shape"></div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <div className="left-subtitle">
                                    <h6>Who we are</h6>
                                </div>
                                <div className="large-title">
                                    <h1>Visionaries <br />Of Innovations</h1>
                                </div>
                                <p>Prophecy Technologies was founded with a clear vision: to help businesses unlock their full potential by offering innovative, tailored solutions. Our founders identified a critical gap between the way businesses operate and how they engage with customers. Today, we help bridge that gap by offering forward-thinking strategies and technologies that turn visions into reality.</p>
                                <p>Our approach is rooted in a deep understanding of both business needs and customer expectations. By combining technical expertise with a commitment to innovation, we enable businesses to create seamless, personalized experiences for their customers. <b>With 600+ resources, 6+ global locations, 200+ successfully completed projects, and 100+ developer teams, Prophecy Technologies has the expertise, scale, and resources to help your business grow, thrive, and transform.</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="checked-shape">
                        <img src={WhoWeAreChecked} alt="" />
                    </div>
                </div>
            </section>

            <div className="gradient-bg-2">
                <section className='our-core-services'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title">
                                <div className="center-subtitle">
                                    <h6>Our Core Services</h6>
                                </div>
                                <div className="large-title">
                                    <h1>Powering Your <br />Business Growth</h1>
                                </div>
                                <p>At Prophecy Technologies, we offer a comprehensive range of services designed to help businesses excel in an increasingly digital and connected world. Our team of experts collaborates closely with clients to understand their needs and craft solutions that deliver measurable results.
                                    Here’s a closer look at our core services:
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="icon">
                                        <img src={ServiceStar} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Adobe Solutions</h1>
                                        <p>Unlock the full potential of the Adobe Experience Cloud with Prophecy Technologies. We help businesses create personalized, scalable customer experiences using Adobe’s powerful suite of tools. Whether you’re focused on improving your marketing campaigns or delivering exceptional customer service, our Adobe expertise will help you stand out from the competition.
                                        </p>
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



            <section className='approach-section'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="center-subtitle">
                                <h6>Our Core Services</h6>
                            </div>
                            <div className="large-title">
                                <h1>How We Deliver<br />Excellence</h1>
                            </div>
                            <p>At Prophecy Technologies, we believe in a results-driven approach. Our process is built on collaboration, communication, and continuous improvement, ensuring that we deliver exceptional outcomes for every client.
                            </p>
                        </div>
                    </div>
                    <div className="box-content">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="approach-box">
                                    <div className="icon">
                                        <img src={ApproachIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Customer-Centric Solutions</h1>
                                        <p>We start by listening to your needs. Every business is unique, and so are its challenges. Our team works closely with you to understand your goals and pain points, tailoring solutions that deliver measurable impact.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="approach-box">
                                    <div className="icon">
                                        <img src={ApproachIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Innovative Strategies</h1>
                                        <p>Innovation is at the heart of everything we do. We leverage the latest technologies and trends to create cutting-edge solutions that keep your business ahead of the curve. Whether it's integrating AI into your customer experience strategy or modernizing your IT infrastructure, we provide innovative, future-proof solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="approach-box">
                                    <div className="icon">
                                        <img src={ApproachIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Data-Driven Insights</h1>
                                        <p>Making informed decisions is key to success in today’s data-driven world. Prophecy Technologies provides actionable insights by leveraging connected data and advanced analytics. Our data-driven approach ensures that you’re not just reacting to trends—you’re anticipating them.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="approach-box-large approach-box">
                                    <div>
                                        <div className="icon">
                                            <img src={ApproachIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h1>Data-Driven Insights</h1>
                                            <p>Making informed decisions is key to success in today’s data-driven world. Prophecy Technologies provides actionable insights by leveraging connected data and advanced analytics. Our data-driven approach ensures that you’re not just reacting to trends—you’re anticipating them.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src={ApproachImage} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="approach-box">
                                    <div className="icon">
                                        <img src={ApproachIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h1>Continuous Improvement</h1>
                                        <p>Our commitment to excellence doesn’t stop when a project is delivered. We believe in the power of continuous improvement, constantly optimizing and refining our solutions to ensure that you stay ahead in an ever-changing landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='technologies-section'>
                <div className="container">
                    <div className="row">
                        <div className="shape">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="sec-title">
                                <div className="large-title">
                                    <h1>Why Choose Prophecy Technologies?</h1>
                                </div>
                                <p>Choosing the right partner is critical to your success. Here’s why Prophecy Technologies stands out from the rest:</p>
                            </div>
                            <div className="content-one box-content">
                                <div className="icon">
                                    <img src={TechnologiesIcon1} alt="" />
                                </div>
                                <div className="content">
                                    <h1>End-to-End Solutions</h1>
                                    <p>We offer comprehensive, end-to-end solutions that address every aspect of your digital transformation. Whether you need help with Adobe integration, SAP services, or Cybersecurity, we provide the expertise and resources you need to succeed.</p>
                                </div>
                            </div>
                            <div className="content-two box-content">
                                <div className="icon">
                                    <img src={TechnologiesIcon1} alt="" />
                                </div>
                                <div className="content">
                                    <h1>End-to-End Solutions</h1>
                                    <p>We offer comprehensive, end-to-end solutions that address every aspect of your digital transformation. Whether you need help with Adobe integration, SAP services, or Cybersecurity, we provide the expertise and resources you need to succeed.</p>
                                </div>
                            </div>
                            <div className="content-three box-content">
                                <div className="icon">
                                    <img src={TechnologiesIcon1} alt="" />
                                </div>
                                <div className="content">
                                    <h1>End-to-End Solutions</h1>
                                    <p>We offer comprehensive, end-to-end solutions that address every aspect of your digital transformation. Whether you need help with Adobe integration, SAP services, or Cybersecurity, we provide the expertise and resources you need to succeed.</p>
                                </div>
                            </div>
                            <div className="content-four box-content">
                                <div className="icon">
                                    <img src={TechnologiesIcon1} alt="" />
                                </div>
                                <div className="content">
                                    <h1>End-to-End Solutions</h1>
                                    <p>We offer comprehensive, end-to-end solutions that address every aspect of your digital transformation. Whether you need help with Adobe integration, SAP services, or Cybersecurity, we provide the expertise and resources you need to succeed.</p>
                                </div>
                            </div>
                            <div className="content-five box-content">
                                <div className="icon">
                                    <img src={TechnologiesIcon1} alt="" />
                                </div>
                                <div className="content">
                                    <h1>End-to-End Solutions</h1>
                                    <p>We offer comprehensive, end-to-end solutions that address every aspect of your digital transformation. Whether you need help with Adobe integration, SAP services, or Cybersecurity, we provide the expertise and resources you need to succeed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='cta-section common-btn'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1>Let's Build Your Future Together</h1>
                            </div>
                            <p>At Prophecy Technologies, we believe that every business has the potential to achieve greatness. Our mission is to help you unlock that potential by providing the tools, technologies, and strategies needed to succeed in today’s competitive landscape. If you're ready to take the next step in your business’s digital transformation, contact us today and discover how Prophecy Technologies can help you achieve your goals.</p>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Home;
