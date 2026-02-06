import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import rose1 from '../assets/rose1.jpeg';
import rose2 from '../assets/rose2.jpg';

const RosePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={rose1} backImage={rose2} caption="For you..." />
            </div>
            <div className="contents">
                <TypewriterText heading="For you..." text="A rose as beautiful as you are." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/" nextPath="/propose" />
                </div>
            </div>
        </Layout>
    );
};

export default RosePage;
