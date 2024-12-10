
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

const RoboticProcessAutomation = () => {


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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Next-Gen Automation: Unlock Potential with RPA!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Next-Gen Automation empowers organizations to streamline operations and enhance
                                productivity through Robotic Process Automation (RPA). By automating repetitive tasks,
                                businesses can focus on strategic initiatives that drive growth and innovation.
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Smart Automation Solutions:</h6>
                                <h1 className='mini-title-animation'>RPA for the <br />Modern <br />Enterprise!</h1>
                                <p className='para-animation'>Smart automation solutions are transforming the way modern enterprises operate, and
                                    Robotic Process Automation (RPA) is at the forefront of this revolution. By automating
                                    repetitive and mundane tasks, RPA frees up valuable time for employees to focus on
                                    more strategic initiatives, driving innovation and growth. Prophecy Technologies
                                    harnesses the power of RPA to enhance operational efficiency, reduce errors, and
                                    ensure consistent performance across various business processes.
                                </p>
                                <p className='para-animation'>Implementing RPA not only streamlines workflows but also provides organizations with
                                    real-time insights into their operations. This visibility allows businesses to make
                                    informed decisions and adapt quickly to changing market demands. With Prophecy
                                    Technologies as your partner in automation, you can unlock the full potential of your
                                    enterprise, paving the way for a more agile and competitive future.
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
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">key advantages of </h6>
                                    <h1 className='mini-title-animation'>Using RPA <br />in your <br />organization</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Robotic Process Automation (RPA) from Prophecy Technologies transforms workflows
                            by automating routine tasks, increasing productivity, and reducing operational costs.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Increased Efficiency and Productivity
                                                </h6>
                                                <p>RPA executes repetitive tasks quickly and accurately, freeing your team to focus on
                                                    strategic initiatives and complex projects.
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
                                                <h6>Cost Savings and ROI Boost</h6>
                                                <p>By automating time-consuming tasks, RPA reduces labour costs and accelerates return
                                                    on investment for your organization.
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
                                                <h6>Enhanced Accuracy and Consistency</h6>
                                                <p>RPA minimizes human error in data-intensive tasks, ensuring high accuracy and
                                                    reliable, consistent results.
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
                                                <h6>Scalability and Flexibility</h6>
                                                <p>Our RPA solutions are highly scalable, allowing you to add or reduce bots based on
                                                    changing business needs without extensive reconfiguration.
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
                                                <h6>Improved Compliance and Risk Management
                                                </h6>
                                                <p>RPA adheres to compliance standards by logging all activities, and providing
                                                    transparent records that reduce regulatory risks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Better Resource Allocation</h6>
                                                <p>With RPA handling repetitive processes, your workforce can be reallocated to more
                                                    valuable roles that require human insight and creativity.
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
                                                <h6>Quick and Easy Implementation</h6>
                                                <p>Prophecy's RPA solutions integrate with existing systems, ensuring smooth
                                                    implementation without extensive infrastructure changes.
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
                                                <h6>24/7 Operational Capabilities</h6>
                                                <p>RPA operates around the clock, ensuring processes continue outside traditional
                                                    business hours, increasing overall productivity</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>Unlock the potential of RPA with Prophecy Technologies and drive efficiency, accuracy,
                                    and long-term growth across your organization.
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
                                <img src={KeyBenefitsImg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">What steps are involved in the</h6>
                                <h1 className='mini-title-animation'> RPA <br />implementation <br />process?</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'><br /></p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Initial Process Assessment</h6>
                                            <p>We begin by identifying suitable processes for automation, focusing on repetitive tasks
                                                with high volume and error-prone areas.
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
                                            <h6>Feasibility Analysis</h6>
                                            <p>Our team evaluates the technical feasibility and expected return on investment to
                                                ensure RPA will add value to your operations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Goal Setting and Strategy Development
                                            </h6>
                                            <p>We set clear goals and develop a tailored RPA strategy aligned with your organization’s
                                                objectives and growth plans.
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
                                            <h6>Selecting the Right RPA Tools</h6>
                                            <p>Prophecy experts choose the most suitable RPA tools based on your technical
                                                requirements, scalability, and compatibility with existing systems.
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
                                            <h6>Process Design and Documentation</h6>
                                            <p>Detailed process mapping and documentation are carried out, providing a blueprint for
                                                automation that ensures accuracy and efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Development and Configuration</h6>
                                            <p>Our developers configure the RPA bots according to the process requirements,
                                                ensuring they perform tasks with speed and precision.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <p className='para-animation'>Prophecy Technologies guides you through a robust RPA implementation process,
                                ensuring a seamless transition to enhanced efficiency and productivity.
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
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Your Automation Allies:</h6>
                                    <h1 className='mini-title-animation'>The RPA <br />Tools We <br />Trust</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>At Prophecy Technologies, we partner with industry-leading RPA tools to deliver tailored
                            automation solutions that drive efficiency and innovation.
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
                                                <h6>Automation Anywhere: Scalable Automation Made Simple
                                                </h6>
                                                <p>Automation Anywhere provides powerful, easy-to-deploy automation tools that
                                                    streamline workflows and scale seamlessly with your business needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Blue Prism: Advanced Automation for Complex Processes</h6>
                                                <p>Blue Prism is ideal for complex, enterprise-level automation, offering robust capabilities
                                                    in security, compliance, and analytics for mission-critical tasks</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Appian: Low-Code RPA for Rapid Deployment</h6>
                                                <p>With Appian’s low-code RPA, automation deployment is fast and intuitive, enabling your
                                                    team to automate workflows with minimal coding expertise</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>UiPath: User-Friendly Automation for All Skill Levels</h6>
                                                <p>UiPath offers a user-friendly interface, empowering teams at all skill levels to design,
                                                    manage, and deploy automation with ease.
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
                                                <h6>Integrated Solutions for Maximum Impact</h6>
                                                <p>We select the right combination of RPA tools to address your unique requirements,
                                                    integrating multiple platforms for a customized, cohesive solution.
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
                                                <h6>Enhanced Security and Compliance</h6>
                                                <p>These RPA tools prioritize security and compliance, providing robust features to ensure
                                                    data protection and meet regulatory standards.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Scalable and Flexible Automation Platforms</h6>
                                                <p>Our trusted RPA tools offer high scalability, allowing you to expand or adapt your
                                                    automation capabilities as your business grows.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>Prophecy Technologies trusts these leading RPA tools to provide reliable, scalable, and
                                    secure automation solutions tailored to your organization’s needs.
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
                                <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">RPA: Your Secret Weapon</h6>
                                <h1 className='mini-title-animation'>For Major <br />Cost Cuts
                                </h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Robotic Process Automation (RPA) from Prophecy Technologies is a powerful tool for
                        significantly reducing costs, enhancing efficiency, and driving profitability.
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
                                            <h6>Lower Labor Costs</h6>
                                            <p>By automating repetitive, time-consuming tasks, RPA reduces the need for manual
                                                labour, cutting down on staffing expenses.
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
                                            <h6>Reduced Error-Related Costs</h6>
                                            <p>RPA performs tasks with high accuracy, reducing costly errors and the expenses
                                                associated with error correction and quality assurance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Faster Process Completion
                                            </h6>
                                            <p>Automated processes are completed more quickly than manual ones, increasing
                                                productivity and reducing the operational costs tied to lengthy tasks.
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
                                            <h6>Decreased IT Maintenance Costs</h6>
                                            <p>RPA can work across legacy systems without extensive integration efforts, reducing the
                                                need for costly system upgrades or replacements.
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
                                            <h6>Enhanced Scalability Without Extra Overheads
                                            </h6>
                                            <p>RPA enables you to scale operations without increasing headcount, allowing you to
                                                meet demand while keeping overheads low</p>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                            <p className='para-animation'>With Prophecy Technologies’ RPA solutions, your organization can achieve major cost
                                savings and sustainable growth through efficient, automated processes.
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
                                <h1 className='mini-title-animation'>Contact us for A New <br />Era of Business <br />Efficiency!</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Connect with us to explore tailored solutions that drive next-level efficiency for
                                your business. From streamlining processes to enhancing productivity, we’re
                                here to support your journey toward operational excellence. Let’s discuss how
                                our expertise can unlock transformative potential for your business today</p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn '>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Transform Your Operations with RPA!</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default RoboticProcessAutomation