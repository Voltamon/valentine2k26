import React, { useEffect } from 'react';

const TenorGif = ({ postId, aspectRatio, className = "" }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div
            className={`tenor-gif-embed ${className}`}
            data-postid={postId}
            data-aspect-ratio={aspectRatio}
            data-width="100%"
        >
        </div>
    );
};

export default TenorGif;
