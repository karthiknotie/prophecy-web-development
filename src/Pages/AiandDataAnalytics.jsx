
import React, { useEffect } from 'react';
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import SerImg1 from '../Assets/Resources/serviceImages/AIData_Analytics_img1.png'
import SerImg2 from '../Assets/Resources/serviceImages/AIData_Analytics_img2.png'
import SerImg3 from '../Assets/Resources/serviceImages/AIData_Analytics_img3.png'
import SerImg4 from '../Assets/Resources/serviceImages/AIData_Analytics_img4.png'
import ServiceStar from "../Assets/Resources/service-star.svg"
import Slider from "react-slick";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import AllPageLoader from '../Components/AllPageLoader';

const AiandDataAnalytics = () => {


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
                            <h1 className='ban-title-animation'>Prophecy <br />Technologies!</h1>
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">Unlocking Future Potential with Data and AI</h6>
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
                                <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Prophecy Technologies</h6>
                                <h1 className='mini-title-animation'>AI & Data <br />Analytics for <br />a Smarter <br />Tomorrow</h1>
                                <p className='para-animation'>Prophecy Technologies leverages the power of AI and precision-driven data
                                    analytics to shape smarter, data-informed decisions. With advanced algorithms
                                    and tailored insights, our solutions unlock hidden opportunities within your data,
                                    transforming it into actionable intelligence. Designed to optimize and future-proof
                                    your strategies, our AI-driven analytics bring clarity to complex data, ensuring
                                    you stay ahead in a rapidly evolving digital landscape.</p>
                                <p className='para-animation'>Through innovative AI models and meticulous data analysis, we bridge the gap
                                    between raw data and meaningful intelligence. Prophecy Technologies is
                                    committed to harnessing the future of AI, helping you make the right decisions
                                    today for a smarter tomorrow.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                                <img src={SerImg1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='service-section-one service-section-two service-points-stick sec-padding service-sec' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content sticky-content large-title service-text-space-remove">
                                <h1 className='mini-title-animation'>Our Data <br />& AI<br />Capabilities</h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-list-items sticky-service-section" >
                                <div className="item" data-aos="fade-left" data-aos-duration="1000" >
                                    <div className="item-content">
                                        <h1>Big data engineering</h1>
                                    </div>
                                </div>
                                <div className="item" data-aos="fade-left" data-aos-duration="1000" >
                                    <div className="item-content">
                                        <h1>AI and ML engineering</h1>
                                    </div>
                                </div>
                                <div className="item" data-aos="fade-left" data-aos-duration="1000" >
                                    <div className="item-content">
                                        <h1>Analytics</h1>
                                    </div>
                                </div>
                                <div className="item" data-aos="fade-left" data-aos-duration="1000" >
                                    <div className="item-content">
                                        <h1>Data Science</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="checked-shape">
                <img src={CheckedShape} alt="" />
            </div> */}
            </section>



            <div className="gradient-bg">
                <section className='service-section-three gradient-bg sec-padding'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h1 className='mini-title-animation'>Turning Raw <br />Data into -<br />Powerful <br />Insights!</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={SerImg2} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Prophecy Technologies, we transform raw data into clear, actionable insights that
                            drive intelligent decision-making. Our data-to-insight process is streamlined,
                            precise, and crafted to empower your business at every step.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Collection and Integration</h6>
                                                <p>We start by gathering data from diverse sources, unifying fragmented information
                                                    into one cohesive, accessible system. Our integration process ensures that no
                                                    valuable data point is left behind</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Data Cleansing and Quality Assurance</h6>
                                                <p>To maintain precision, we refine raw data by removing inconsistencies and
                                                    validating accuracy. This step lays the foundation for trustworthy insights and
                                                    reliable analysis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Advanced Data Processing and Transformation</h6>
                                                <p>Through state-of-the-art AI techniques, we transform raw data into a structured,
                                                    usable format. This conversion allows us to prepare data for deep analysis,
                                                    making it easier to derive meaningful insights.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Exploratory Data Analysis</h6>
                                                <p>Our experts examine key data patterns and trends, uncovering valuable
                                                    preliminary insights. This step helps us identify potential areas for in-depth
                                                    analysis and strategic advantage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Predictive Analytics and Modeling</h6>
                                                <p>Using predictive algorithms, we develop models that forecast trends and
                                                    outcomes. These models empower businesses to make proactive decisions
                                                    based on future scenarios.
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
                                                <h6>Data Visualization and Reporting</h6>
                                                <p>Complex data becomes easily understandable through customized visualizations
                                                    and reports. We present insights clearly, making it easy to interpret and act on
                                                    the information.</p>
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
                                                <p>Our process doesn’t stop at delivering insights. We continuously monitor data
                                                    performance and adjust our models, ensuring ongoing accuracy and alignment
                                                    with business goals</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                                <p className='para-animation'>With our proven process, Prophecy Technologies turns data into a powerful
                                    strategic asset. From raw data to actionable insights, we help you make informed
                                    decisions that shape a smarter future</p>
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
                                <img src={SerImg3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">Benefits of<br />using Prophecy's</h6>
                                <h1 className='mini-title-animation'>AI and Data  <br />Analytics <br />Services</h1>
                            </div>
                        </div>
                    </div>
                    <p className='para-animation'>Prophecy Technologies’ AI & Data Analytics services provide clear, measurable
                        benefits that drive growth and efficiency. By leveraging our expertise, your
                        business can unlock the full value of data and make informed decisions with
                        confidence.
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
                                            <h6>Enhanced Decision-Making</h6>
                                            <p>Our data insights support data-driven decisions, empowering your team to make
                                                choices based on accurate, up-to-date information. This reduces risk and boosts
                                                overall business performance.
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
                                            <h6>Increased Operational Efficiency</h6>
                                            <p>We streamline data processes, eliminating bottlenecks and enhancing
                                                productivity. With efficient data workflows, your team can focus on high-impact
                                                tasks rather than data management.
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
                                            <h6>Predictive Insights for Future Planning</h6>
                                            <p>Prophecy’s AI models forecast trends and outcomes, allowing you to stay
                                                proactive in a competitive market. This foresight helps you strategize effectively
                                                and capitalize on upcoming opportunities.
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
                                            <h6>Cost Savings through Optimized Resources</h6>
                                            <p>By analyzing data patterns, we identify opportunities for cost reduction and
                                                resource optimization. This ensures you invest only where it adds the most value
                                                to your business.
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
                                            <h6>Enhanced Customer Understanding</h6>
                                            <p>Our analytics solutions provide a deeper view of customer behaviors and
                                                preferences. With these insights, you can personalize experiences, increase
                                                satisfaction, and build lasting customer loyalty.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Real-Time Insights for Agility</h6>
                                            <p>With continuous monitoring and real-time data, you can respond quickly to
                                                market changes. This agility gives you a competitive edge and keeps your
                                                business aligned with current trends.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='serSlide'>
                                    <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                        <div className="icon">
                                            <img src={ServiceStar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Data Security and Compliance</h6>
                                            <p>We prioritize data security and ensure compliance with industry regulations,
                                                keeping your business and customers safe. Our secure practices protect
                                                sensitive information and build trust.
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
                                            <h6>Scalable Solutions Tailored to Your Needs</h6>
                                            <p>Our services are designed to grow with your business, providing flexible solutions
                                                that adapt to increasing demands. This scalability ensures you stay agile as your
                                                data needs expand.</p>
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
                                    <h1 className='mini-title-animation'>What Makes <br />Us Your Best <br />Choice In <br />the Market</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image" data-aos="fade-left" data-aos-duration="1000" >
                                    <img src={SerImg4} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className='para-animation'>Prophecy Technologies stands out as the premier choice for AI & Data Analytics
                            solutions, offering unparalleled value and expertise. Our commitment to
                            excellence ensures that your business achieves its full potential through
                            data-driven insights.</p>
                        <div className="benefit-items">
                            <div className="row">
                                <Slider  {...serSettings} className='serSlideItems'>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" >
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Proven Expertise and Experience</h6>
                                                <p>With years of industry experience, our team of data scientists and AI specialists
                                                    delivers reliable, high-quality solutions. Our proven track record speaks for our
                                                    ability to drive significant results for clients across various sectors.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Customized Solutions for Every Business</h6>
                                                <p>We understand that no two businesses are alike. Our tailored approach ensures
                                                    that each client receives solutions that meet their unique needs and objectives,
                                                    maximizing their return on investment.
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
                                                <p>Prophecy employs cutting-edge AI technologies and data analytics tools to stay
                                                    ahead of market trends. This enables us to provide you with innovative solutions
                                                    that are both efficient and effective.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Commitment to Data Security</h6>
                                                <p>We prioritize your data security by implementing robust measures to protect
                                                    sensitive information. Our compliance with industry standards and regulations
                                                    safeguards your business against potential risks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Focus on Customer Success</h6>
                                                <p>Our client-centric approach ensures that we are with you every step of the way,
                                                    from implementation to ongoing support. Your success is our priority, and we are
                                                    dedicated to helping you achieve your goals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Comprehensive Support and Training</h6>
                                                <p>We provide extensive training and support to empower your team in utilizing our
                                                    solutions effectively. This hands-on approach ensures that you can fully leverage
                                                    the capabilities of our AI and analytics services.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Continuous Innovation and Improvement</h6>
                                                <p>At Prophecy, we believe in staying ahead of the curve through constant
                                                    innovation. We regularly update our methodologies and technologies to deliver
                                                    the best possible outcomes for our clients.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serSlide'>
                                        <div className="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                            <div className="icon">
                                                <img src={ServiceStar} alt="" />
                                            </div>
                                            <div className="content">
                                                <h6>Exceptional Value for Investment</h6>
                                                <p>Our competitive pricing combined with high-quality service ensures you receive
                                                    exceptional value. We work hard to maximize the impact of every dollar spent on
                                                    our services.
                                                </p>
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

            <section className='cta-section common-btn sec-padding'>
                <div className="container">
                    <div className="row">
                        <div className="sec-title">
                            <div className="large-title">
                                <h1 className='mini-title-animation'>Unite with Us to <br />Forge Your Future</h1>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000">Join Prophecy Technologies on a transformative journey where innovative AI and
                                data analytics solutions empower your business to thrive. Together, we will forge
                                a brighter future, unlocking the potential of your data for lasting success.</p>
                            <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default AiandDataAnalytics