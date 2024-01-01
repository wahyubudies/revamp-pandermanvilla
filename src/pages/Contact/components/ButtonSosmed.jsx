import React from 'react';
import GeneralUtility from "../../../utility/Utility";

const ButtonSosmed = ({ url, icon, title }) => {
    return (
        <a href={url} className='flex items-center bg-[#F2F2F2] w-fit py-2 px-4 block rounded-lg' target='_blank'>
            <img src={icon} alt={title} className='w-6' />
            <span className='inline-block ml-2 text-black-text'>{GeneralUtility.toCapitalize(title)}</span>
        </a>
    );
};

export default ButtonSosmed;