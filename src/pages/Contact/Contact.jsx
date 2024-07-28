import React from 'react';
import Image from '../../components/Image/Image';
import Video from '../../components/Video/Video';
import ButtonSosmed from './components/ButtonSosmed';
import { Helmet } from "react-helmet";

const Contact = () => {
    const BASE_URL_ICONS = import.meta.env.BASE_URL + "icons";
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
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
            <Helmet>
                <title>Contact - Villa Panderman View</title>
            </Helmet>
            <div className="container mx-auto px-4 pt-8 md:pt-16">
                <div className="w-full max-w-[900px] mx-auto">
                    <h1 className='text-center text-green-primary font-lora font-bold text-3xl md:text-4xl mb-7'>Hubungi Kami</h1>
                    <div className="h-[250px] md:h-[500px] max-w-[900px] mx-auto mb-7">
                        <Image image={{ title: "", url: BASE_URL_IMG + "/page-cover/contact.webp" }} className="rounded-2xl object-cover" />
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

                    <iframe
                        className='h-[500px] w-full border-0 rounded-2xl my-16'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15808.158785328686!2d112.5225929!3d-7.890916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7886d49c071afd%3A0x81e47297b94dc460!2sVilla%20Panderman%20View%20Di%20Batu!5e0!3m2!1sid!2sid!4v1703900489002!5m2!1sid!2sid"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;