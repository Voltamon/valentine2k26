import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import OptionSelection from '../components/OptionSelection';
import chocolate2 from '../assets/chocolate2.jpg';

const ChocolatePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="21681911"
                            aspectRatio="0.909375"
                            className="w-full h-full"
                        />
                    }
                    backImage={chocolate2}
                    caption="Sweet like you..."
                />
            </div>
            <div className="contents">
                <TypewriterText heading="Sweet like you..." text="What's your favorite flavor?" />
                <OptionSelection
                    options={["Dark", "Milk", "White", "Caramel"]}
                    nextPath="/teddy"
                />
            </div>
        </Layout>
    );
};

export default ChocolatePage;
