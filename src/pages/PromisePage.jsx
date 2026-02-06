import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import promise1 from '../assets/promise1.jpeg';
import promise2 from '../assets/promise2.jpg';

const PromisePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={promise1} backImage={promise2} caption="My promise..." />
            </div>
            <div className="contents">
                <TypewriterText heading="My promise..." text="To always be there, to always care." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/teddy" nextPath="/hug" />
                </div>
            </div>
        </Layout>
    );
};

export default PromisePage;
