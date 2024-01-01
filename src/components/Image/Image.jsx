import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Image = ({ image, className, scrollPosition }) => {
    return (
        <LazyLoadImage
            scrollPosition={scrollPosition}
            className={`${className} h-full w-full`}
            effect="opacity"
            alt={image.title}
            height="100%"
            src={image.url}
            width="100%" />
    );
};

export default trackWindowScroll(Image);