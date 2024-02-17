import React from 'react';
import BoxVilla from './BoxVilla';
import { VILLA_ASALIA_FASUM, VILLA_ELANG_FASUM, VILLA_INDUK_FASUM, VILLA_MAWAR_FASUM, VILLA_PUNCAK_FASUM } from './static';

const ListVilla = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    return (
        <div className='py-16'>
            <div className="container mx-auto px-4">
                <div className="mx-auto w-full max-w-[900px]">
                    <BoxVilla
                        side="left"
                        title="villa induk"
                        facilities={VILLA_INDUK_FASUM}
                        villaName="induk"
                        capacity={24}
                        cover={BASE_URL_IMG + "/villa/induk/cover.webp"} />
                    <BoxVilla
                        side="right"
                        title="villa puncak"
                        facilities={VILLA_PUNCAK_FASUM}
                        villaName="puncak"
                        capacity={30}
                        cover={BASE_URL_IMG + "/villa/puncak/cover.webp"} />
                    <BoxVilla
                        side="left"
                        title="villa mawar"
                        facilities={VILLA_MAWAR_FASUM}
                        villaName="mawar"
                        capacity={60}
                        cover={BASE_URL_IMG + "/villa/mawar/cover.webp"} />
                    <BoxVilla
                        side="right"
                        title="villa asalia"
                        facilities={VILLA_ASALIA_FASUM}
                        villaName="asalia"
                        capacity={20}
                        cover={BASE_URL_IMG + "/villa/asalia/cover.webp"} />
                    <BoxVilla
                        side="left"
                        title="villa elang"
                        facilities={VILLA_ELANG_FASUM}
                        villaName="elang"
                        capacity={50}
                        cover={BASE_URL_IMG + "/villa/elang/cover.webp"} />
                </div>
            </div>
        </div>
    );
};

export default ListVilla;