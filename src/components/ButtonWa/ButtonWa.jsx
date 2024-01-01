import React from 'react';

const ButtonWa = () => {
    const LINK_WA = "https://wa.me/+62";
    const BASE_URL_ICONS = import.meta.env.VITE_ASSETS_ICONS;

    return (
        <a href={LINK_WA} target='_blank' className='fixed bottom-8 right-8 cursor-pointer w-10'>
            <img src={BASE_URL_ICONS + "/sosmed/wa.svg"} alt="" />
        </a>
    );
};

export default ButtonWa;