import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout
import GridBackground from './components/layout/GridBackground';
import Navbar from './components/layout/Navbar';

// Sections (Swiss Grid Sequence)
import EfficiencyHero from './components/sections/EfficiencyHero';
import TransformationStep from './components/sections/TransformationStep';
import ServicesScroll from './components/sections/ServicesScroll';
import DetailedServices from './components/sections/DetailedServices';
import AboutSplit from './components/sections/AboutSplit';
import AuthorityGrid from './components/sections/AuthorityGrid';
import SocialSection from './components/sections/SocialSection';
import ContactForm from './components/sections/ContactForm';

// Overlays
import { OverlayProvider } from './context/OverlayContext';
import InvoiceModal from './components/overlays/InvoiceModal';
import CookieBanner from './components/overlays/CookieBanner';
import LegalModal from './components/overlays/LegalModal';
import ServiceModal from './components/overlays/ServiceModal';

// Styles
import './styles/index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const lenisRef = useRef(null);

    useEffect(() => {
        // 1. Lenis Smooth Scroll Setup
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
        };
    }, []);

    return (
        <OverlayProvider lenisRef={lenisRef}>
            <GridBackground />
            <Navbar />

            {/* Global Overlays */}
            <ServiceModal />
            <InvoiceModal />
            <LegalModal />
            <CookieBanner />

            <main>
                {/* 1. Intro & Hero */}
                <EfficiencyHero />

                {/* 2. Transformation (02) */}
                <TransformationStep />

                {/* 3. Services (Horizontal Scroll) */}
                <ServicesScroll />

                {/* 3.5 Detailed Services Catalog (New Request) */}
                <DetailedServices />

                {/* 4. Who We Are */}
                <AboutSplit />

                {/* 5. Authority Grid */}
                <AuthorityGrid />

                {/* 6. Contact & Footer */}
                <ContactForm />

                {/* 7. Social Media */}
                <SocialSection />
            </main>
        </OverlayProvider>
    );
}

export default App;
