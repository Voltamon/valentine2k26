import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-brand-white text-brand-text font-sans flex items-center justify-center p-8 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;
