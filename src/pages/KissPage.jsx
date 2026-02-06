import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
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
                    caption="Sweet kisses..."
                />
            </div>
            <div className="contents">
                <TypewriterText heading="Sweet kisses..." text="A kiss to say I love you, now and always." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start w-full flex justify-center md:justify-start">
                    <NavButtons prevPath="/hug" nextPath="/valentine" />
                </div>
            </div>
        </Layout>
    );
};

export default KissPage;
