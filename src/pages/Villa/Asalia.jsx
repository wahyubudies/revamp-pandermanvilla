import React from 'react';
import Image from "../../components/Image/Image";
import Video from "../../components/Video/Video";
import Gallery2Col from "../../components/Gallery2Col/Gallery2Col";
import FacilitiesList from './components/FacilitiesList';
import GeneralUtility from '../../utility/Utility';
import { Helmet } from "react-helmet";

const Asalia = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    const TITLE = "villa asalia";
    const SUBTITLE = "Kami mengerti bahwa bangunan minimalis adalah tempat ideal untuk melakukan aktivitas yang intimate bersama orang terdekat Anda. Walaupun minimalis, kami menyediakan banyak ruang untuk bercengkrama dengan bebas.";
    const URL_COVER = BASE_URL_IMG + "/villa/asalia/cover.webp";
    const URL_VIDEO = "https://www.youtube.com/embed/Bz1e4BnOJfU?si=d2OxyjeLFDTiiIaj";
    const CAPACITY = "20";
    const BASE_URL_ICONS = import.meta.env.BASE_URL + "icons";
    const FACILITIES_ICON = [
        {
            icon: BASE_URL_ICONS + "/colour/bed.svg",
            title: "5 kamar tidur"
        },
        {
            icon: BASE_URL_ICONS + "/colour/refigerator.svg",
            title: "kulkas"
        },
        {
            icon: BASE_URL_ICONS + "/colour/bathroom.svg",
            title: "3 kamar mandi"
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
    ];
    const FACILITIES_PHOTO = [
        {
            url: BASE_URL_IMG + "/villa/asalia/bathroom.webp",
            title: "5 Kamar Tidur, masing-masing Double Bed"
        },
        {
            url: BASE_URL_IMG + "/villa/asalia/bedroom.webp",
            title: "3 Kamar Mandi, dilengkapi Air Panas"
        },
        {
            url: BASE_URL_IMG + "/villa/asalia/kitchen.webp",
            title: "dapur"
        },
        {
            url: BASE_URL_IMG + "/villa/asalia/family-room.webp",
            title: "ruang keluarga"
        },
        {
            url: BASE_URL_IMG + "/villa/asalia/outside-night.webp",
            title: "pemandangan tampak luar malam hari"
        },
        {
            url: BASE_URL_IMG + "/villa/asalia/outside.webp",
            title: "pemandangan tampak luar siang hari"
        },
    ];

    return (
        <>
            <Helmet>
                <title>Villa Asalia - Villa Panderman View</title>
            </Helmet>
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

export default Asalia;