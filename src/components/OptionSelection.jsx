import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';

const OptionSelection = ({ options, nextPath, onSelect }) => {
    const navigate = useNavigate();

    const handleSelect = (option) => {
        if (onSelect) onSelect(option);
        if (nextPath) {
            navigate(nextPath);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-3xl mx-auto font-sour-gummy">
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {options.map((option, index) => {
                    const label = typeof option === 'string' ? option : option.label;
                    return (
                        <Button
                            key={index}
                            onClick={() => handleSelect(label)}
                            className="!min-w-0 !px-4"
                        >
                            {label}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default OptionSelection;
