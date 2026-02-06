import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import hug1 from '../assets/hug1.jpeg';
import hug2 from '../assets/hug2.jpg';

const HugPage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={hug1} backImage={hug2} caption="Warm hugs..." />
            </div>
            <div className="contents">
                <TypewriterText heading="Warm hugs..." text="Sometimes a hug is all we need to feel safe." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/promise" nextPath="/kiss" />
                </div>
            </div>
        </Layout>
    );
};

export default HugPage;
