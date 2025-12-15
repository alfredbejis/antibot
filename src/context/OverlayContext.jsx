import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import Lenis from 'lenis';

const OverlayContext = createContext();

export const useOverlay = () => useContext(OverlayContext);

export const OverlayProvider = ({ children, lenisRef }) => {
    const [activeModal, setActiveModal] = useState(null); // 'invoice', 'legal', etc.
    const [overlayData, setOverlayData] = useState({});

    // Lock scrolling when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
            if (lenisRef?.current) lenisRef.current.stop();
        } else {
            document.body.style.overflow = '';
            if (lenisRef?.current) lenisRef.current.start();
        }
    }, [activeModal, lenisRef]);

    const openModal = (type, data = {}) => {
        setOverlayData(data);
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
        setOverlayData({});
    };

    return (
        <OverlayContext.Provider value={{ activeModal, openModal, closeModal, overlayData }}>
            {children}
        </OverlayContext.Provider>
    );
};
