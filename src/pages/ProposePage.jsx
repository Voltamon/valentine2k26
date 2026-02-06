import React from 'react';
import Layout from '../components/Layout';
import Polaroid from '../components/Polaroid';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
import propose1 from '../assets/propose1.jpeg';
import propose2 from '../assets/propose2.jpg';

const ProposePage = () => {
    return (
        <Layout>
            <div className="order-2 md:order-none md:col-start-1 md:row-span-3">
                <Polaroid frontImage={propose1} backImage={propose2} caption="The big question..." />
            </div>
            <div className="contents">
                <TypewriterText heading="The big question..." text="Will you be my Valentine?" />
                <div className="order-4 md:order-none md:col-start-2 md:self-start">
                    <NavButtons prevPath="/rose" nextPath="/chocolate" />
                </div>
            </div>
        </Layout>
    );
};

export default ProposePage;
