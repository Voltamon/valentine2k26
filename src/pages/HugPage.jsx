import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import OptionSelection from '../components/OptionSelection';
import hug2 from '../assets/hug2.jpg';

const HugPage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="11629638664470470030"
                            aspectRatio="1"
                            className="w-full h-full"
                        />
                    }
                    backImage={hug2}
                    caption="Warm hugs..."
                />
            </div>
            <div className="contents">
                <TypewriterText heading="Warm hugs..." text="What kind of hug do you need?" />
                <OptionSelection
                    options={["Bear Hug", "Tight Squeeze", "Gentle Hug", "Warm Cuddle"]}
                    nextPath="/kiss"
                />
            </div>
        </Layout>
    );
};

export default HugPage;
