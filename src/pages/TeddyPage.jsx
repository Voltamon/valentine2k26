import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import teddy1 from '../assets/teddy1.jpeg';
import teddy2 from '../assets/teddy2.jpg';

const TeddyPage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={teddy1} backImage={teddy2} caption="Cuddles..." />
            </div>
            <div className="contents">
                <TypewriterText heading="Cuddles..." text="Ready to be your teddy bear forever." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/chocolate" nextPath="/promise" />
                </div>
            </div>
        </Layout>
    );
};

export default TeddyPage;
