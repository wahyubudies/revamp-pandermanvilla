import React from 'react';
import ImageThumbnail from '../../../components/ImageThumbnail/ImageThumbnail';

const Gallery = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    return (
        <div className='pb-16'>
            <div className="container mx-auto px-4">
                <h2 className='text-center text-black font-lora font-bold text-3xl mb-7'>Fasilitas Kami</h2>
                <div className="mx-auto w-full max-w-[900px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                        <div className="w-full md:w-auto md:flex md:flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                <ImageThumbnail url={BASE_URL_IMG + "/fasum-ladder.jpg"} title="Foto Tangga" className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                                <ImageThumbnail url={BASE_URL_IMG + "/fasum-kolam.jpg"} title="Foto Kolam" className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                            </div>
                        </div>

                        <div className="w-full md:w-auto md:flex">
                            <ImageThumbnail url={BASE_URL_IMG + "/fasum-view-big.jpg"} title="Foto Villa Utama" className="w-full h-80 md:h-full object-cover rounded-xl cursor-pointer" />
                        </div>

                        <div className="w-full md:w-auto md:flex md:flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                <ImageThumbnail url={BASE_URL_IMG + "/fasum-view-field.jpg"} title="Foto Pemandangan Halaman" className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                                <ImageThumbnail url={BASE_URL_IMG + "/fasum-tennis-table.jpg"} title="Foto Meja Tenis" className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ImageThumbnail url={BASE_URL_IMG + "/fasum-basket.jpg"} title="Lapangan Basket" className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                        <ImageThumbnail url={BASE_URL_IMG + "/fasum-billiard.jpg"} title="Meja Billiard" className="w-full h-48 object-cover rounded-xl cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
