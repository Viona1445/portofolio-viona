import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 20, stiffness: 100 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = () => setIsHovering(true);
        const handleUnhover = () => setIsHovering(false);

        window.addEventListener('mousemove', moveMouse);

        const clickableElements = document.querySelectorAll('a, button, input, textarea, .group, .glass-card');
        clickableElements.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            clickableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
            {/* Main Dot */}
            <motion.div
                className="fixed w-3 h-3 bg-premium-blue rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
            {/* Outer Glow */}
            <motion.div
                className="fixed w-10 h-10 border border-premium-blue/30 rounded-full bg-premium-blue/5"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0.3 : 0.6,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            />
            {/* Ambient Shadow */}
            <div
                className="fixed w-[400px] h-[400px] bg-premium-blue/5 rounded-full blur-[100px]"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
};

export default CustomCursor;
