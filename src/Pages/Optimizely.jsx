
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

const Optimizely = () => {


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
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Innovate Faster With Our Optimizely Solution!</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">Prophecy Technologies brings you tailored Optimizely solutions to drive innovation and deliver exceptional digital experiences. From personalized content to data-driven optimization, we empower your business to stay ahead. Transform your strategies with our expertise today!
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">How Can Optimizely</h6>
                                <h1 className='mini-title-animation'>Drive Your <br />Digital <br />Transformation?</h1>
                                <p className='para-animation'>Optimizely is a powerful tool for organizations looking to innovate and transform their digital experiences. By offering advanced capabilities in experimentation, personalization, and data-driven decision-making, Optimizely empowers businesses to continuously optimize their digital presence. This continuous improvement helps businesses stay competitive, meet customer demands, and drive measurable results. With its robust platform, Optimizely integrates seamlessly into existing marketing technologies, providing the flexibility needed for scaling digital strategies.</p>
                                <p className='para-animation'>By leveraging Optimizely's insights and optimization tools, companies can elevate their digital transformation efforts. Whether it's enhancing user engagement, refining content strategies, or improving product offerings, Optimizely helps businesses make informed decisions based on real-time data. Get started with us now and experience the power of Optimizely to drive growth and transformation for your business!</p>
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
                                    <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">How Does Optimizely</h6>
                                    <h1 className='mini-title-animation'>Enhance Your <br />Conversion <br />Rates?
                                    </h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Optimizely is a leader in driving higher conversion rates through data-backed decision-making and personalized experiences. With its advanced features, businesses can fine-tune every customer interaction to maximize engagement and conversions.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>A/B Testing and Experimentation
                                                </h6>
                                                <p>Optimizely's A/B testing capabilities allow businesses to test different variations of their website or app to determine which one performs best in driving conversions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Personalization at Scale</h6>
                                                <p>With Optimizely, you can tailor content, messaging, and offers to individual users based on their behavior, improving relevance and increasing the likelihood of conversion.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Real-Time Analytics</h6>
                                                <p>Optimizely’s real-time analytics provide valuable insights into customer behavior, enabling businesses to make quick adjustments and optimize for better performance.
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
                                                <h6>Segmentation and Targeting
                                                </h6>
                                                <p>Advanced targeting capabilities allow businesses to reach specific customer segments with personalized messages, enhancing the chances of conversion by focusing on high-value prospects.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Seamless Integration with Marketing Tools</h6>
                                                <p>Optimizely integrates with your existing marketing stack, allowing you to align optimization efforts across various channels, ensuring a cohesive and efficient strategy to increase conversions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
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
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Why Partner with Prophecy Technologies</h6>
                                <h1 className='mini-title-animation'>For Optimizely <br />Implementation?

                                </h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Partnering with Prophecy Technologies for your Optimizely implementation ensures you harness the full potential of this powerful platform. We specialize in customizing and optimizing Optimizely solutions to meet the unique needs of your business.</p>
                    <div className="benefit-items">
                        <div className="row">
                            <Slider  {...serSettings} className='serSlideItems'>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Expertise in Optimizely Setup

                                            </h6>
                                            <p>Our team of experts helps set up Optimizely tailored to your business goals, ensuring the platform integrates seamlessly into your existing infrastructure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Strategic Consultation

                                            </h6>
                                            <p>We provide strategic consultation to guide your optimization initiatives, ensuring that Optimizely is used to drive measurable outcomes and enhance your digital strategies.
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
                                            <h6>Personalized Optimization Plans</h6>
                                            <p>Prophecy Technologies works with you to develop personalized optimization plans, using Optimizely’s powerful features to align with your specific business objectives.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Continuous Support and Optimization

                                            </h6>
                                            <p>Our partnership doesn't end at implementation. We provide ongoing support and optimization, ensuring that your Optimizely platform evolves with your business needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Training and Empowerment</h6>
                                            <p>We empower your team by providing comprehensive training, ensuring that you can fully leverage Optimizely to improve engagement, conversions, and overall performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
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
                                    <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Why Is Optimizely the Best Choice for</h6>
                                    <h1 className='mini-title-animation'> Data-Driven Decisions?</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={KeyBenefitsImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Optimizely is designed to help businesses make smarter, data-driven decisions by providing deep insights into customer behavior and website performance. Its advanced experimentation tools and personalization features are built to optimize every aspect of your digital strategy.
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
                                                <h6>Advanced Analytics and Reporting
                                                </h6>
                                                <p>Optimizely offers detailed reporting and analytics, providing actionable insights that help you make informed decisions and continuously improve digital experiences.
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
                                                <h6>Real-Time Data Insights
                                                </h6>
                                                <p>Real-time insights allow businesses to adjust strategies quickly based on what is working, ensuring that optimization efforts remain relevant and effective.
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
                                                <h6>Experimentation for Continuous Improvement

                                                </h6>
                                                <p>With A/B and multivariate testing, businesses can continually experiment with different content, designs, and experiences to see what resonates best with users.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Personalized User Journeys
                                                </h6>
                                                <p>By using data to create personalized experiences, Optimizely helps businesses engage customers more effectively, driving loyalty and higher conversion rates.
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
                                                <h6>Integration with Existing Systems
                                                </h6>
                                                <p>Optimizely integrates easily with other data systems, enabling you to make decisions based on a comprehensive view of your customer data, ensuring alignment across your digital strategy.</p>
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
                                <img src={KeyBenefitsImg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Key Features of Optimizely To</h6>
                                <h1 className='mini-title-animation'>Boost <br />Customer <br />Engagement
                                </h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Optimizely offers a suite of powerful features to help businesses engage their customers at every touchpoint. From personalization to optimization, its tools enable businesses to connect with their audience and drive meaningful interactions.
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
                                            <h6>Personalized Content Delivery</h6>
                                            <p>Optimizely enables businesses to deliver highly personalized content based on user behavior and preferences, driving deeper engagement.
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
                                            <h6>A/B Testing for Continuous Optimization
                                            </h6>
                                            <p>The platform’s robust testing tools allow businesses to test various content versions and user flows, optimizing customer interactions and improving engagement.
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
                                            <h6>Multichannel Integration

                                            </h6>
                                            <p>Optimizely helps businesses engage customers across multiple channels, including websites, mobile apps, and emails, ensuring a consistent experience.
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
                                            <h6>Advanced Targeting Capabilities</h6>
                                            <p>Targeting specific user segments with relevant content ensures businesses can connect with the right customers at the right time, boosting engagement rates.
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
                                            <h6>Real-Time Data and Insights
                                            </h6>
                                            <p>Access to real-time data helps businesses understand how customers interact with content, enabling quick adjustments for optimal engagement.</p>
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
                                <h1 className='mini-title-animation'>Accelerate Success <br />with Optimizely

                                </h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Take your business to the next level with Optimizely’s powerful digital optimization solutions. Contact Prophecy Technologies today to get started!
                            </p>
                            <a href="/contact" className='common-btn service-large-btn service-mega-btn '>
                                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">The Key to Digital Success!

                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Optimizely