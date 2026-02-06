import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TypewriterHeading = ({ heading, onComplete, className = "" }) => {
    const [displayedHeading, setDisplayedHeading] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayedHeading('');

        if (!heading) {
            onComplete && onComplete();
            return;
        }

        const interval = setInterval(() => {
            i++;
            if (i <= heading.length) {
                setDisplayedHeading(heading.slice(0, i));
            } else {
                clearInterval(interval);
                onComplete && onComplete();
            }
        }, 50);

        return () => clearInterval(interval);
    }, [heading, onComplete]);

    return (
        <h2 className={`font-sour-gummy text-9xl md:text-5xl leading-tight text-brand-brown min-h-[3.5rem] ${className}`}>
            {displayedHeading}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1"
            >
                |
            </motion.span>
        </h2>
    );
};

export const FadeText = ({ show, children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
            transition={{ duration: 1 }}
            className={`font-sour-gummy text-3xl text-brand-text opacity-80 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const TypewriterText = ({ heading, text }) => {
    const [showText, setShowText] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <TypewriterHeading heading={heading} onComplete={() => setShowText(true)} />
            <FadeText show={showText}>
                {text}
            </FadeText>
        </div>
    );
};

export default TypewriterText;
