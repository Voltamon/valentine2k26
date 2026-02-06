import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseClasses = "px-8 py-3 rounded-full font-sour-gummy text-xl transition-all shadow-md min-w-[120px]";

    const variants = {
        primary: "bg-brand-brown text-white hover:bg-opacity-90 hover:shadow-lg",
        secondary: "border-2 border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
