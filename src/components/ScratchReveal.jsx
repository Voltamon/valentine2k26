import React, { useRef, useEffect, useState } from 'react';

const ScratchReveal = ({ image, className = "" }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');

        // Function to resize canvas to match container
        const resizeCanvas = () => {
            const { width, height } = container.getBoundingClientRect();
            canvas.width = width + 100;
            canvas.height = height + 100;

            // Fill with white (cover)
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, width, height);

            // Add some text or instruction if desired? For now just white.
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    const lastPos = useRef(null);

    const getMousePos = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        return {
            x: (e.clientX || e.touches[0].clientX) - rect.left,
            y: (e.clientY || e.touches[0].clientY) - rect.top
        };
    };

    const startDrawing = (e) => {
        e.stopPropagation();
        setIsDrawing(true);
        const pos = getMousePos(e);
        lastPos.current = pos;

        // Initial dot in case of just a click
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 40, 0, Math.PI * 2); // Initial dot size 40
        ctx.fill();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        lastPos.current = null;
    };

    const draw = (e) => {
        if (!isDrawing) return;

        const pos = getMousePos(e);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 80; // Bigger brush size
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        if (lastPos.current) {
            ctx.moveTo(lastPos.current.x, lastPos.current.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        } else {
            // Fallback if lastPos missing for some reason
            ctx.arc(pos.x, pos.y, 40, 0, Math.PI * 2);
            ctx.fill();
        }

        lastPos.current = pos;
    };

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
            {/* The hidden image at the bottom */}
            <img
                src={image}
                alt="Hidden content"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />

            {/* The scratchable surface */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 touch-none cursor-crosshair"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to flip
            />
        </div>
    );
};

export default ScratchReveal;
