import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavButtons = ({ nextPath, prevPath }) => {
    return (
        <div className="flex gap-4 mt-8 justify-center w-full">
            {prevPath && (
                <Link to={prevPath}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-full border border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white transition-colors"
                    >
                        Back
                    </motion.button>
                </Link>
            )}
            {nextPath && (
                <Link to={nextPath}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-2 rounded-full bg-brand-brown text-white shadow-lg hover:shadow-xl transition-all"
                    >
                        Next
                    </motion.button>
                </Link>
            )}
        </div>
    );
};

export default NavButtons;
