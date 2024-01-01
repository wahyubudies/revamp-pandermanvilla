import React from 'react';
import { Outlet } from 'react-router-dom';
import ButtonWa from '../../components/ButtonWa/ButtonWa';

const LayoutVilla = () => {
    return (
        <div>
            <Outlet />
            <ButtonWa />
        </div>
    );
};

export default LayoutVilla;