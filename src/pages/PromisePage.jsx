import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import promise2 from '../assets/promise2.jpg';

const PromisePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="17650970414552403520"
                            aspectRatio="1.04348"
                            className="w-full h-full"
                        />
                    }
                    backImage={promise2}
                    caption="My promise..."
                />
            </div>
            <div className="contents">
                <TypewriterText heading="My promise..." text="To always be there, to always care." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start w-full flex justify-center md:justify-start">
                    <NavButtons prevPath="/teddy" nextPath="/hug" />
                </div>
            </div>
        </Layout>
    );
};

export default PromisePage;
