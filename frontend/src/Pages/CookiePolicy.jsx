import React, { useEffect } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from "aos";
import "aos/dist/aos.css";
import AllPageLoader from '../Components/AllPageLoader';

const CookiePolicy = () => {




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
                            <h1 className='ban-title-animation'>Cookies Policy</h1>
                            <p>This is the Cookie Policy for Prophecy Technologies, accessible from https://www.prophecytechs.com</p>
                        </div>
                        <div className="breadcrumb-title-outline">
                            <h1 className='ban-title-animation'>Cookies Policy</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section className='privacy-policy-section'>
                <div className="container">
                    <div className="row">
                        <div className="policy-content">
                            <h6 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">What Are Cookies :</h6>
                            <p className='para-animation'>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">How We Use Cookies :</h6>
                            <p className='para-animation'>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Disabling Cookies :</h6>
                            <p className='para-animation'>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">The Cookies We Set :</h6>
                            <p className='para-animation'>Site preferences cookies: In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.</p>
                            <p className='para-animation'>Hopefully, that has clarified things for you. If there is something you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                            <p className='para-animation'>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
                            <p className='para-animation'>This policy was last updated on [04-11-2024].</p>

                            <h6 data-aos="fade-right" data-aos-duration="1000">Contact Us</h6>
                            <p className='para-animation'>If you have any questions about this Cookies Policy, You can contact us:</p>
                            <ul>
                                <li>By email: Contactus kumar@prophecytechs.com</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CookiePolicy