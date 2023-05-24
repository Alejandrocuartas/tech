import React from 'react';
import Hero from '../components/Hero';
import OurTeam from '../components/OurTeam';
import Services from '../components/Services';
import References from '../components/References';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Services></Services>
            <References></References>
            <OurTeam></OurTeam>
        </>
    );
};

export default Home;
