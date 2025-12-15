import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlurText = ({ children, className = '', delay = 0 }) => {
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                {
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 20
                },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    delay: delay,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, textRef);

        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={textRef} className={className} style={{ willChange: 'filter, transform, opacity' }}>
            {children}
        </div>
    );
};

export default BlurText;
