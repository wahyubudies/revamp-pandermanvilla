import React from 'react';
import Image from '../../components/Image/Image';
import Video from '../../components/Video/Video';
import ButtonSosmed from './components/ButtonSosmed';

const Contact = () => {
    const BASE_URL_ICONS = import.meta.env.VITE_ASSETS_ICONS;
    const BASE_URL_IMG = import.meta.env.VITE_ASSETS_IMG;
    const SOSMED = [
        {
            url: "https://wa.me/+62",
            icon: BASE_URL_ICONS + "/sosmed/wa.svg",
            title: "whatsapp"
        },
        {
            url: "https://www.instagram.com/pandermanview/",
            icon: BASE_URL_ICONS + "/sosmed/ig.svg",
            title: "instagram"
        },
    ];
    return (
        <>
            <div className="container mx-auto px-4 pt-8 md:pt-16">
                <div className="w-full max-w-[900px] mx-auto">
                    <h1 className='text-center text-green-primary font-lora font-bold text-3xl md:text-4xl mb-7'>Hubungi Kami</h1>
                    <div className="h-[250px] md:h-[500px] max-w-[900px] mx-auto mb-7">
                        <Image image={{ title: "", url: BASE_URL_IMG + "/page-cover/contact.jpg" }} className="rounded-2xl object-cover" />
                    </div>

                    <p className='text-gray-paragraf mt-16 mb-8 text-center w-fit mx-auto md:text-lg'>
                        Kenyamanan Anda adalah prioritas kami <br /> Hubungi kami melalui
                    </p>

                    <div className='w-fit mx-auto'>
                        <div className="grid grid-cols-2 gap-4">
                            {SOSMED.map(({ url, icon, title }, index) => (
                                <ButtonSosmed url={url} icon={icon} title={title} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Video url="https://www.youtube.com/embed/1g1WYhmax0U?si=9CmLFT0kR_WxgSv0" title="" noBackground={true} />
        </>
    );
};

export default Contact;