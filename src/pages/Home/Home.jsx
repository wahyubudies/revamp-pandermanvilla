import React from 'react';
import WhyUS from './components/WhyUS';
import Video from '../../components/Video/Video';
import Gallery from './components/Gallery';
import ListVilla from './components/ListVilla';
import ButtonWa from '../../components/ButtonWa/ButtonWa';

const Home = () => {
    return (
        <>
            <WhyUS />
            <ListVilla />
            <Gallery />
            <Video url="https://www.youtube.com/embed/1g1WYhmax0U?si=9CmLFT0kR_WxgSv0" title="" noBackground={false} />
            <ButtonWa />
        </>
    );
};

export default Home;