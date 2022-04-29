import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Catagory/Feature';
import Experts from '../Experts/Experts';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Feature></Feature>
           <Experts></Experts>
           <Footer></Footer>
        </div>
    );
};

export default Home;