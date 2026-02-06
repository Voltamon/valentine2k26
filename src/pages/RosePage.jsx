import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import OptionSelection from '../components/OptionSelection';
import rose2 from '../assets/rose2.jpg';

const RosePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="15115009436133024653"
                            aspectRatio="1.18009"
                            className="w-full h-full"
                        />
                    }
                    backImage={rose2}
                    caption="Happy Rose Day"
                />
            </div>
            <div className="contents">
                <TypewriterText heading="For you..." text="Which color rose would you choose?" />
                <OptionSelection
                    options={["Red", "Pink", "White", "Yellow"]}
                    nextPath="/propose"
                />
            </div>
        </Layout>
    );
};

export default RosePage;
