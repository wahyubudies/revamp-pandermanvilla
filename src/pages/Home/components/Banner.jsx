import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

const Banner = () => {
    const BASE_URL_ICONS = import.meta.env.BASE_URL + "icons";
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    const SLIDER_IMAGE = [
        {
            url: BASE_URL_IMG + "/slider/slider1.webp",
            title: ""
        },
        {
            url: BASE_URL_IMG + "/slider/slider2.webp",
            title: ""
        },
        {
            url: BASE_URL_IMG + "/slider/slider3.webp",
            title: ""
        },
        {
            url: BASE_URL_IMG + "/slider/slider4.webp",
            title: ""
        },
        {
            url: BASE_URL_IMG + "/slider/slider5.webp",
            title: ""
        },
    ];
    return (
        <div className='pt-8 pb-16'>
            <div className="container mx-auto px-4">
                <div className="mx-auto w-full max-w-[1080px]">
                    <Splide
                        options={{
                            rewind: true,
                            width: "100%",
                            gap: '1rem',
                            autoplay: true,
                            type: 'loop',
                        }}
                        hasTrack={false}
                        aria-label="">
                        <SplideTrack className='rounded-2xl'>
                            {SLIDER_IMAGE.map(({ url, title }, index) => (
                                <SplideSlide key={index}>
                                    <img src={url} alt={title} className='rounded-2xl' />
                                </SplideSlide>
                            ))}
                        </SplideTrack>

                        <div className="splide__arrows w-full flex justify-between items-center px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <button className="splide__arrow splide__arrow--prev">
                                <img src={BASE_URL_ICONS + "/white/arrow-left.svg"} alt="" className='hidden md:block md:w-7 lg:w-9' />
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <img src={BASE_URL_ICONS + "/white/arrow-right.svg"} alt="" className='hidden md:block md:w-7 lg:w-9' />
                            </button>
                        </div>
                    </Splide>
                </div>
            </div>
        </div >
    );
};

export default Banner;