import React from 'react';
import BoxVilla from './BoxVilla';

const ListVilla = () => {
    const BASE_URL_IMG = import.meta.env.BASE_URL + "img";
    const BASE_URL_ICONS = import.meta.env.BASE_URL + "icons";
    const VILLA_INDUK_FASUM = [
        BASE_URL_ICONS + "/white/double-bed.svg",
        BASE_URL_ICONS + "/white/bathtub.svg",
        BASE_URL_ICONS + "/white/kitchen.svg",
        BASE_URL_ICONS + "/white/refrigerator.svg",
        BASE_URL_ICONS + "/white/dispenser.svg",
        BASE_URL_ICONS + "/white/living-room.svg",
        BASE_URL_ICONS + "/white/dinner-table.svg",
        BASE_URL_ICONS + "/white/family-room.svg",
    ];
    const VILLA_PUNCAK_FASUM = [
        BASE_URL_ICONS + "/white/double-bed.svg",
        BASE_URL_ICONS + "/white/bathtub.svg",
        BASE_URL_ICONS + "/white/kitchen.svg",
        BASE_URL_ICONS + "/white/refrigerator.svg",
        BASE_URL_ICONS + "/white/dispenser.svg",
        BASE_URL_ICONS + "/white/living-room.svg",
        BASE_URL_ICONS + "/white/dinner-table.svg",
        BASE_URL_ICONS + "/white/family-room.svg",
    ];
    const VILLA_MAWAR_FASUM = [
        BASE_URL_ICONS + "/white/double-bed.svg",
        BASE_URL_ICONS + "/white/bathtub.svg",
        BASE_URL_ICONS + "/white/kitchen.svg",
        BASE_URL_ICONS + "/white/refrigerator.svg",
        BASE_URL_ICONS + "/white/dispenser.svg",
        BASE_URL_ICONS + "/white/living-room.svg",
        BASE_URL_ICONS + "/white/dinner-table.svg",
        BASE_URL_ICONS + "/white/ballroom.svg",
    ];
    const VILLA_ASALIA_FASUM = [
        BASE_URL_ICONS + "/white/double-bed.svg",
        BASE_URL_ICONS + "/white/bathtub.svg",
        BASE_URL_ICONS + "/white/kitchen.svg",
        BASE_URL_ICONS + "/white/refrigerator.svg",
        BASE_URL_ICONS + "/white/dispenser.svg",
        BASE_URL_ICONS + "/white/living-room.svg",
        BASE_URL_ICONS + "/white/dinner-table.svg",
    ];
    const VILLA_ELANG_FASUM = [
        BASE_URL_ICONS + "/white/double-bed.svg",
        BASE_URL_ICONS + "/white/bathtub.svg",
        BASE_URL_ICONS + "/white/kitchen.svg",
        BASE_URL_ICONS + "/white/refrigerator.svg",
        BASE_URL_ICONS + "/white/tv.svg",
        BASE_URL_ICONS + "/white/dispenser.svg",
        BASE_URL_ICONS + "/white/living-room.svg",
        BASE_URL_ICONS + "/white/dinner-table.svg",
        BASE_URL_ICONS + "/white/family-room.svg",
    ];
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
                        cover={BASE_URL_IMG + "/villa/induk/cover.jpg"} />
                    <BoxVilla
                        side="right"
                        title="villa puncak"
                        facilities={VILLA_PUNCAK_FASUM}
                        villaName="puncak"
                        capacity={30}
                        cover={BASE_URL_IMG + "/villa/puncak/cover.jpg"} />
                    <BoxVilla
                        side="left"
                        title="villa mawar"
                        facilities={VILLA_MAWAR_FASUM}
                        villaName="mawar"
                        capacity={60}
                        cover={BASE_URL_IMG + "/villa/mawar/cover.jpg"} />
                    <BoxVilla
                        side="right"
                        title="villa asalia"
                        facilities={VILLA_ASALIA_FASUM}
                        villaName="asalia"
                        capacity={20}
                        cover={BASE_URL_IMG + "/villa/asalia/cover.jpg"} />
                    <BoxVilla
                        side="left"
                        title="villa elang"
                        facilities={VILLA_ELANG_FASUM}
                        villaName="elang"
                        capacity={50}
                        cover={BASE_URL_IMG + "/villa/elang/cover.jpg"} />
                </div>
            </div>
        </div>
    );
};

export default ListVilla;