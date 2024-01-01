import React from 'react';

const Video = ({ url, title, noBackground }) => {
    return (
        <div className={`${noBackground ? "" : "bg-[#F2F2F2]"} py-16`}>
            <div className="container mx-auto px-4">
                <h2 className='text-center text-black font-lora font-bold text-3xl mb-7'>Video Singkat</h2>
                <iframe
                    className='w-full max-w-[900px] mx-auto rounded-xl h-[250px] md:h-[500px]'
                    src={url}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default Video;