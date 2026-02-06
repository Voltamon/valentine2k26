import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import OptionSelection from '../components/OptionSelection';
import kiss2 from '../assets/kiss2.jpg';

const KissPage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="13874597465072197683"
                            aspectRatio="1.00855"
                            className="w-full h-full"
                        />
                    }
                    backImage={kiss2}
                    caption="Happy Kiss Day"
                />
            </div>
            <div className="contents">
                <TypewriterText heading="Sweet kisses..." text="Where would you like a kiss?" />
                <OptionSelection
                    options={["Forehead", "Cheek", "Lips", "Hand"]}
                    nextPath="/valentine"
                />
            </div>
        </Layout>
    );
};

export default KissPage;
