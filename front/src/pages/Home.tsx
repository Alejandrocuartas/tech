import React from 'react';
import './styles/Home.css'
import Hero from '../components/Hero';
import OurTeam from '../components/OurTeam';
import Services from '../components/Services';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <Services></Services>
            <OurTeam></OurTeam>
        </>
    );
};

export default Home;
