import React, { useEffect, useRef } from 'react';

const GridBackground = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            draw();
        };

        const draw = () => {
            // Millimeter paper style
            const gridSize = 40; // px

            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)'; // Very subtle
            ctx.lineWidth = 1;

            ctx.beginPath();

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }

            // Horizontal lines
            for (let y = 0; y <= height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }

            ctx.stroke();

            // Optional: Crosshairs at intersections for more "technical" feel
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            for (let x = 0; x <= width; x += gridSize * 4) { // Every 4th grid
                for (let y = 0; y <= height; y += gridSize * 4) {
                    ctx.fillRect(x - 1, y - 1, 3, 3); // Small dot
                }
            }
        };

        window.addEventListener('resize', resize);
        resize();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div ref={containerRef} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -2, /* Behind Scene (-1) if Scene is transparent, or adjust Scene to be -3 */
            pointerEvents: 'none',
            background: 'var(--bg-primary)'
        }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default GridBackground;
