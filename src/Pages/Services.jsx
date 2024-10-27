import React from 'react'
import "../Assets/styles/Services.css"
import ServiceBanShape from "../Assets/Resources/service-ban-shape.png"
import Serviceoneimg from "../Assets/Resources/service-one-1.png"
import RightArrow from "../Assets/Resources/service-right-arrow.svg"
import KeyBenefitsImg from "../Assets/Resources/adobe-benefits-img.png"
import KeyBenefitsImg2 from "../Assets/Resources/adobe-benefits-img-2.png"
import KeyBenefitsImg3 from "../Assets/Resources/adobe-benefits-img-3.png"
import KeyBenefitsImg4 from "../Assets/Resources/adobe-benefits-img-4.png"
import KeyBenefitsImg5 from "../Assets/Resources/adobe-benefits-img-5.png"
import BenefitsIcon1 from "../Assets/Resources/benefits-icon-1.png"
import Logo from "../Assets/Resources/banner-logo.svg";

const Services = () => {
    return (
        <>
            <section className='service-hero-section'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="banner-content">
                            <h1>Innovating Solutions,<br />Proven Results</h1>
                            <h6>Prophecy Technologies: Tailored Services for Transformation</h6>
                            <p>Explore Prophecy Technologies innovative services designed to transform your business. From digital transformation to cybersecurity, we empower organizations with tailored solutions for sustainable growth.</p>
                        </div>
                    </div>
                </div>
                <div className="service-hero-shape">
                    <img src={ServiceBanShape} alt="" />
                </div>
            </section>

            <div className="gradient-bg gradient-bg-servicepage">
                <section className='service-section-one'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h6>Prophecy Technologies</h6>
                                    <h1>Customized Solutions for Business Growth</h1>
                                    <p>Our services span across various domains, ensuring that we meet the unique needs of each organization. From enhancing creative capabilities to fortifying cybersecurity, we empower our clients to achieve their business objectives effectively and efficiently. Discover how our comprehensive services can transform your organization.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image">
                                    <img src={Serviceoneimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='service-section-one service-section-two'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h1>Unlock Business Potential</h1>
                                    <h6>With Our Comprehensive <br />Services</h6>
                                    <p>At Prophecy Technologies, we offer a range of services designed to support your business journey. Our seven key services include:</p>
                                    <p>By partnering with us, you gain access to expertise and resources that drive innovation and operational excellence. Our team is committed to delivering tailored solutions that align with your business objectives.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-list-items">
                                    <div className="item active">
                                        <div className="item-content">
                                            <h1>Adobe Solutions</h1>
                                            <p>Digital marketing and creative tools for enhanced engagement.</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-content">
                                            <h1>Application Modernization</h1>
                                            <p>Revamping legacy systems for improved efficiency.</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-content">
                                            <h1>Cybersecurity</h1>
                                            <p>Comprehensive solutions to safeguard your digital assets.</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-content">
                                            <h1>Digital Transformation</h1>
                                            <p>IT services that enhance product experiences.</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-content">
                                            <h1>Infrastructure Modernization</h1>
                                            <p>Upgrading your infrastructure for greater agility.</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-content">
                                            <h1>SAP Solutions</h1>
                                            <p>Business excellence through comprehensive analytics and asset management</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item-content">
                                            <h1>Service Now</h1>
                                            <p>Cloud-based platform automating IT service management</p>
                                        </div>
                                        <div className="icon">
                                            <img src={RightArrow} alt="" />
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
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
            </div>



            <div className="gradient-bg">
                <section className='service-section-three gradient-bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h1>Elevate Your Digital Marketing <br />with Adobe</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image">
                                    <img src={KeyBenefitsImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <p>Adobe is at the forefront of digital marketing and creative software. Its wide range of tools and applications enables businesses to create visually stunning content that captures audience attention. Whether you’re designing websites, editing photos, or producing videos, Adobe’s software suite offers the flexibility and power needed to bring your creative visions to life. From graphic design to video editing, Adobe tools can help businesses enhance their online presence and marketing campaigns, ultimately leading to increased engagement and conversions.</p>
                        <div className="benefit-items">
                            <div className="title">
                                <h6>Key Benefits of Adobe Solutions:</h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Creativity Unleashed</h6>
                                            <p>Harness the full potential of design and multimedia tools</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>User-Friendly Interfaces</h6>
                                            <p>Easy to use for both beginners and professionals</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Comprehensive Support</h6>
                                            <p>Access tutorials and resources to enhance skillsets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-radial-1"></div>
                    <div className="gradient-bg-radial-2"></div>
                </section>
            </div>


            <section className='service-section-three no-gradient-bg '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image">
                                <img src={KeyBenefitsImg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h6>Transform <br />Your Business with</h6>
                                <h1>Application Modernization</h1>
                            </div>
                        </div>
                    </div>
                    <p>In today’s digital landscape, businesses must adapt to stay relevant. Application modernization is essential for organizations looking to enhance their operational efficiency. By updating legacy systems and implementing modern applications, businesses can unlock new capabilities and improve user experiences. This transformation helps streamline processes, reduce costs, and foster innovation.</p>
                    <div className="benefit-items">
                        <div className="title">
                            <h6>What to Expect from Application Modernization</h6>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="icon">
                                        <img src={BenefitsIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>Enhance Performance</h6>
                                        <p>Improved speed and efficiency of applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="icon">
                                        <img src={BenefitsIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>Cost Saving</h6>
                                        <p>Reduced maintenance costs of outdated systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="icon">
                                        <img src={BenefitsIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>Scalability</h6>
                                        <p>Solutions that grow with your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="gradient-bg">
                <section className='service-section-three gradient-bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h1>Safeguard Your Future with Cybersecurity</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image">
                                    <img src={KeyBenefitsImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <p>As cyber threats become increasingly sophisticated, robust cybersecurity measures are more critical than ever. Organizations must prioritize protecting sensitive data and maintaining customer trust. Comprehensive cybersecurity solutions involve developing documentation, creating policies, and conducting training to ensure compliance and preparedness.</p>
                        <div className="benefit-items">
                            <div className="title">
                                <h6>Benefits of Investing in Cybersecurity:</h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Risk Mitigation</h6>
                                            <p>Protect against data breaches and cyber threats.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Regulatory Compliance</h6>
                                            <p>Stay compliant with industry standards and regulations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Peace of Mind</h6>
                                            <p>Focus on your business while we manage your security.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-radial-1"></div>
                    <div className="gradient-bg-radial-2"></div>
                </section>
            </div>


            <section className='service-section-three no-gradient-bg '>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image">
                                <img src={KeyBenefitsImg4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="title">
                                <h1>Embrace Change with Digital Transformation</h1>
                            </div>
                        </div>
                    </div>
                    <p>Digital transformation is not just a trend; it’s a necessity for organizations aiming to thrive in a competitive environment. Companies are increasingly adopting IT transformation services to meet shifting consumer preferences and demands for enhanced product experiences. By leveraging technology, organizations can improve operational efficiency, enhance customer engagement, and drive innovation.</p>
                    <div className="benefit-items">
                        <div className="title">
                            <h6>Key Aspects of Digital Transformation</h6>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="icon">
                                        <img src={BenefitsIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>Agility</h6>
                                        <p>Improved speed and efficiency of applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="icon">
                                        <img src={BenefitsIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>Enhanced Customer Experiences:</h6>
                                        <p>Deliver personalized and engaging interactions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="item">
                                    <div className="icon">
                                        <img src={BenefitsIcon1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6>Data-Driven Insights:</h6>
                                        <p>Utilize analytics to inform business strategies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <div className="gradient-bg">
                <section className='service-section-three gradient-bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="title">
                                    <h1>Modernize Your Infrastructure for Growth</h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="image">
                                    <img src={KeyBenefitsImg5} alt="" />
                                </div>
                            </div>
                        </div>
                        <p>Your organizational infrastructure forms the backbone of your operations. Elevating this infrastructure is crucial for maintaining a competitive advantage. Infrastructure modernization involves rehosting, re-platforming, and optimizing existing systems to create a more agile and responsive framework. This ensures that your organization can effectively meet the demands of the market while minimizing downtime.</p>
                        <div className="benefit-items">
                            <div className="title">
                                <h6>Benefits of Infrastructure Modernization:</h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Increased Efficiency</h6>
                                            <p>Streamline operations and reduce costs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Scalability</h6>
                                            <p>Easily adapt to growth and changes in demand.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="icon">
                                            <img src={BenefitsIcon1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h6>Improved Performance</h6>
                                            <p>Enhanced speed and reliability of services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-bg-radial-1"></div>
                    <div className="gradient-bg-radial-2"></div>
                </section>
            </div>

            <section className='service-cta'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="image">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <h1>Why Choose Prophecy Technologies ?</h1>
                                <p>In an era where technology is pivotal to success, Prophecy Technologies stands out as a reliable partner for businesses looking to thrive. Our commitment to innovation, client satisfaction, and excellence in service delivery positions us as leaders in the industry. With a wealth of experience and a dedication to understanding your unique needs, we provide solutions that foster growth and resilience.</p>
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


        </>
    )
}

export default Services