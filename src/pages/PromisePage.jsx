import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import OptionSelection from '../components/OptionSelection';
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
                    caption="Happy Promise Day"
                />
            </div>
            <div className="contents">
                <TypewriterText heading="My promise..." text="What promise implies the most?" />
                <OptionSelection
                    options={["Having my back", "Being honest", "Never letting go", "Being my best friend"]}
                    nextPath="/hug"
                />
            </div>
        </Layout>
    );
};

export default PromisePage;
