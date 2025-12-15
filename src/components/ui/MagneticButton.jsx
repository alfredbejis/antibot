import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './MagneticButton.module.css';

const MagneticButton = ({ children, onClick, className = '' }) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        const text = textRef.current;

        if (!button || !text) return;

        const xTo = gsap.quickTo(button, "x", { duration: 0.5, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 0.5, ease: "elastic.out(1, 0.3)" });
        const textXTo = gsap.quickTo(text, "x", { duration: 0.5, ease: "power2.out" });
        const textYTo = gsap.quickTo(text, "y", { duration: 0.5, ease: "power2.out" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.3); // Button moves slightly
            yTo(y * 0.3);
            textXTo(x * 0.1); // Text moves less for parallax
            textYTo(y * 0.1);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`${styles.magneticBtn} ${className}`}
            onClick={onClick}
        >
            <span ref={textRef} className={styles.label}>
                {children}
            </span>
        </button>
    );
};

export default MagneticButton;
