import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
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
                    caption="For you..."
                />
            </div>
            <div className="contents">
                <TypewriterText heading="For you..." text="A rose as beautiful as you are." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start w-full flex justify-center md:justify-start">
                    <NavButtons prevPath="/" nextPath="/propose" />
                </div>
            </div>
        </Layout>
    );
};

export default RosePage;
