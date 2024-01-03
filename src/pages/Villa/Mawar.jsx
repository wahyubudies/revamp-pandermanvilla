import React from 'react';
import Image from "../../components/Image/Image";
import Video from "../../components/Video/Video";
import Gallery2Col from "../../components/Gallery2Col/Gallery2Col";
import FacilitiesList from './components/FacilitiesList';
import GeneralUtility from '../../utility/Utility';

const Mawar = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    const TITLE = "villa mawar";
    const SUBTITLE = "Kapasitas besar pada Villa Mawar sangat ideal untuk berbagai aktiivitas Anda bersama orang banyak di ruangan indoor.";
    const URL_COVER = BASE_URL_IMG + "/villa/mawar/cover.jpg";
    const URL_VIDEO = "https://www.youtube.com/embed/1g1WYhmax0U?si=9CmLFT0kR_WxgSv0";
    const CAPACITY = "60";
    const BASE_URL_ICONS = import.meta.env.BASE_URL + "icons";
    const FACILITIES_ICON = [
        {
            icon: BASE_URL_ICONS + "/colour/bed.svg",
            title: "15 kamar tidur"
        },
        {
            icon: BASE_URL_ICONS + "/colour/refigerator.svg",
            title: "kulkas"
        },
        {
            icon: BASE_URL_ICONS + "/colour/bathroom.svg",
            title: "16 kamar mandi"
        },
        {
            icon: BASE_URL_ICONS + "/colour/kitchen.svg",
            title: "dapur"
        },
        {
            icon: BASE_URL_ICONS + "/colour/dispenser.svg",
            title: "dispenser"
        },
        {
            icon: BASE_URL_ICONS + "/colour/dining-room.svg",
            title: "ruang makan"
        },
        {
            icon: BASE_URL_ICONS + "/colour/sitting-room.svg",
            title: "ruang tamu"
        },
        {
            icon: BASE_URL_ICONS + "/colour/hall.svg",
            title: "hall 200m2"
        },
    ];
    const FACILITIES_PHOTO = [
        {
            url: BASE_URL_IMG + "/villa/mawar/bathroom.jpg",
            title: "15 Kamar Tidur, (6 Kamar, 5 Kamar, 4 Kamar)"
        },
        {
            url: BASE_URL_IMG + "/villa/mawar/bedroom.jpg",
            title: "15 Kamar Mandi Dalam, dilengkapi Air Panas & 1 Kamar Mandi Luar"
        },
        {
            url: BASE_URL_IMG + "/villa/mawar/kitchen.jpg",
            title: "dapur"
        },
        {
            url: BASE_URL_IMG + "/villa/mawar/family-room.jpg",
            title: "ruang keluarga"
        },
        {
            url: BASE_URL_IMG + "/villa/mawar/outside.jpg",
            title: "pemandangan tampak luar"
        },
    ];

    return (
        <>
            <div className="container mx-auto px-4 pt-8 md:pt-16">
                <div className="w-full max-w-[900px] mx-auto">
                    <h1 className='text-center text-green-primary font-lora font-bold text-3xl md:text-4xl mb-3'>{GeneralUtility.toCapitalize(TITLE)}</h1>
                    <p className='text-center text-gray-paragraf text-base md:text-lg mb-10'>{SUBTITLE}</p>
                    <div className="h-[250px] md:h-[500px] max-w-[900px] mx-auto mb-7">
                        <Image image={{ title: "", url: URL_COVER }} className="rounded-2xl object-cover" />
                    </div>
                    <FacilitiesList facilitiesIcon={FACILITIES_ICON} />
                    <h3 className='font-lora pt-8 mb-2 text-black font-bold text-2xl'>Kapasitas</h3>
                    <p className='text-gray-paragraf'>± {CAPACITY} Orang</p>
                </div>
            </div>
            <Gallery2Col facilities={FACILITIES_PHOTO} />
            <Video url={URL_VIDEO} title="" noBackground={true} />
        </>
    );
};

export default Mawar;