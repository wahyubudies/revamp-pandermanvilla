import React from 'react';
import Image from '../../components/Image/Image';
import Video from '../../components/Video/Video';
import ButtonWa from '../../components/ButtonWa/ButtonWa';
import { Helmet } from "react-helmet";

const About = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    const TEXT_COLLECTION = [text_1, text_2, text_3, text_4, text_5];
    return (
        <>
            <Helmet>
                <title>About - Villa Panderman View</title>
            </Helmet>
            <div className="container mx-auto px-4 pt-8 md:pt-16">
                <div className="w-full max-w-[900px] mx-auto">
                    <h1 className='text-center text-green-primary font-lora font-bold text-3xl md:text-4xl mb-7'>Tentang Kami</h1>
                    <div className="h-[250px] md:h-[500px] max-w-[900px] mx-auto mb-7">
                        <Image image={{ title: "", url: BASE_URL_IMG + "/page-cover/about.webp" }} className="rounded-2xl object-cover" />
                    </div>
                    {TEXT_COLLECTION.map((item, index) => (
                        <p className='text-gray-paragraf mb-4 text-justify w-full' key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <Video url="https://www.youtube.com/embed/1g1WYhmax0U?si=9CmLFT0kR_WxgSv0" title="" noBackground={true} />
            <ButtonWa />
        </>
    );
};

export default About;

const text_1 = "Panderman View Villa adalah hunian yang terdiri atas 5 villa eksotik di tengah keindahan alam kota Batu yang mempesona. Panderman View terletak di tengah-tengah kota wisata Batu yang sejuk dan menawan. Kota Batu terletak sekitar 2 jam dari ibukota Jawa Timur, Surabaya. Dan dapat ditempuh sekitar 40 menit dari Bandar Udara Abdulrahman Saleh yang terletak di kota Malang.";
const text_2 = "Kota Batu terkenal sebagai kota wisata yang menawarkan keindahan alam pegunungan yang dipadu dengan berbagai macam kegiatan wisata seperti: berkebun dan memetik buah langsung dari pohonnya, paralayang, wisata edukasi Jatim Park, kebun binatang Secret Zoo yang merupakan salah satu kebun binatang terbaik di Asia Tenggara, taman hiburan BNS (Batu Night Spectacular), dan berbagai macam objek wisata lainnya.";
const text_3 = "Villa Panderman View memiliki letak yang sangat strategis untuk mencapai berbagai macam objek wisata. Hanya membutuhkan waktu 5 menit untuk mencapai objek wisata Secret Zoo, Museum Satwa, dan juga BNS. Dilengkapi dengan kolam renang pribadi, yang memberikan kenyamanan dan privasi bagi para penghuni villa. Nikmatilah juga kenyamanan tinggal di berbagai macam villa yang dapat disesuaikan dengan kebutuhan anda. Setiap villa yang ada di Panderman View memiliki kenyamanan dan kemewahan yang takkan anda lupakan.";
const text_4 = "Salam Hangat,";
const text_5 = "Panderman View Villa Batu";
