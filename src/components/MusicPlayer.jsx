import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundMusic from '../assets/background.mp3';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const musicUrl = backgroundMusic;

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Set volume to 40%
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Playback failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <audio
                ref={audioRef}
                loop
                onEnded={() => {
                    if (isPlaying && audioRef.current) {
                        audioRef.current.play().catch(e => console.error("Loop playback failed:", e));
                    }
                }}
            >
                <source src={musicUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-brand-brown text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center w-12 h-12"
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    // Pause Icon
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                ) : (
                    // Play Icon (Musical Note)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163z" />
                    </svg>
                )}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
