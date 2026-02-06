import React from 'react';
import Layout from '../components/Layout';
import TypewriterText from '../components/TypewriterText';
import NavButtons from '../components/NavButtons';
const Home = () => {
    return (
        <Layout>
            <div className="md:col-span-2 flex flex-col justify-center items-center text-center">
                <TypewriterText heading="Hi Uma..." text="I have something to show you." />
                <NavButtons nextPath="/rose" />
            </div>
        </Layout>
    );
};

export default Home;
