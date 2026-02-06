import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TenorGif from '../components/TenorGif';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import valentine2 from '../assets/valentine2.jpg';

const ValentinePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3 flex items-center justify-center">
                <Polaroid
                    frontComponent={
                        <TenorGif
                            postId="25154876"
                            aspectRatio="1.52381"
                            className="w-full h-full"
                        />
                    }
                    backImage={valentine2}
                    caption="Happy Valentine's!"
                />
            </div>
            <div className="contents">
                <TypewriterText heading="Happy Valentine's!" text="I love you, Uma! ❤️" />
                <div className="order-4 md:order-none md:col-start-2 md:self-start w-full flex justify-center md:justify-start">
                    <NavButtons prevPath="/kiss" />
                </div>
            </div>
        </Layout>
    );
};

export default ValentinePage;
