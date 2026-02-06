import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const ReadyPage = () => {
    const navigate = useNavigate();
    const [noCount, setNoCount] = useState(0);
    const [yesScale, setYesScale] = useState(1);

    const handleNoClick = () => {
        setNoCount(noCount + 1);
        setYesScale(yesScale + 0.2);
    };

    const handleYesClick = () => {
        navigate('/home');
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Surely not?",
            "You might regret this!",
            "Give it another thought!",
            "Are you absolutely certain?",
            "This could be a mistake!",
            "Have a heart!",
            "Don't be so cold!",
            "Change of heart?",
            "Wouldn't you reconsider?",
            "Is that your final answer?",
            "You're breaking my heart ;(",
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
                <motion.h1
                    className="text-4xl md:text-6xl text-brand-brown font-sour-gummy mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Are you ready for 7 days of love?
                </motion.h1>

                <div className="flex flex-wrap items-center justify-center gap-8">
                    <motion.button
                        onClick={handleYesClick}
                        style={{ scale: yesScale }}
                        className="bg-brand-brown text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-opacity-90 transition-colors z-10"
                        whileHover={{ scale: yesScale * 1.05 }}
                        whileTap={{ scale: yesScale * 0.95 }}
                    >
                        Yes
                    </motion.button>

                    <motion.button
                        onClick={handleNoClick}
                        className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ x: 0 }}
                        animate={noCount > 0 ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                    >
                        {getNoButtonText()}
                    </motion.button>
                </div>
            </div>
        </Layout>
    );
};

export default ReadyPage;
