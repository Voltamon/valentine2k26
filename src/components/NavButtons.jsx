import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const NavButtons = ({ nextPath, prevPath }) => {
    return (
        <div className="flex gap-4 mt-8 justify-center w-full">
            {prevPath && (
                <Link to={prevPath}>
                    <Button variant="secondary">
                        Back
                    </Button>
                </Link>
            )}
            {nextPath && (
                <Link to={nextPath}>
                    <Button variant="primary">
                        Next
                    </Button>
                </Link>
            )}
        </div>
    );
};

export default NavButtons;
