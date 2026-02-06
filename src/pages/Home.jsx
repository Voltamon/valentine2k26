import React, { useState } from 'react';
import Layout from '../components/Layout';
import TypewriterText from '../components/TypewriterText';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
    const navigate = useNavigate();
    const [noButtonText, setNoButtonText] = useState("No");
    const [noClickCount, setNoClickCount] = useState(0);

    const noFullTexts = [
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
        "You're breaking my heart ;("
    ];

    const handleNoClick = () => {
        const nextIndex = noClickCount < noFullTexts.length ? noClickCount : noFullTexts.length - 1;
        setNoButtonText(noFullTexts[nextIndex]);
        setNoClickCount(count => count + 1);
    };

    const handleYesClick = () => {
        navigate('/rose');
    };

    return (
        <Layout>
            <div className="md:col-span-2 flex flex-col justify-center items-center text-center">
                <TypewriterText heading="Hi Uma" text="Are you ready for 7 days of love ?" />

                <div className="flex flex-col md:flex-row gap-4 mt-8 items-center justify-center w-full">
                    <Button onClick={handleYesClick} variant="primary">
                        Yes
                    </Button>

                    <Button onClick={handleNoClick} variant="secondary">
                        {noButtonText}
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
