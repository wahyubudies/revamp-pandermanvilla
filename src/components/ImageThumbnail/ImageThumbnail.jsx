import React, { useState } from 'react';
import Image from '../Image/Image';

const ImageThumbnail = ({ url, className, title }) => {
    const [popUp, setPopup] = useState(false);

    return (
        <>
            <span
                className='hover:scale-95 transition-all relative'
                onClick={() => {
                    setPopup(true);
                }}>
                <Image image={{ title, url }} className={className} />
            </span>

            {popUp && (
                <>
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
                        onClick={() => {
                            setPopup(false);
                        }} />

                    <div className='bg-white p-4 rounded-xl fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[700px]'>
                        <Image image={{ title, url }} className="rounded-xl w-full h-full" />
                    </div>

                    <div
                        className="fixed top-0 right-0 m-4 cursor-pointer z-20"
                        onClick={() => {
                            setPopup(false);
                        }}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>

                    <div className="w-full fixed bottom-0 left-0 p-4 bg-green-primary z-20">
                        <p className='text-center text-white text-lg uppercase'>
                            {title}
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default ImageThumbnail;