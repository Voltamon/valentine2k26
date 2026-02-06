import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import valentine1 from '../assets/valentine1.jpeg';
import valentine2 from '../assets/valentine2.jpg';

const ValentinePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={valentine1} backImage={valentine2} caption="Happy Valentine's!" />
            </div>
            <div className="contents">
                <TypewriterText heading="Happy Valentine's!" text="I love you, Uma! ❤️" />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/kiss" />
                </div>
            </div>
        </Layout>
    );
};

export default ValentinePage;
