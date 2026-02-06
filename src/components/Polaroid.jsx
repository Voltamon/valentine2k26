import React from 'react';
import { motion } from 'framer-motion';

import ScratchReveal from './ScratchReveal';

const Polaroid = ({ frontImage, backImage, caption, frontComponent }) => {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <div className="group perspective-1000 w-full max-w-md mx-auto cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -3,
                    rotateY: isFlipped ? 180 : 0
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative preserve-3d w-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div
                    className="backface-hidden bg-brand-brown p-4 pb-12 shadow-xl border border-brand-brown absolute inset-0"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="aspect-square w-full overflow-hidden bg-brand-brown mb-2 relative flex items-center justify-center bg-white">
                        {frontComponent ? (
                            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                                {frontComponent}
                                {!isFlipped && <div className="absolute inset-0 bg-transparent z-10" />}
                            </div>
                        ) : (
                            <img
                                src={frontImage}
                                alt={caption}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    {caption && (
                        <div className="font-serif text-center mt-4 text-xl text-white opacity-90">
                            {caption}
                        </div>
                    )}
                </div>

                {/* Back Side */}
                <div
                    className="bg-brand-brown p-4 pb-12 shadow-xl border border-brand-brown transform rotate-y-180"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <div className="aspect-square w-full overflow-hidden bg-brand-brown mb-2 bg-white relative">
                        <ScratchReveal image={backImage || frontImage} />
                    </div>
                    {caption && (
                        <div className="font-serif text-center mt-4 text-xl text-white opacity-90">
                            {caption}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Polaroid;
