import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './BrutalistModal.module.css';

const BrutalistModal = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef(null);
    const backdropRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, pointerEvents: 'all' });
            gsap.fromTo(modalRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", delay: 0.1 }
            );
        } else {
            gsap.to(modalRef.current, { y: 50, opacity: 0, duration: 0.3 });
            gsap.to(backdropRef.current, { opacity: 0, duration: 0.3, pointerEvents: 'none' });
        }
    }, [isOpen]);

    return (
        <div className={styles.backdrop} ref={backdropRef}>
            <div className={styles.modalContainer} ref={modalRef}>
                <div className={styles.header}>
                    <span className="mono">{title}</span>
                    <button className={styles.closeBtn} onClick={onClose}>[X] CERRAR</button>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BrutalistModal;
