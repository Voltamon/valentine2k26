import React from 'react';
import background from '../assets/background.jpg';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative flex items-center justify-center p-8 overflow-hidden text-brand-text font-sans">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-[3px] opacity-60"
                style={{ backgroundImage: `url(${background})` }}
            />
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Layout;
