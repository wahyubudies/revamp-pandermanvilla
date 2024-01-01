import React from 'react';
import GeneralUtility from "../../../utility/Utility";

const FacilitiesList = ({facilitiesIcon}) => {   
    return (
        <>
            <h3 className='font-lora pt-8 mb-4 text-black font-bold text-2xl'>Fasilitas</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
                {facilitiesIcon.map(({ icon, title }, index) => (
                    <div key={index}>
                        <img src={icon} alt={title} className='w-28 mx-auto block' />
                        <span className='block text-gray-paragraf mt-2 text-center '>{GeneralUtility.toCapitalize(title)}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FacilitiesList;