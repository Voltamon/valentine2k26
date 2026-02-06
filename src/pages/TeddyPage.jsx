import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import OptionSelection from '../components/OptionSelection';
import teddy2 from '../assets/teddy2.jpg';

const TeddyPage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="11000884495126033687"
                            aspectRatio="1.05769"
                            className="w-full h-full"
                        />
                    }
                    backImage={teddy2}
                    caption="Happy Teddy Day"
                />
            </div>
            <div className="contents">
                <TypewriterText heading="Cuddles..." text="How big of a Teddy do you want?" />
                <OptionSelection
                    options={["Giant", "Medium", "Tiny", "Me"]}
                    nextPath="/promise"
                />
            </div>
        </Layout>
    );
};

export default TeddyPage;
