import React, { useEffect } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import "../Assets/styles/PrivacyPolicy.css"
import AllPageLoader from '../Components/AllPageLoader';


const PrivatePolicy = () => {





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
            <section className='breadcrumb privacy-policy-breadcrumb'>
                <div className="container">
                    <div className="row">
                        <div className="breadcrumb-title">
                            <h1 className='ban-title-animation'>Privacy Policy</h1>
                            <p>At Prophecy Technologies, safeguarding your privacy and securing your personal information is a top priority for us. Our privacy policy is designed to inform you about the collection, use, and protection of the data you share with us.</p>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1 className='ban-title-animation'>Privacy Policy</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section className='privacy-policy-section'>
                <div className="container">
                    <div className="row">
                        <div className="policy-content">
                            <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Collection of Information:</h6>
                            <p className='para-animation'>When you interact with our website, we may gather personal information such as your name, email address, phone number, and company details. This information is collected through forms you fill out or when you contact us directly. Additionally, we collect non-personal information, such as IP addresses, browser types, and device information, to enhance our website's functionality and tailor content to your preferences.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Use of Information:</h6>
                            <p className='para-animation'>We use your personal information to provide services, respond to inquiries, and keep you informed about our products, services, and promotions. This ensures a seamless experience and effective communication with you. Non-personal information is utilized for website analytics, allowing us to improve user experience and optimize our platform for better performance.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Data Security:</h6>
                            <p className='para-animation'>Rest assured, we employ industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. Your information is stored securely and accessed only by authorized personnel for legitimate business purposes.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Cookies:</h6>
                            <p className='para-animation'>To enhance your browsing experience, our website uses cookies. These small text files are stored on your device and help us track user behavior, gather statistical data, and provide personalized content. You have the option to manage cookie preferences through your browser settings.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Third-Party Services:</h6>
                            <p className='para-animation'>In some cases, we may use third-party services for analytics, marketing, or website functionality. These services have their own privacy policies and terms of use, which we recommend reviewing.<br />For more general information on cookies, please read "Cookies" article from the Privacy Policy Generator.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Data Sharing:</h6>
                            <p className='para-animation'>Prophecy Technologies does not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your information with trusted partners who assist us in providing services. These partners are bound by confidentiality agreements to protect your data.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Legal Compliance:</h6>
                            <p className='para-animation'>We are committed to legal compliance and may disclose your information if required by law or to protect our rights, property, or safety, or that of others.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Opt-Out and Access:</h6>
                            <p className='para-animation'>You have the right to opt out of receiving promotional communications from us. Additionally, you can request access to, update, or delete your personal information by contacting us at a kumar@prophecytechs.com .</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Changes to Policy:</h6>
                            <p className='para-animation'>Our privacy policy may be updated or modified at any time, and changes will be reflected on our website with the effective date. By using our website, you consent to the terms outlined in this privacy policy.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Contact Us:</h6>
                            <p className='para-animation'>If you have any questions or concerns about our privacy practices, please do not hesitate to reach out to us at kumar@prophecytechs.com.

                                This privacy policy serves as a commitment from Prophecy Technologies to protect your privacy and ensure transparency in how we handle and safeguard your personal information.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrivatePolicy