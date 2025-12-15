import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useCursor, Html } from '@react-three/drei'
import * as THREE from 'three'
import styles from './CircularGallery.module.css'

function ImageCard({ index, position, rotation, texture, service, onSelect, onHover }) {
    const meshRef = useRef()
    const [hovered, setHovered] = useState(false)

    // Calculate aspect ratio from texture
    const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1

    useFrame((state, delta) => {
        const targetScale = hovered ? 1.15 : 1
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.1)
    })

    // Use aspect ratio to determine plane dimensions
    const planeHeight = 1.2
    const planeWidth = planeHeight * Math.min(aspectRatio, 1.5) // Cap width to avoid too wide

    return (
        <group rotation={rotation} position={position}>
            <mesh
                ref={meshRef}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(service) }}
                onPointerOut={() => { setHovered(false); onHover(null) }}
                onClick={(e) => { e.stopPropagation(); onSelect(service) }}
            >
                <planeGeometry args={[planeWidth, planeHeight]} />
                <meshBasicMaterial
                    map={texture}
                    side={THREE.DoubleSide}
                    transparent
                    opacity={hovered ? 1 : 0.85}
                />
            </mesh>
            {hovered && (
                <Html position={[0, -0.75, 0]} center>
                    <div className={styles.hoverLabel}>
                        <span className={styles.hoverNumber}>{service.number}</span>
                        <span className={styles.hoverTitle}>{service.title}</span>
                    </div>
                </Html>
            )}
        </group>
    )
}

function Carousel({ radius = 2.8, items, onSelect, onHover }) {
    const groupRef = useRef()
    const [isPaused, setIsPaused] = useState(false)
    useCursor(isPaused)

    useFrame((state, delta) => {
        if (!isPaused && groupRef.current) {
            groupRef.current.rotation.y += delta * 0.12
        }
    })

    const textures = useLoader(
        THREE.TextureLoader,
        items.map(item => item.image)
    )

    return (
        <group ref={groupRef}>
            {items.map((item, i) => {
                const angle = (i / items.length) * Math.PI * 2
                return (
                    <ImageCard
                        key={i}
                        index={i}
                        texture={textures[i]}
                        service={item}
                        position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
                        rotation={[0, angle + Math.PI, 0]}
                        onSelect={onSelect}
                        onHover={(svc) => { setIsPaused(!!svc); onHover(svc) }}
                    />
                )
            })}
        </group>
    )
}

function LoadingFallback() {
    return (
        <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color="#ccc" wireframe />
        </mesh>
    )
}

// Detail Overlay Component
function ServiceDetailOverlay({ service, onClose }) {
    // Lock body scroll when overlay is open
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = originalStyle
            document.documentElement.style.overflow = ''
        }
    }, [])

    if (!service) return null

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className={styles.detailOverlay} onClick={handleOverlayClick}>
            <div className={styles.detailPanel}>
                <button className={styles.closeBtn} onClick={onClose}>✕</button>

                <div className={styles.panelInner}>
                    <div className={styles.panelImage}>
                        <img src={service.image} alt={service.title} />
                        <div className={styles.imageOverlay}>
                            <span className={styles.bigNumber}>{service.number}</span>
                        </div>
                    </div>

                    <div className={styles.panelInfo}>
                        <div className={styles.infoHeader}>
                            <span className={styles.detailCategory}>{service.category}</span>
                            <span className={styles.statusBadge}>ACTIVO</span>
                        </div>

                        <h2 className={styles.detailTitle}>{service.title}</h2>

                        <div className={styles.divider}></div>

                        <p className={styles.detailDesc}>{service.content}</p>

                        <div className={styles.detailFeatures}>
                            <h4>INCLUYE:</h4>
                            <ul>
                                <li>Análisis técnico detallado</li>
                                <li>Informe ejecutivo</li>
                                <li>Plan de acción personalizado</li>
                                <li>Seguimiento post-implementación</li>
                            </ul>
                        </div>

                        <button
                            className={styles.ctaBtn}
                            onClick={() => {
                                onClose();
                                window.location.href = '#contact';
                            }}
                        >
                            SOLICITAR PROPUESTA →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CircularGallery({ items }) {
    const [hoveredService, setHoveredService] = useState(null)
    const [selectedService, setSelectedService] = useState(null)

    if (!items || items.length === 0) return null

    return (
        <div className={styles.gallerySection}>
            <div className={styles.galleryHeader}>
                <span className="mono">[ SERVICIOS ]</span>
                <h2 className={styles.galleryTitle}>
                    {hoveredService ? hoveredService.title : 'EXPLORA NUESTROS SERVICIOS'}
                </h2>
                <p className={styles.galleryHint}>
                    {hoveredService ? hoveredService.category : 'Pasa el cursor sobre una imagen • Click para ver detalles'}
                </p>
            </div>

            <div className={styles.galleryContainer}>
                <Canvas camera={{ position: [0, 0, window.innerWidth < 900 ? 9 : 7], fov: 35 }}>
                    <ambientLight intensity={1} />
                    <Suspense fallback={<LoadingFallback />}>
                        <Carousel
                            items={items}
                            onSelect={setSelectedService}
                            onHover={setHoveredService}
                            radius={2.8}
                        />
                    </Suspense>
                </Canvas>
            </div>

            {selectedService && (
                <ServiceDetailOverlay
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </div>
    )
}
