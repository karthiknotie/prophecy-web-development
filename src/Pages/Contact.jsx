// Contact.js
import React, { useEffect, useState } from 'react';
import "../Assets/styles/Contact.css"
import BreadCrumbShape1 from "../Assets/Resources/contact-breadcrumb-new.png"
import BreadCrumbShape2 from "../Assets/Resources/contact-breadcrumb-light.png"
import ContactArrow from "../Assets/Resources/contact-bread-arrow.svg"
import WhoWeAreChecked from "../Assets/Resources/who-we-are-checkedbox.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AllPageLoader from '../Components/AllPageLoader';
import { usePostEnquiryMutation } from '../redux/features/enquiry/EnquiryApi'; // Redux API hook
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    const [postEnquiry] = usePostEnquiryMutation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    // Handle form submission


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form inputs
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Proceed with form submission
        setIsLoading(true);
        try {
            await postEnquiry(formData).unwrap(); // Send the data to the API
            alert("Your enquiry has been submitted!");
            setFormData({
                name: '',
                email: '',
                message: ''
            }); // Reset form fields on success
        } catch (error) {
            alert("Failed to submit enquiry. Please try again.");
        } finally {
            setIsLoading(false);
        }
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

        // Other animations
        const SplitTypesBan = document.querySelectorAll('.ban-title-animation');
        SplitTypesBan.forEach((char) => {
            const text = new SplitType(char, { types: 'chars' });
            gsap.from(text.chars, {
                opacity: 0.2,
                stagger: 0.08,
                scrub: true,
            });
        });

        const SplitTypesMini = document.querySelectorAll('.mini-title-animation');
        SplitTypesMini.forEach((char) => {
            const text = new SplitType(char, { types: 'chars' });
            gsap.from(text.chars, {
                opacity: 0.2,
                stagger: 0.08,
                scrub: true,
            });
        });

        // Scroll-triggered animations
        const elements = document.querySelectorAll('.para-animation');
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });

        AOS.init();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Prevent numbers in the name field
        if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
            setErrors({ ...errors, name: 'Name must not contain numbers.' });
            return;
        }

        setFormData({ ...formData, [name]: value });

        // Clear errors as the user types
        setErrors({ ...errors, [name]: '' });
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            newErrors.name = 'Name must only contain letters.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        }

        return newErrors;
    };

    return (
        <>
            <AllPageLoader />
            <section className='breadcrumb contact-breadcrumb'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1 className='ban-title-animation'>Partner with us!</h1>
                            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">For Progress and Possibility</h6>
                            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000">
                                Connect with Prophecy Technologies to explore innovative solutions tailored to your business needs. Our global team is ready to collaborate and drive your digital transformation.
                            </p>
                        </div>
                        <div className="shape1">
                            <img src={BreadCrumbShape1} alt="BreadCrumbShape1" />
                            <a href="#contactDownArrow">
                                <div className="downarrow">
                                    <img src={ContactArrow} alt="ContactArrow" />
                                </div>
                            </a>
                        </div>
                        <div className="shape2" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="500">
                            <img src={BreadCrumbShape2} alt="BreadCrumbShape2" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="gradient-bg contact-gradient-bg">
                <section className='contact-form-section' id='contact-enquiry-form'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title large-title">
                                <h1 className='mini-title-animation'>Enter your info <br />To get started</h1>
                                <h6 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">with Prophecy Technologies</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact-form" data-aos="zoom-in" data-aos-duration="1000">
                                <h1>Contact Us Form</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <label>Your Name
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            {errors.name && <p className="error">{errors.name}</p>}
                                        </div>
                                        <div className="col-lg-6">
                                            <label>Enter Email
                                                <input
                                                    type="email"
                                                    placeholder="example@gmail.com"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            {errors.email && <p className="error">{errors.email}</p>}
                                        </div>
                                        <div className="col-lg-12">
                                            <label>Your Message
                                                <textarea
                                                    placeholder="Example"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            {errors.message && <p className="error">{errors.message}</p>}
                                        </div>
                                        <div
                                            className="form-submit-btn common-btn"
                                            data-aos="zoom-in"
                                            data-aos-duration="1000"
                                        >
                                            <button type="submit" disabled={isLoading}>
                                                {isLoading ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='opportunity-section'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title large-title">
                                <h6 data-aos="fade-down" data-aos-duration="1000">Prophecy Technologies:</h6>
                                <h1 className='mini-title-animation'>Looking for<br />Opportunity?</h1>
                                <p data-aos="fade-up" data-aos-duration="1000">Prophecy Technologies is always on the lookout for talented individuals passionate about driving innovation. If you're searching for a career that pushes boundaries, send us your resume.</p>
                                <div className="common-btn" data-aos="zoom-in" data-aos-duration="1000">
                                    <button><a href="/career" style={{ color: "#000" }}>Send Message</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="gradient-bg-radial-1"></div>
                <div className="gradient-bg-radial-2"></div>
                <section className='contact-location' id='contactDownArrow'>
                    <div className="container">
                        <div className="row">
                            <div className="sec-title large-title">
                                <h1 className='mini-title-animation'>Wanna Know<br />Where We Are?</h1>
                                <h6 data-aos="fade-up" data-aos-duration="1000">Discover Our Office Locations</h6>
                            </div>
                        </div>
                    </div>
                    <div className="checked-shape">
                        <img src={WhoWeAreChecked} alt="WhoWeAreChecked" />
                    </div>
                </section>
            </div>

            <section className='branch-address' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>USA California</h6>
                                <p>7545 Irvine Center Drive, Suite 200, Irvine, CA 92618
                                    United States</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>Canada Toronto</h6>
                                <p>405, The West Mall, Suite 910, Toronto, ON - M9C 5J5
                                    Canada</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>Chennai Tidel Park</h6>
                                <p>5th Floor - C Block, TIDEL Park, 4, Canal Bank Rd, Taramani, Chennai</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>Trichy</h6>
                                <p>Plot No 13 Bharathi Nagar, 7T Sangiliyandapuram, ,Tamil Nadu,Trichy</p>
                            </div>
                        </div>
                    </div>
                    <div className="row second-location">
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>Mexico</h6>
                                {/* <p>7545 Irvine Center Drive, Suite 200, Irvine, CA 92618
                                    United States</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>Singapore</h6>
                                {/* <p>405, The West Mall, Suite 910, Toronto, ON - M9C 5J5
                                    Canada</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="branch-item" data-aos="zoom-in" data-aos-duration="1000">
                                <h6>Japan</h6>
                                {/* <p>5th Floor - C Block, TIDEL Park, 4, Canal Bank Rd, Taramani, Chennai</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='contact-cta'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="sec-title large-title ">
                            <h1 className='mini-title-animation'>Our Global Presence</h1>
                            <h6 className='para-animation'>With offices across the USA, Canada, and India, we ensure that wherever you are, Prophecy Technologies is within reach. Collaborate with us from any corner of the globe as we tailor digital solutions that make a difference.</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
