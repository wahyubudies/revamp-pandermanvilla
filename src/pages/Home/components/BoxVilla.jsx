import React from 'react';
import Image from '../../../components/Image/Image';
import RouteName from '../../../route/RouteName';

const BoxVilla = ({ side, title, facilities, capacity, cover, villaName }) => {
    if (side === 'left') {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 bg-green-secondary rounded-xl mb-10'>
                <div className='rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl'>
                    <Image image={{ title: "", url: cover }} className='rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl' />
                </div>
                <div className='bg-green-ornamen rounded-tr-xl rounded-br-xl p-8 rounded-bl-xl md:rounded-bl-none '>
                    <h3 className='text-white font-semibold font-lora text-3xl'>{title.toUpperCase()}</h3>
                    <p className='text-white my-6'>Ringkasan Fasilitas</p>
                    <div className={`grid ${title === "villa elang" ? 'grid-cols-5' : 'grid-cols-4'} w-[200px] gap-4 mb-6`}>
                        {facilities.map((item, index) => (
                            <img src={item.url} alt="" title={item.name} key={index} className='w-8' />
                        ))}
                    </div>
                    <div className="flex items-center">
                        <a href={RouteName.villa[villaName]} className='bg-white rounded-full py-2 px-4 mr-4 cursor-pointer border-0 text-black-text text-md hover:bg-slate-200'>
                            Selangkapnya
                        </a>
                        <p className='text-white'>± <span>{capacity ?? '2'}</span> Orang</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 bg-green-secondary rounded-xl mb-10'>
                <div className='bg-green-ornamen rounded-tl-xl rounded-bl-xl rounded-br-xl md:rounded-br-none p-8'>
                    <h3 className='text-white font-semibold font-lora text-3xl'>{title.toUpperCase()}</h3>
                    <p className='text-white my-6'>Ringkasan Fasilitas</p>
                    <div className='grid grid-cols-4 w-[200px] gap-4 mb-6'>
                        {facilities.map((item, index) => (
                            <img src={item.url} alt="" title={item.name} key={index} className='w-8' />
                        ))}
                    </div>
                    <div className="flex items-center">
                        <a href={RouteName.villa[villaName]} className='bg-white rounded-full py-2 px-4 mr-4 cursor-pointer border-0 text-black-text text-md hover:bg-slate-200'>
                            Selangkapnya
                        </a>
                        <p className='text-white'>± <span>{capacity ?? '2'}</span> Orang</p>
                    </div>
                </div>
                <div className='rounded-tr-xl rounded-tl-xl md:rounded-tl-none md:rounded-br-xl -order-1 md:order-1'>
                    <Image image={{ title: "", url: cover }} className='rounded-tr-xl rounded-tl-xl md:rounded-tl-none md:rounded-br-xl' />
                </div>
            </div>
        );
    }
};

export default BoxVilla;