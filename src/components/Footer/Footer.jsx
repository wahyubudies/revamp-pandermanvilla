import React from 'react';

const Footer = () => {
    const BASE_URL_IMG = import.meta.env.VITE_ASSETS_IMG;
    const SOCIAL_MEDIA_DATA = [
        {
            icon: BASE_URL_IMG + "/instagram.png",
            url: "https://www.instagram.com/pandermanview/",
            name: "Instagram"
        },
        {
            icon: BASE_URL_IMG + "/facebook.png",
            url: "https://www.facebook.com/pandermanview/",
            name: "Facebook"
        },
    ];

    return (
        <div className="footer bg-black text-white py-16">
            <div className="container mx-auto grid grid-cols-12 gap-4 px-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-5 md:mb-0">
                    <div className="flex items-start">
                        <img src={BASE_URL_IMG + "/logo-icon.png"} alt="" className='block mr-6' />
                        <div>
                            <p className='text-slate-500 mb-0 md:mb-8'>
                                Jl. Bukit Panderman Hill, Sisir, <br className='hidden md:block' /> Kec. Batu,  Kota Batu <br className='md:hidden block' /> Jawa Timur <br className='hidden md:block' /> 65311
                            </p>
                            <p className='text-slate-500 hidden md:block'>
                                Copyright © 2023
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 md:mb-0">
                    <h3 className="font-semibold mb-3">Informasi & <br /> Pemesanan</h3>
                    <p className='text-slate-500'>0812-3516-370</p>
                </div>
                <div className="col-span-6 md:col-span-3  lg:col-span-2 mb-3 md:mb-0">
                    <h3 className="font-semibold mb-3">Sosial Media</h3>
                    {SOCIAL_MEDIA_DATA.map(({ icon, name, url }, index) => (
                        <div className="flex items-center mb-2" key={index}>
                            <img src={icon} alt="" className='mr-2 w-5 h-5' />
                            <a href={url} target='blank' className='text-slate-500 hover:text-white'>{name}</a>
                        </div>
                    ))}
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-3 md:mb-0 md:mt-4">
                    <iframe
                        className='h-[250px] w-full border-0 rounded-2xl'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15808.158785328686!2d112.5225929!3d-7.890916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7886d49c071afd%3A0x81e47297b94dc460!2sVilla%20Panderman%20View%20Di%20Batu!5e0!3m2!1sid!2sid!4v1703900489002!5m2!1sid!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <p className='mx-auto block md:hidden text-center text-slate-500'>
                Copyright © 2023
            </p>
        </div>
    );
};

export default Footer;
