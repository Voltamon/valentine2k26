import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import { TypewriterHeading } from '../components/TypewriterText';

import valentine2 from '../assets/valentine2.jpg';

const ReadyPage = () => {
    const navigate = useNavigate();
    const [noCount, setNoCount] = useState(0);
    const [yesScale, setYesScale] = useState(1);
    const [showNoGif, setShowNoGif] = useState(false);


    const handleNoClick = () => {
        setNoCount(noCount + 1);
        setYesScale(yesScale + 0.2);
        setShowNoGif(true);
    };

    const handleYesClick = () => {
        navigate('/rose');
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
            {/* Left Side - Polaroid */}

            <div className="flex items-center justify-center order-1 md:order-none">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            key={noCount > 0 ? "sad-bear" : "happy-bear"}
                            postId={noCount > 0 ? "12782870542608816906" : "2972827856134174678"}
                            aspectRatio="1"
                            className="w-full h-full"
                        />
                    }
                    backImage={valentine2}
                    caption="Ready?"
                />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col items-center md:items-start gap-8 order-2 md:order-none w-full">
                <TypewriterHeading
                    heading="Are you ready for 7 days of love?"
                    className="text-4xl md:text-5xl text-brand-brown text-center md:text-left leading-tight"
                />

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 w-full">
                    <Button
                        onClick={handleYesClick}
                        style={{ scale: yesScale }}
                        variant='primary'
                        whileHover={{ scale: yesScale * 1.05 }}
                        whileTap={{ scale: yesScale * 0.95 }}
                    >
                        Yes
                    </Button>

                    <Button
                        onClick={handleNoClick}
                        variant='secondary'
                        initial={{ x: 0 }}
                        animate={noCount > 0 ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                    >
                        {getNoButtonText()}
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default ReadyPage;
