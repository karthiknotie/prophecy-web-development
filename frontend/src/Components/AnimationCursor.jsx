import { useEffect, useState } from 'react';
import AnimatedCursor from "react-animated-cursor"
import "../Assets/styles/AnimationCursor.css"

const AnimationCursor = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if the screen width is less than a threshold (e.g., 768px)
        const handleResize = () => setIsMobile(window.innerWidth <= 768);

        // Set the initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            {!isMobile && (
                <AnimatedCursor
                    innerStyle={{ zIndex: "99999999" }}
                    innerSize={8}
                    outerSize={30}
                    color="139, 209, 255"
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={2}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link',
                    ]}
                />
            )}
        </>
    )
}

export default AnimationCursor