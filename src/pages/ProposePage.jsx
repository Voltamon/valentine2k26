import React, { useState } from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

import propose2 from '../assets/propose2.jpg';

const ProposePage = () => {
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
        navigate('/chocolate');
    };

    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            key={noClickCount > 0 ? "sad-bubu" : "question-bear"}
                            postId={noClickCount > 0 ? "14526934938512287526" : "16167379"}
                            aspectRatio={noClickCount > 0 ? "1" : "1.23552"}
                            className="w-full h-full"
                        />
                    }
                    backImage={propose2}
                    caption="Happy Propose Day"
                />
            </div>
            <div className="contents">
                <TypewriterText heading="The big question..." text="Can I be yours forever?" />
                <div className="order-4 md:order-none md:col-start-2 md:self-start w-full">
                    <div className="flex flex-col md:flex-row gap-4 mt-8 items-center md:justify-start w-full">
                        <Button onClick={handleYesClick} variant="primary">
                            Yes
                        </Button>

                        <Button onClick={handleNoClick} variant="secondary">
                            {noButtonText}
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProposePage;
