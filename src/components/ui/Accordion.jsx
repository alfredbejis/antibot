import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Accordion.module.css';

export const AccordionItem = ({ number, title, subtitle, children, isOpen, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: 'auto', duration: 0.4, ease: 'power3.out' });
        } else {
            gsap.to(contentRef.current, { height: 0, duration: 0.3, ease: 'power3.in' });
        }
    }, [isOpen]);

    return (
        <div className={styles.item}>
            <button className={styles.header} onClick={onClick}>
                <div className={styles.headerLeft}>
                    {number && <span className={`mono ${styles.number}`}>{number}</span>}
                    <div className={styles.headerText}>
                        <h3 className={styles.title}>{title}</h3>
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                </div>
                <div className={styles.icon}>
                    {isOpen ? '−' : '+'}
                </div>
            </button>
            <div className={styles.contentWrapper} ref={contentRef}>
                <div className={styles.contentInner}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Accordion = ({ items, allowMultiple = false }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            {items.map((item, i) => (
                <AccordionItem
                    key={i}
                    number={item.number}
                    title={item.title}
                    subtitle={item.subtitle}
                    isOpen={openIndex === i}
                    onClick={() => toggle(i)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};
