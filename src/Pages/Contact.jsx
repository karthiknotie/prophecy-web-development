import React from 'react'
import "../Assets/styles/Contact.css"
import BreadCrumbShape1 from "../Assets/Resources/contact-breadcrumb.png"
import BreadCrumbShape2 from "../Assets/Resources/contact-breadcrumb-light.png"
import ContactArrow from "../Assets/Resources/contact-bread-arrow.svg"
import WhoWeAreChecked from "../Assets/Resources/who-we-are-checkedbox.png"

const Contact = () => {
    return (
        <>
            <section className='breadcrumb contact-breadcrumb'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1>Partner with us!</h1>
                            <h6>For Progress and Possibility</h6>
                            <p>Connect with Prophecy Technologies to explore innovative solutions tailored to your business needs. Our global team is ready to collaborate and drive your digital transformation.</p>
                        </div>
                        <div className="shape1">
                            <img src={BreadCrumbShape1} alt="" />
                        </div>
                        <div className="shape2">
                            <img src={BreadCrumbShape2} alt="" />
                        </div>
                        <div className="downarrow">
                            <img src={ContactArrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <div className="gradient-bg contact-gradient-bg">
                <section className='contact-form-section'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title">
                                <h1>Enter your info To get started</h1>
                                <h6>with Prophecy Technologies</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact-form">
                                <h1>Contact Us Form</h1>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Your Name
                                                <input type="text" placeholder='Your Name' />
                                            </label>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Enter Email
                                                <input type="text" placeholder='example@gmail.com' />
                                            </label>
                                        </div>
                                        <div className="col-lg-12">
                                            <label>Your Message
                                                <textarea type="text" placeholder='Example' />
                                            </label>
                                        </div>
                                        <div className="col-lg-12">
                                            <label className='checkbox-form'>
                                                <input type="checkbox" className="custom-checkbox" />
                                                <span className="checkmark"></span>
                                                I agree to the privacy policy
                                            </label>
                                        </div>
                                        <div className="form-submit-btn">
                                            <button>Send Message</button>
                                        </div>
                                    </div>

                                </form>
                                <div className="checked-shape">
                                    <img src={WhoWeAreChecked} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='opportunity-section'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title">
                                <h6>Prophecy Technologies :</h6>
                                <h1>Looking for<br />Opportunity ?</h1>
                                <p>Prophecy Technologies is always on the lookout for talented individuals passionate about driving innovation. If you're searching for a career that pushes boundaries, send us your resume.</p>
                                <div className="common-btn">
                                    <button>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
                <section className='contact-location'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title">
                                <h1>Wanna Know<br />Where We Are?</h1>
                                <h6>Discover Our Office Locations</h6>
                            </div>
                        </div>
                    </div>
                    <div className="checked-shape">
                        <img src={WhoWeAreChecked} alt="" />
                    </div>
                </section>
            </div>


            <section className='branch-address'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="branch-item">
                                <h6>USA California Office</h6>
                                <p>7545 Irvine Center Drive, Suite 200, Irvine, CA 92618, United States</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item">
                                <h6>USA California Office</h6>
                                <p>7545 Irvine Center Drive, Suite 200, Irvine, CA 92618, United States</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item">
                                <h6>USA California Office</h6>
                                <p>7545 Irvine Center Drive, Suite 200, Irvine, CA 92618, United States</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item">
                                <h6>USA California Office</h6>
                                <p>7545 Irvine Center Drive, Suite 200, Irvine, CA 92618, United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='contact-cta'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="sec-title">
                            <h1>Our Global Presence</h1>
                            <h6>With offices across the USA, Canada, and India, we ensure that wherever you are, Prophecy Technologies is within reach. Collaborate with us from any corner of the globe as we tailor digital solutions that make a difference.</h6>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact