import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import imagesLoaded from 'imagesloaded';
import LoaderIcon from "../Assets/Resources/prophecy-icon-white.png";
import LoaderText from "../Assets/Resources/prophecy-text-white.png";
import gsap from 'gsap';

const AllPageLoader = () => {
    const [isLoading, setIsLoading] = useState(true); // State to control preloader visibility

    useEffect(() => {
        // Disable body overflow to hide the scrollbar
        document.body.style.overflow = 'hidden';

        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.5, // Set smoothness level
            direction: 'vertical', // Enable vertical scrolling
        });

        // Function to update Lenis on every frame
        const update = (time) => {
            lenis.raf(time);
            requestAnimationFrame(update);
        };

        // Start the animation frame loop for Lenis
        requestAnimationFrame(update);

        // Query your content (the preloader container)
        const content = document.querySelector('.preloaderAll');

        // Initialize imagesLoaded to detect when all images have loaded
        const imgLoad = imagesLoaded(content);

        imgLoad.on('done', () => {
            // GSAP animations triggered once images are loaded
            gsap.to('.loader-content-all', {
                scale: 0,
                delay: 0.1,
                ease: 'power3.out',
                onComplete: () => {
                    // Once the animation is complete, hide the preloader and enable overflow
                    setIsLoading(false); // Set to false to hide preloader
                    document.body.style.overflow = ''; // Restore normal overflow behavior
                }
            });
        });

        // Cleanup on component unmount
        return () => {
            lenis.destroy(); // Cleanup Lenis
            document.body.style.overflow = ''; // Restore normal overflow behavior
        };
    }, []);

    return (
        <div className={`preloaderAll ${!isLoading ? 'hidden' : ''}`}>
            <div className="container">
                <div className="loader-content-all">
                    <div className="logo-icon-all">
                        <img src={LoaderIcon} alt="Logo Icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AllPageLoader