import React from 'react';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';

const Gallery2Col = ({ facilities }) => {
    return (
        <div className="container mx-auto px-4 pt-16">
            <div className="w-full max-w-[900px] mx-auto">
                <h3 className='font-lora mb-4 text-black font-bold text-2xl'>Galeri</h3>
                <div className="grid grid-cols-2 gap-4">
                    {facilities.map(({ url, title }, index) => (
                        <ImageThumbnail key={index} url={url} title={title} className="object-cover rounded-xl cursor-pointer" />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Gallery2Col;