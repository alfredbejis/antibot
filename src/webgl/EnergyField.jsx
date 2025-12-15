import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

const EnergyField = ({ count = 2000, chaosRef }) => {
    const mesh = useRef();

    // Data for both chaotic and ordered states
    const particles = useMemo(() => {
        const temp = [];
        const gridSize = Math.ceil(Math.pow(count, 1 / 3));
        const spacing = 1.5;

        for (let i = 0; i < count; i++) {
            // CHAOS STATE: Random positions
            const cx = (Math.random() - 0.5) * 50;
            const cy = (Math.random() - 0.5) * 50;
            const cz = (Math.random() - 0.5) * 50;
            const cSpeed = 0.5 + Math.random();

            // ORDER STATE: Grid positions (Shifted to Left for Solution Layout)
            const ox = (i % gridSize - gridSize / 2) * spacing - 8; // Offset X by -8 units
            const oy = (Math.floor((i / gridSize) % gridSize) - gridSize / 2) * spacing;
            const oz = (Math.floor(i / (gridSize * gridSize)) - gridSize / 2) * spacing;

            temp.push({
                cx, cy, cz, cSpeed, // Chaos coords
                ox, oy, oz          // Order coords
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Default to chaos = 1 if ref not provided
        const currentChaos = chaosRef?.current ?? 1;

        particles.forEach((particle, i) => {
            let { cx, cy, cz, cSpeed, ox, oy, oz } = particle;

            // Animate Chaos State
            const tx = cx + Math.sin(t * cSpeed + i) * 2;
            const ty = cy + Math.cos(t * cSpeed + i) * 2;
            const tz = cz;

            // Animate Order State (Subtle breathing)
            const breathe = Math.sin(t * 0.5 + ox * 0.5) * 0.1;
            const targetX = ox;
            const targetY = oy + breathe;
            const targetZ = oz;

            // Interpolate based on chaosRef (1 = pure chaos, 0 = pure order)
            const x = THREE.MathUtils.lerp(targetX, tx, currentChaos);
            const y = THREE.MathUtils.lerp(targetY, ty, currentChaos);
            const z = THREE.MathUtils.lerp(targetZ, tz, currentChaos);

            dummy.position.set(x, y, z);

            // Scale changes with chaos
            const s = THREE.MathUtils.lerp(0.5, 1.0, currentChaos);
            dummy.scale.set(s, s, s);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
                color="#2563eb"
                emissive="#2563eb"
                emissiveIntensity={1}
                toneMapped={false}
            />
        </instancedMesh>
    );
};

export default EnergyField;
