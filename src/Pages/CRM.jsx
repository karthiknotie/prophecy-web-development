
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import KeyBenefitsImg from "../Assets/Resources/adobe-benefits-img.png"
import KeyBenefitsImg2 from "../Assets/Resources/adobe-benefits-img-2.png"
import KeyBenefitsImg3 from "../Assets/Resources/adobe-benefits-img-3.png"
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceStar from "../Assets/Resources/service-star.svg"
import AllPageLoader from '../Components/AllPageLoader';

const CRM = () => {


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
                    slidesToShow: 3,
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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">From Leads to Loyalty: Revolutionize Your CRM Strategy!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Transform your customer interactions with tailored CRM strategies designed to boost
                                engagement and drive loyalty. Empower your sales team with actionable insights and
                                seamless integration for a personalized customer experience.</p>
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


            <div className="gradient-bg">
                <section className='service-section-three gradient-bg sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Process of onboarding a New</h6>
                                    <h1 className='mini-title-animation'>CRM solution <br />with Prophecy <br />Technologies?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Below, we outline our thorough approach to ensure a successful CRM implementation.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Initial Consultation and Needs Assessment</h6>
                                                <p>We start with an in-depth conversation to understand your unique business objectives,
                                                    pain points, and CRM needs. This helps us map out specific goals that our CRM
                                                    solution will address.
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
                                                <h6>Business Process Evaluation</h6>
                                                <p>Our team analyzes your current workflows and customer interaction points to identify
                                                    areas for CRM-driven improvements. This step ensures that the CRM solution aligns
                                                    with your existing processes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Custom Solution Design</h6>
                                                <p>Based on the gathered insights, we tailor a CRM framework that fits your business
                                                    requirements. This includes customizing features, user permissions, and interfaces to
                                                    match your operational needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>CRM Software Selection and Configuration</h6>
                                                <p>With the right tools and platforms identified, we handle configuration and optimization.
                                                    Prophecy Technologies ensures that the CRM platform is set up to maximize
                                                    functionality and efficiency.
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
                                                <h6>Integration with Existing Systems</h6>
                                                <p>We seamlessly integrate the CRM with your current software ecosystem, including ERP,
                                                    email, and marketing platforms. This unifies data sources, offering a 360° view of
                                                    customer interactions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Migration and Cleanup</h6>
                                                <p>Our data experts help migrate customer data from existing systems to the new CRM,
                                                    performing thorough cleanup for accuracy. This step is critical to maintain the integrity of
                                                    customer records.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>User Training and Support</h6>
                                                <p>We provide comprehensive training sessions tailored to different user roles, from sales
                                                    to customer support. This ensures that your team is comfortable and proficient in using
                                                    the CRM system.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Testing and Quality Assurance</h6>
                                                <p>Prophecy Technologies conducts rigorous testing to validate functionality, data
                                                    accuracy, and integration points. This ensures that the CRM solution works flawlessly
                                                    across all departments.
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
                                                <h6>Go-Live and Deployment</h6>
                                                <p>With everything in place, we execute a phased or complete CRM deployment. Our team
                                                    stays on-site or virtually available to monitor the go-live process and resolve any initial
                                                    issues.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Post-Deployment Support and Optimization</h6>
                                                <p>After deployment, we provide ongoing support and system optimization, adjusting
                                                    configurations as your needs evolve. This step ensures sustained CRM performance
                                                    and efficiency.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <a href="/contact" className='common-btn service-large-btn center-ser-btn' style={{ margin: "auto" }}>
                                    <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Get Started With Us Now!</button>
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
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">How can our CRM systems help with</h6>
                                <h1 className='mini-title-animation'>Lead generation <br />&
                                    management?</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologie’s CRM systems are designed to empower your team with
                        effective tools for attracting, capturing, and managing leads. With features built to
                        streamline lead processes, our CRM solutions enable businesses to improve lead
                        quality and increase conversion rates.</p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Capturing Leads from Multiple Channels</h6>
                                            <p>Our CRM integrates with various lead sources, such as websites, social media, and emails. This
                                                centralized capture system prevents leads from slipping through the cracks and provides a
                                                consolidated view.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Automated Lead Scoring and Qualification
                                            </h6>
                                            <p>Prophecy’s CRM uses AI-powered lead scoring to prioritize high-potential leads based on their
                                                engagement. This ensures that your sales team focuses on the most promising prospects.
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
                                            <h6>Customizable Lead Nurturing Workflows</h6>
                                            <p>With automated workflows, the CRM allows you to tailor lead nurturing sequences, sending
                                                personalized content to prospects at different stages. This enhances engagement and increases
                                                the chances of conversion.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Real-Time Lead Tracking and Insights</h6>
                                            <p>Track lead interactions, behaviors, and preferences in real time. Our CRM’s tracking tools help
                                                you understand what prospects are interested in, allowing for targeted follow-ups.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Integration with Marketing Automation</h6>
                                            <p>Seamlessly integrate with marketing tools to align your CRM with campaign strategies. This
                                                enables synchronized lead capture, nurturing, and follow-up efforts between sales and
                                                marketing teams.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Efficient Lead Assignment and Distribution</h6>
                                            <p>The CRM automatically assigns leads to the appropriate sales representatives based on defined
                                                criteria. This speeds up the response time and ensures prompt lead follow-up.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Contact Management for Personalized Outreach
                                            </h6>
                                            <p>Store all contact information and interactions in one place, helping your team personalize every
                                                outreach. Detailed contact records improve communication quality and build stronger
                                                relationships.
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
                                            <h6>Sales Forecasting and Reporting
                                            </h6>
                                            <p>The CRM provides analytics and sales forecasts based on lead data, allowing your team to plan
                                                strategically. These insights guide decision-making and help in adjusting lead management
                                                strategies.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
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
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Our CRM can help businesses</h6>
                                    <h1 className='mini-title-animation'>Understand <br />Your customer <br />Behavior</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Prophecy Technologie’s CRM solutions empower businesses with tools to deeply
                            understand customer behavior, revealing actionable insights that drive engagement and
                            loyalty.

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
                                                <h6>Collecting Comprehensive Customer Data</h6>
                                                <p>Our CRM aggregates data from multiple touchpoints—such as website visits, purchase
                                                    history, and social media interactions. This consolidated data creates a 360° view of
                                                    each customer.
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
                                                <h6>Segmenting Customers for Targeted Insights</h6>
                                                <p>Segment customer data by demographic, behavior, or preferences to deliver more
                                                    personalized experiences. This segmentation enables targeted marketing that
                                                    resonates with distinct audience groups.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Analyzing Purchase Patterns</h6>
                                                <p>The CRM tracks and analyzes customers' purchase histories, helping you spot trends
                                                    and buying cycles. These insights allow you to forecast future demands and tailor
                                                    marketing strategies.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Tracking Customer Interactions Across Channels</h6>
                                                <p>Monitor every interaction, from emails and support chats to social media engagements.
                                                    This cross-channel visibility enables your team to better understand customer needs
                                                    and respond proactively</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Monitoring Product and Service Preferences</h6>
                                                <p>Learn which products or services each customer prefers and the frequency of their
                                                    purchases. This information aids in personalizing offers and building stronger
                                                    relationships.
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
                                                <h6>Utilizing Predictive Analytics for Behavior Forecasting</h6>
                                                <p>Our CRM uses predictive analytics to identify patterns and predict future behaviors. This
                                                    helps businesses anticipate customer needs and improve overall engagement.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Enhancing Customer Satisfaction Through Feedback Analysis</h6>
                                                <p>Gather and analyze customer feedback directly within the CRM. This helps your team
                                                    identify areas for improvement and enhance the customer experience based on
                                                    real-time feedback.
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
                                                <h6>Providing Real-Time Behavioral Insights</h6>
                                                <p>Real-time data tracking offers instant insights into customer behavior, enabling timely
                                                    responses to trends and improving customer engagement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                    <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Take the First Step with Prophecy Now!
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
                                <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Enhance Customer Connections:</h6>
                                <h1 className='mini-title-animation'>Tools for <br />Dynamic CRM <br />Solutions!</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologies leverages leading CRM tools like Salesforce and
                        Dynamics 365 to empower businesses with flexible, scalable solutions that
                        enhance customer engagement and drive long-term growth.</p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Salesforce for Scalable Customer Management</h6>
                                            <p>Salesforce provides a robust platform that scales with your business, offering
                                                tools to manage every aspect of customer interactions. It’s ideal for businesses
                                                aiming to unify and streamline customer data across departments</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Dynamics 365 for Seamless Integration</h6>
                                            <p>Dynamics 365 offers seamless integration with Microsoft products, making it a
                                                natural fit for organizations already utilizing the Microsoft ecosystem. This
                                                integration enables teams to work cohesively across platforms</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Real-Time Customer Insights</h6>
                                            <p>Both Salesforce and Dynamics 365 provide real-time data tracking, allowing you
                                                to monitor and analyze customer behavior instantly. These insights drive faster,
                                                more informed decision-making.
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
                                            <h6>Automation for Enhanced Efficiency</h6>
                                            <p>Automation capabilities in Salesforce and Dynamics 365 streamline routine
                                                tasks, freeing up time for your teams to focus on higher-value activities. This
                                                automation improves response times and customer satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Personalized Marketing with AI-Powered Tools</h6>
                                            <p>Utilize AI-driven tools within these platforms to create targeted, personalized
                                                marketing campaigns. These campaigns are crafted based on individual
                                                customer data, improving relevance and engagement rates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Contact Us To Get Started</button>
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
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">How do we measure the </h6>
                                    <h1 className='mini-title-animation'>success <br />of the CRM <br />initiatives?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>To evaluate the impact of our CRM initiatives at Prophecy Technologies, we employ a
                            range of key metrics.
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
                                                <h6>Customer Retention Rate</h6>
                                                <p>This metric assesses how effectively our CRM keeps customers returning. An increase
                                                    in retention rate indicates that CRM efforts are enhancing customer loyalty and
                                                    satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Customer Lifetime Value (CLV)
                                                </h6>
                                                <p>CLV measures the total revenue a business expects from a customer over their entire
                                                    relationship. A higher CLV suggests successful CRM strategies that maximize each
                                                    customer’s long-term value.
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
                                                <h6>Customer Satisfaction Score (CSAT)</h6>
                                                <p>CSAT evaluates how happy customers are with our services. High CSAT scores reflect
                                                    a positive customer experience, showing CRM is meeting or exceeding expectations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Net Promoter Score (NPS)</h6>
                                                <p>NPS measures customer loyalty by asking if they’d recommend the service to others. A
                                                    high NPS indicates strong customer advocacy, highlighting effective CRM engagement.
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
                                                <h6>Lead Conversion Rate</h6>
                                                <p>This metric tracks the percentage of leads converted into customers. A high conversion
                                                    rate suggests that CRM tools are successfully targeting and nurturing prospects through
                                                    the sales funnel.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Sales Cycle Length</h6>
                                                <p>By measuring how long it takes to close a sale, we assess the CRM’s impact on
                                                    streamlining processes. A shorter sales cycle often means the CRM is improving
                                                    efficiency and reducing bottlenecks.
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
                                                <h6>Average Response Time</h6>
                                                <p>This tracks how quickly customer inquiries are handled. Reduced response times
                                                    indicate that CRM is enhancing service efficiency, leading to better customer
                                                    experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Case Resolution Rate</h6>
                                                <p>This metric measures the number of customer issues resolved within a specific time. A
                                                    higher resolution rate reflects effective CRM workflows and improved customer support.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Upsell and Cross-Sell Rates</h6>
                                                <p>These rates indicate how successfully the CRM is identifying and acting on
                                                    opportunities to sell additional products or services. A rise in these rates signals CRM's
                                                    role in increasing revenue per customer.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Cost Per Lead (CPL)</h6>
                                                <p>CPL measures the total cost to acquire a lead. A lower CPL indicates that CRM
                                                    processes are more efficient and cost-effective in generating leads.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>Through these comprehensive metrics, Prophecy Technologies continuously evaluates
                                    CRM effectiveness, ensuring strategies align with business goals and foster meaningful
                                    customer relationships.</p>
                                <a href="/contact" className='common-btn service-large-btn service-mega-btn'>
                                    <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Schedule a Free Consultation With Us!
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-radial-1"></div>
                    <div className="gradient-bg-radial-2"></div>
                </section>
            </div>


            <section className='cta-section common-btn sec-padding service-page-cta'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Connect with Our <br />Experts Today!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Empower your CRM approach with strategic insights from Prophecy
                                Technologies. Our experts are ready to help tailor a CRM plan that aligns with
                                your goals and customer needs. Connect today to transform your CRM strategy
                                into a growth driver!</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn '>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Tailored CRM Solutions for Every Business!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default CRM