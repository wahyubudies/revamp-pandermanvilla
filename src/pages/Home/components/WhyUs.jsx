import React from 'react';
import Image from '../../../components/Image/Image';

const WhyUS = () => {
    const BASE_URL_IMG = import.meta.env.VITE_ASSETS_IMG;
    const FOUR_REASON = [
        {
            icon: BASE_URL_IMG + "/why-us-icon-1.png",
            title: "5 Villa Nyaman",
            desc: "Kami memiliki 5 Villa terbaik dan nyaman yang bisa kamu pilih yang berada di kompleks Villa Panderman Views"
        },
        {
            icon: BASE_URL_IMG + "/why-us-icon-2.png",
            title: "Suasana Alam",
            desc: "Berada di Kota Batu dengan pemandangan alam dan udara yang dingin akan menghilangkan penat Anda"
        },
        {
            icon: BASE_URL_IMG + "/why-us-icon-3.png",
            title: "Fasilitas Kolam Renang",
            desc: "Tersedia kolam renang yang bisa Anda pakai 24 jam sambil menikmati kesejukan udara dan pemandangan Kota Batu"
        },
        {
            icon: BASE_URL_IMG + "/why-us-icon-4.png",
            title: "Cocok Untuk Keluarga",
            desc: "Villa kami memiliki fasilitas kolam renang anak, lapangan basket, taman, dan rangkaian aktivitas yang cocok untuk keluarga Anda"
        },
    ];
    return (
        <div className='bg-[#F2F2F2] py-16'>
            <div className="container mx-auto px-4">
                <h2 className='text-center text-black font-lora font-bold text-3xl mb-7'>Kenapa Pilih Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[900px]">
                    {FOUR_REASON.map(({ icon, title, desc }, index) => (
                        <div className="bg-white rounded-xl text-center p-6" key={index}>
                            <div className='w-16 mx-auto'>
                                <Image image={{ url: icon, title: "" }} className="mx-auto block object-contain" />
                            </div>
                            <p className="text-black-text text-lg text-bold mb-3">{title}</p>
                            <p className="text-gray-paragraf">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUS;