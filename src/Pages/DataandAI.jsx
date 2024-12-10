
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import KeyBenefitsImg from "../Assets/Resources/adobe-benefits-img.png"
import KeyBenefitsImg2 from "../Assets/Resources/adobe-benefits-img-2.png"
import KeyBenefitsImg3 from "../Assets/Resources/adobe-benefits-img-3.png"
import AiDataImage from "../Assets/Resources/ai-data-img.png"
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceStar from "../Assets/Resources/service-star.svg"
import AllPageLoader from '../Components/AllPageLoader';

const DataandAI = () => {


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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Smart Insights, Smart Decisions: Our Data & AI Services!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Unlock the full potential of your data with our cutting-edge AI services. By leveraging
                                advanced analytics and machine learning, we transform raw data into actionable
                                insights that drive smart decision-making.
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Intelligent Data, Informed Decisions:</h6>
                                <h1 className='mini-title-animation'>Your AI <br />Advantage!</h1>
                                <p className='para-animation'>Intelligent data forms the backbone of modern business strategy, providing the insights
                                    necessary to navigate complex markets. By leveraging advanced AI algorithms,
                                    organizations can unlock hidden patterns and trends within their data, driving informed
                                    decision-making. Prophecy Technologies specializes in transforming raw data into
                                    actionable intelligence, empowering businesses to stay ahead of the competition.</p>
                                <p className='para-animation'>Our Data & AI services are designed to integrate seamlessly into your existing
                                    operations, enhancing efficiency and effectiveness. From predictive analytics to
                                    machine learning models, we provide tailored solutions that align with your unique
                                    goals. Trust Prophecy Technologies to guide you in harnessing the power of intelligent
                                    data for sustainable growth and innovation.

                                </p>
                                <a href="/contact" className='common-btn service-large-btn'>
                                    <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Get Started With Us Now!</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                                <img src={AiDataImage} alt="" />
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
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">What steps do we take to transform</h6>
                                    <h1 className='mini-title-animation'>Raw data <br />into valuable <br />insights?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Prophecy Technologies transforms raw data into actionable insights through a
                            structured process that unlocks your organization’s full data potential.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Collection and Aggregation</h6>
                                                <p>We gather data from diverse sources across your organization, ensuring a
                                                    comprehensive foundation for analysis and decision-making.
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
                                                <h6>Data Cleaning and Preparation</h6>
                                                <p>Our team cleanses and prepares data by removing inconsistencies, filling gaps, and
                                                    standardizing formats to enhance data quality.
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
                                                <h6>Data Integration and Storage</h6>
                                                <p>Prophecy integrates and securely stores your data in a centralized system, making it
                                                    accessible and easy to analyze across departments.
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
                                                <h6>Feature Engineering for AI Models</h6>
                                                <p>We enhance raw data by creating new features that capture meaningful relationships,
                                                    optimizing it for advanced AI and machine learning models.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Predictive and Prescriptive Analysis</h6>
                                                <p>Using predictive analysis, we forecast future trends, while prescriptive analysis offers
                                                    actionable recommendations to improve outcomes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Visualization</h6>
                                                <p>Prophecy transforms complex data into intuitive visualizations, allowing your team to
                                                    interpret insights easily and make informed decisions.
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
                                                <h6>Generating Reports and Dashboards</h6>
                                                <p>We create dynamic dashboards and reports that deliver real-time insights, empowering
                                                    your team to monitor key metrics at a glance.
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
                                                <h6>Continuous Monitoring and Optimization</h6>
                                                <p>Our team continuously monitors data processes, refining models and adjusting
                                                    algorithms to maintain accuracy and relevance over time</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>With Prophecy Technologies, raw data evolves into valuable insights, empowering your
                                    organization to make smarter, data-driven decisions.</p>
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
                                <img src={KeyBenefitsImg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">What skills and expertise does</h6>
                                <h1 className='mini-title-animation'> Our Data <br />& AI team <br />possess?</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologies’ Data & AI team brings a diverse set of skills and expertise,
                        driving impactful, data-driven solutions for your organization.
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
                                            <h6>Advanced-Data Engineering</h6>
                                            <p>Our team excels in data collection, transformation, and storage, ensuring data is
                                                optimized, reliable, and ready for analysis and modelling.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Expertise in Machine Learning and AI</h6>
                                            <p>We possess in-depth knowledge of machine learning algorithms, enabling us to create
                                                predictive models tailored to specific business needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Statistical Analysis and Modeling
                                            </h6>
                                            <p>Our data scientists are skilled in statistical methods, uncovering trends, correlations,
                                                and patterns that reveal valuable insights.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Natural Language Processing (NLP) Skills</h6>
                                            <p>Our team applies NLP techniques to analyze and extract meaning from unstructured
                                                data, adding valuable insights from text and language</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Data Visualization and Storytelling</h6>
                                            <p>We specialize in data visualization, transforming complex datasets into intuitive, visual
                                                formats that support better decision-making.
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
                                            <h6>Deep Learning and Neural Networks</h6>
                                            <p>Our team has experience with deep learning models, including neural networks, for
                                                complex tasks like image recognition and predictive analytics.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Expertise in Cloud-Based Data Solutions</h6>
                                            <p>We leverage cloud platforms for scalable, flexible data storage and analytics, providing
                                                solutions that grow with your business needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>Prophecy Technologies’ Data & AI team possesses the skills and expertise to transform
                                your data into actionable insights, driving your organization forward.</p>
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
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Our Data Arsenal:</h6>
                                    <h1 className='mini-title-animation'>The Tools <br />We Rely On</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Prophecy Technologies harnesses advanced tools in data and AI to fuel seamless,
                            data-driven innovations across industries.
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
                                                <h6>Data Integration with Databricks</h6>
                                                <p>Our team leverages Databricks for powerful, unified data integration. This simplifies
                                                    workflows, connecting diverse data sources into one cohesive environment.
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
                                                <h6>ETL Transformation with DBT</h6>
                                                <p>With DBT (Data Build Tool), we streamline the ETL process, transforming raw data into
                                                    clean, reliable datasets. This accelerates data readiness for advanced analytics.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Scalable Data Processing with Python/PySpark</h6>
                                                <p>Python and PySpark power our scalable data processing solutions. They enable
                                                    efficient handling of large datasets, which is essential for real-time insights.
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
                                                <h6>Programming with Java</h6>
                                                <p>Java underpins many of our core data workflows. Known for its robustness and speed,
                                                    Java ensures reliable, high-performance data handling.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Modeling for Business Intelligence</h6>
                                                <p>We build structured data models that support predictive analytics. This enables teams to
                                                    make data-driven decisions confidently and swiftly.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Machine Learning with TensorFlow</h6>
                                                <p>Our ML models, powered by TensorFlow, reveal valuable patterns and predictions.
                                                    TensorFlow’s flexibility enhances the accuracy and adaptability of our AI models</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Advanced AI Models</h6>
                                                <p>Our AI models drive predictive analytics, automating complex insights. They improve
                                                    with each interaction, supporting continual learning and enhanced foresight</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Real-Time Collaboration Tools</h6>
                                                <p>Collaboration tools facilitate teamwork on data projects, enabling teams to share and
                                                    act on data insights in real-time, across all locations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>At Prophecy Technologies, we unlock data’s true potential, turning raw information into
                                    innovative insights that drive smarter, strategic growth.
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
                                <img src={KeyBenefitsImg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Benefits of Implementing</h6>
                                <h1 className='mini-title-animation'>Our Predictive <br />Analytics <br />Services</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologies’ predictive analytics services empower organizations to harness
                        data for future-ready decision-making </p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Enhanced Decision-Making</h6>
                                            <p>Our predictive analytics provide actionable insights, allowing you to make informed
                                                decisions. This empowers teams to act with confidence on data-driven strategies.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Increased Operational Efficiency</h6>
                                            <p>Through optimized processes and targeted predictions, we help streamline workflows.
                                                This reduces operational costs and improves productivity across departments.
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
                                            <h6>Risk Mitigation
                                            </h6>
                                            <p>Predictive models help identify potential risks before they escalate. By foreseeing
                                                challenges, businesses can take preventive action to minimize disruptions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Customer Insights and Personalization</h6>
                                            <p>We analyze customer behaviour patterns to enhance personalization. This enables
                                                tailored experiences, improving satisfaction and long-term loyalty.
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
                                            <h6>Improved Forecast Accuracy</h6>
                                            <p>Our models enhance forecasting accuracy, aiding in inventory and demand planning.
                                                This allows for better resource allocation and reduced waste.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Competitive Advantage</h6>
                                            <p>Stay ahead with insights that reveal emerging market trends. Predictive analytics
                                                enables businesses to adapt proactively and outpace competitors.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                            <p className='para-animation'>By implementing Prophecy Technologies’ predictive analytics, businesses gain a
                                competitive edge, translating data into growth, efficiency, and innovation.
                            </p>
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
                                <h1 className='mini-title-animation'>Let’s Talk Data <br />and AI Solutions!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Drive your business forward with intelligent insights powered by our Data and AI
                                solutions. From predictive analytics to real-time decision-making, we design
                                data-driven strategies that support growth and efficiency</p>
                            <a href="/contact" className='common-btn service-large-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Our Tailored AI Solutions!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default DataandAI