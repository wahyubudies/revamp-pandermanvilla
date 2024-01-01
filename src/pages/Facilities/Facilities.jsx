import React from 'react';
import Image from '../../components/Image/Image';
import Video from '../../components/Video/Video';
import Gallery2Col from '../../components/Gallery2Col/Gallery2Col';
import ButtonWa from '../../components/ButtonWa/ButtonWa';

const Facilities = () => {
    const BASE_URL_IMG = import.meta.env.VITE_ASSETS_IMG;
    const TEXT_COLLECTION = [text_1, text_2, text_3];
    const FACILITIES = [
        {
            url: BASE_URL_IMG + "/fasum-view-night.jpg",
            title: "view night villa"
        },
        {
            url: BASE_URL_IMG + "/fasum-billiard.jpg",
            title: "meja billiard"
        },
        {
            url: BASE_URL_IMG + "/fasum-balkon.jpg",
            title: "view balkon"
        },
        {
            url: BASE_URL_IMG + "/fasum-basket.jpg",
            title: "lapangan basket"
        },
        {
            url: BASE_URL_IMG + "/fasum-tennis-table.jpg",
            title: "tenis meja"
        },
        {
            url: BASE_URL_IMG + "/fasum-kolam.jpg",
            title: "kolam renang"
        },
    ];
    return (
        <>
            <div className="container mx-auto px-4 pt-8 md:pt-16">
                <div className="w-full max-w-[900px] mx-auto">
                    <h1 className='text-center text-green-primary font-lora font-bold text-3xl md:text-4xl mb-7'>Fasilitas Kami</h1>
                    <div className="h-[250px] md:h-[500px] max-w-[900px] mx-auto mb-7">
                        <Image image={{ title: "", url: BASE_URL_IMG + "/page-cover/facilities.jpg" }} className="rounded-2xl object-cover" />
                    </div>
                    {TEXT_COLLECTION.map((item, index) => (
                        <p className='text-gray-paragraf mb-4 text-justify w-full' key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <Gallery2Col facilities={FACILITIES} />
            <Video url="https://www.youtube.com/embed/1g1WYhmax0U?si=9CmLFT0kR_WxgSv0" title="" noBackground={true} />
            <ButtonWa />
        </>
    );
};

export default Facilities;

const text_1 = "Interior dan eksterior modern pada bangunan fasilitas utama, menyuguhkan Anda untuk menikmati keindahan alam sambil melakukan aktivitas yang menyegarkan pikiran Anda.  Fasilitas utama kami sangat mendukung berbagai macam acara Anda.";
const text_2 = "Selain fasilitas-fasilitas wajib seperti Kamar Tidur, Kamar Mandi dengan Air Panas, TV, Dapur Dispenser dan Peralatan Makan, Villa Panderman View juga menyediakan berbagai macam fasilitas hiburan lain yang dapat digunakan. Fasilitas ini tersedia secara eksklusif untuk pengunjung Villa Panderman View, sehingga privasi para pengunjung dapat tetap terjaga.";
const text_3 = "Fasilitas-fasilitas lain yang dapat digunakan oleh para pengunjung antara lain: Kolam renang, lapangan basket, meja billiard, meja pingpong, taman bermain, dan lain-lain.";