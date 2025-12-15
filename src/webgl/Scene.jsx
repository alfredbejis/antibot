import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import EnergyField from './EnergyField';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene = ({ chaosRef }) => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, background: '#050505' }}>
            <Canvas camera={{ position: [0, 0, 20], fov: 40 }}>
                <Suspense fallback={null}>
                    <fog attach="fog" args={['#050505', 10, 40]} />
                    <ambientLight intensity={0.5} />
                    {/* Blue-ish point light */}
                    <pointLight position={[10, 10, 10]} intensity={500} color="#3b82f6" />
                    <EnergyField count={2000} chaosRef={chaosRef} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
