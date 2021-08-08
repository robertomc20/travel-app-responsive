import React from 'react';

import '../App.css';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';



export const Home = () => {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    )
}
