import React from 'react';
import WhyUs from './components/WhyUs';
import Video from '../../components/Video/Video';
import Gallery from './components/Gallery';
import ListVilla from './components/ListVilla';
import ButtonWa from '../../components/ButtonWa/ButtonWa';
import Banner from './components/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <WhyUs />
            <ListVilla />
            <Gallery />
            <Video url="https://www.youtube.com/embed/1g1WYhmax0U?si=9CmLFT0kR_WxgSv0" title="" noBackground={false} />
            <ButtonWa />
        </>
    );
};

export default Home;