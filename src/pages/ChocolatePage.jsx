import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import chocolate1 from '../assets/chocolate1.jpeg';
import chocolate2 from '../assets/chocolate2.jpg';

const ChocolatePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={chocolate1} backImage={chocolate2} caption="Sweet like you..." />
            </div>
            <div className="contents">
                <TypewriterText heading="Sweet like you..." text="Life is sweeter with you in it." />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/propose" nextPath="/teddy" />
                </div>
            </div>
        </Layout>
    );
};

export default ChocolatePage;
