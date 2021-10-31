import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Guide from '../Guide/Guide';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <>
         <Banner></Banner>
         <Services></Services>
         <Guide></Guide>
        <About></About>
        <Footer></Footer>
        </>
    );
};

export default HomePage;